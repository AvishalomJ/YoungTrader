import type { HistoricalData, StockPrice } from '@/types/stock';
import { AVAILABLE_ASSETS, DEFAULT_CACHE_TTL } from '@/lib/constants';
import { cache } from './cache';
import { loadSeedData } from './seedData';

const RAPIDAPI_HOST = 'yahoo-finance15.p.rapidapi.com';
const HISTORY_URL = `https://${RAPIDAPI_HOST}/api/v1/markets/stock/history`;

function getApiKey(): string | undefined {
  return process.env.RAPIDAPI_KEY;
}

/**
 * Parse Yahoo Finance API response into our HistoricalData format.
 */
function parseYahooResponse(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  raw: any,
  symbol: string,
  currency: 'USD' | 'ILS',
): HistoricalData {
  const body = raw?.body ?? raw;
  const meta = body?.meta ?? {};
  const rawPrices: unknown[] = body?.body ?? body?.prices ?? [];

  const prices: StockPrice[] = rawPrices
    .map((p: unknown) => {
      const rec = p as Record<string, unknown>;
      const dateRaw = rec.date ?? rec.date_utc;
      let dateStr: string;
      if (typeof dateRaw === 'number') {
        dateStr = new Date(dateRaw * 1000).toISOString().split('T')[0];
      } else {
        dateStr = String(dateRaw).split('T')[0];
      }

      return {
        date: dateStr,
        open: Number(rec.open ?? 0),
        high: Number(rec.high ?? 0),
        low: Number(rec.low ?? 0),
        close: Number(rec.close ?? 0),
        adjClose: Number(rec.adjclose ?? rec.adj_close ?? rec.close ?? 0),
        volume: Number(rec.volume ?? 0),
      };
    })
    .filter((p) => !isNaN(new Date(p.date).getTime()))
    .sort((a, b) => a.date.localeCompare(b.date));

  return {
    symbol,
    currency,
    prices,
    meta: {
      name: meta.longName ?? meta.shortName ?? symbol,
      exchange: meta.exchangeName ?? meta.exchange ?? '',
    },
  };
}

/**
 * Fetch historical stock data.
 * Chain: Yahoo Finance API → seed data fallback.
 */
export async function fetchHistoricalData(
  symbol: string,
  fromDate: string,
): Promise<HistoricalData> {
  const cacheKey = `hist:${symbol}:${fromDate}`;

  const cached = cache.get<HistoricalData>(cacheKey);
  if (cached) return cached;

  const asset = AVAILABLE_ASSETS.find((a) => a.symbol === symbol);
  const currency = asset?.currency ?? 'USD';

  // Try Yahoo Finance via RapidAPI
  const apiKey = getApiKey();
  if (apiKey) {
    try {
      const url = new URL(HISTORY_URL);
      url.searchParams.set('symbol', symbol);
      url.searchParams.set('interval', '1mo');
      url.searchParams.set('diffandsplits', 'false');

      const res = await fetch(url.toString(), {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': RAPIDAPI_HOST,
        },
        next: { revalidate: 86400 },
      });

      if (res.ok) {
        const json = await res.json();
        const data = parseYahooResponse(json, symbol, currency);

        if (data.prices.length > 0) {
          // Filter from requested date
          const filtered: HistoricalData = {
            ...data,
            prices: data.prices.filter((p) => p.date >= fromDate),
          };
          cache.set(cacheKey, filtered, DEFAULT_CACHE_TTL);
          return filtered;
        }
      }
    } catch (err) {
      console.error(`[financialApi] Yahoo Finance error for ${symbol}:`, err);
    }
  }

  // Fallback: seed data
  const seed = await loadSeedData(symbol);
  if (seed) {
    const filtered: HistoricalData = {
      ...seed,
      prices: seed.prices.filter((p) => p.date >= fromDate),
    };
    cache.set(cacheKey, filtered, DEFAULT_CACHE_TTL);
    return filtered;
  }

  throw new Error(`No data available for symbol: ${symbol}`);
}

/**
 * Fetch current exchange rate (e.g. USDILS).
 */
export async function fetchExchangeRate(pair: string): Promise<number> {
  const cacheKey = `fx:${pair}`;
  const cached = cache.get<number>(cacheKey);
  if (cached !== null) return cached;

  const apiKey = getApiKey();
  if (apiKey) {
    try {
      const symbol = `${pair}=X`;
      const url = new URL(HISTORY_URL);
      url.searchParams.set('symbol', symbol);
      url.searchParams.set('interval', '1d');
      url.searchParams.set('diffandsplits', 'false');

      const res = await fetch(url.toString(), {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': RAPIDAPI_HOST,
        },
      });

      if (res.ok) {
        const json = await res.json();
        const body = json?.body ?? json;
        const items: unknown[] = body?.body ?? body?.prices ?? [];
        if (items.length > 0) {
          const last = items[items.length - 1] as Record<string, unknown>;
          const rate = Number(last.close ?? last.adjclose ?? 0);
          if (rate > 0) {
            cache.set(cacheKey, rate, DEFAULT_CACHE_TTL);
            return rate;
          }
        }
      }
    } catch (err) {
      console.error(`[financialApi] Exchange rate error for ${pair}:`, err);
    }
  }

  // Fallback: reasonable default for USDILS
  if (pair === 'USDILS') {
    const fallback = 3.65;
    cache.set(cacheKey, fallback, DEFAULT_CACHE_TTL);
    return fallback;
  }

  throw new Error(`No exchange rate available for pair: ${pair}`);
}
