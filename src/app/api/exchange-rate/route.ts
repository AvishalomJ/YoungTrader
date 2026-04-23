import { NextResponse } from 'next/server';
import { fetchExchangeRate } from '@/services/financialApi';
import type { ExchangeRateResponse, ExchangeRateError } from '@/types/api';

const SUPPORTED_PAIRS = ['USDILS'];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pair = searchParams.get('pair') ?? 'USDILS';

  if (!SUPPORTED_PAIRS.includes(pair)) {
    return NextResponse.json(
      { error: `Unsupported pair: ${pair}. Supported: ${SUPPORTED_PAIRS.join(', ')}` } satisfies ExchangeRateError,
      { status: 400 },
    );
  }

  try {
    const rate = await fetchExchangeRate(pair);
    return NextResponse.json({
      rate,
      pair,
      timestamp: new Date().toISOString(),
    } satisfies ExchangeRateResponse);
  } catch (err) {
    console.error(`[api/exchange-rate] Error fetching ${pair}:`, err);
    return NextResponse.json(
      { error: 'Failed to fetch exchange rate. Please try again later.' } satisfies ExchangeRateError,
      { status: 500 },
    );
  }
}
