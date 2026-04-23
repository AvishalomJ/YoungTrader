import type { AssetInfo } from '@/types/stock';

export const AVAILABLE_ASSETS: AssetInfo[] = [
  { symbol: '^GSPC', name: 'S&P 500', nameEn: 'S&P 500', market: 'US', currency: 'USD', type: 'index' },
  { symbol: '^IXIC', name: 'נאסד"ק', nameEn: 'NASDAQ', market: 'US', currency: 'USD', type: 'index' },
  { symbol: 'AAPL', name: 'אפל', nameEn: 'Apple', market: 'US', currency: 'USD', type: 'stock' },
  { symbol: 'DIS', name: 'דיסני', nameEn: 'Disney', market: 'US', currency: 'USD', type: 'stock' },
  { symbol: '^TA35', name: 'ת"א 35', nameEn: 'TA-35', market: 'IL', currency: 'ILS', type: 'index' },
  { symbol: '^TA125', name: 'ת"א 125', nameEn: 'TA-125', market: 'IL', currency: 'ILS', type: 'index' },
  { symbol: 'LUMI.TA', name: 'בנק לאומי', nameEn: 'Bank Leumi', market: 'IL', currency: 'ILS', type: 'stock' },
  { symbol: 'TEVA.TA', name: 'טבע', nameEn: 'Teva', market: 'IL', currency: 'ILS', type: 'stock' },
];

/** 24 hours in milliseconds */
export const DEFAULT_CACHE_TTL = 24 * 60 * 60 * 1000;

/** Average annual inflation rate — Israel (Bank of Israel target) */
export const INFLATION_RATE_IL = 0.025;

/** Average annual inflation rate — US (Fed target) */
export const INFLATION_RATE_US = 0.025;

/** Symbols that have seed data available */
export const SEED_DATA_SYMBOLS: Record<string, string> = {
  '^GSPC': 'sp500',
  '^TA35': 'ta35',
  'AAPL': 'apple',
};
