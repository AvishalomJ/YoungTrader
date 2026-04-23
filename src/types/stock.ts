export interface StockPrice {
  date: string; // ISO date (YYYY-MM-DD)
  open: number;
  high: number;
  low: number;
  close: number;
  adjClose: number;
  volume: number;
}

export interface HistoricalData {
  symbol: string;
  currency: 'USD' | 'ILS';
  prices: StockPrice[];
  meta: {
    name: string;
    exchange: string;
  };
}

export interface AssetInfo {
  symbol: string;
  name: string; // Hebrew display name
  nameEn: string; // English name
  market: 'US' | 'IL';
  currency: 'USD' | 'ILS';
  type: 'index' | 'stock';
}
