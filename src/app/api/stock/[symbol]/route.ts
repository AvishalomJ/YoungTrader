import { NextResponse } from 'next/server';
import { fetchHistoricalData } from '@/services/financialApi';
import { AVAILABLE_ASSETS } from '@/lib/constants';
import type { StockApiResponse, StockApiError } from '@/types/api';

export async function GET(
  request: Request,
  { params }: { params: { symbol: string } },
) {
  const symbol = decodeURIComponent(params.symbol);

  // Validate symbol against available assets
  const asset = AVAILABLE_ASSETS.find((a) => a.symbol === symbol);
  if (!asset) {
    return NextResponse.json(
      { error: `Invalid symbol: ${symbol}. Use one of: ${AVAILABLE_ASSETS.map((a) => a.symbol).join(', ')}` } satisfies StockApiError,
      { status: 400 },
    );
  }

  // Parse query parameters
  const { searchParams } = new URL(request.url);
  const fromDate = searchParams.get('from') ?? '2014-01-01';

  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fromDate)) {
    return NextResponse.json(
      { error: 'Invalid date format. Use YYYY-MM-DD.' } satisfies StockApiError,
      { status: 400 },
    );
  }

  try {
    const data = await fetchHistoricalData(symbol, fromDate);
    return NextResponse.json({ data } satisfies StockApiResponse);
  } catch (err) {
    console.error(`[api/stock] Error fetching ${symbol}:`, err);
    return NextResponse.json(
      { error: 'Failed to fetch stock data. Please try again later.' } satisfies StockApiError,
      { status: 500 },
    );
  }
}
