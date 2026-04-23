import type { HistoricalData } from '@/types/stock';
import { SEED_DATA_SYMBOLS } from '@/lib/constants';
import path from 'path';
import { promises as fs } from 'fs';

/**
 * Load seed data from public/seed-data/{filename}.json.
 * Used as fallback when the live API is unavailable or rate-limited.
 */
export async function loadSeedData(symbol: string): Promise<HistoricalData | null> {
  const filename = SEED_DATA_SYMBOLS[symbol];
  if (!filename) return null;

  try {
    const filePath = path.join(process.cwd(), 'public', 'seed-data', `${filename}.json`);
    const raw = await fs.readFile(filePath, 'utf-8');
    const data: HistoricalData = JSON.parse(raw);
    return data;
  } catch {
    console.error(`[seedData] Failed to load seed data for ${symbol}`);
    return null;
  }
}
