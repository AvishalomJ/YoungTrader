import type { HistoricalData } from './stock';

export interface StockApiResponse {
  data: HistoricalData;
}

export interface StockApiError {
  error: string;
}

export type StockApiResult = StockApiResponse | StockApiError;

export interface ExchangeRateResponse {
  rate: number;
  pair: string;
  timestamp: string;
}

export interface ExchangeRateError {
  error: string;
}

export type ExchangeRateResult = ExchangeRateResponse | ExchangeRateError;
