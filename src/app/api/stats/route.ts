/**
 * API Route: /api/stats
 * Fetches real-time hosting statistics from Pterodactyl panel
 * Implements caching to reduce API load and improve performance
 */

import { NextResponse } from 'next/server';
import { pterodactylClient, generateMockStats } from '@/lib/pterodactyl/client';
import type { HostingStats } from '@/lib/pterodactyl/types';

// Cache configuration
let cachedStats: HostingStats | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 30000; // 30 seconds cache

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * GET /api/stats
 * Returns current hosting statistics with caching
 */
export async function GET() {
  try {
    const now = Date.now();
    const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

    // Return cached data if still valid
    if (cachedStats && (now - lastFetchTime) < CACHE_DURATION) {
      return NextResponse.json({
        ...cachedStats,
        cached: true,
        cacheAge: now - lastFetchTime,
      });
    }

    // Fetch fresh data
    let stats: HostingStats;

    if (useMockData) {
      // Use mock data for development
      stats = generateMockStats();
    } else {
      // Fetch real data from Pterodactyl
      stats = await pterodactylClient.getHostingStats();
    }

    // Update cache
    cachedStats = stats;
    lastFetchTime = now;

    return NextResponse.json({
      ...stats,
      cached: false,
      mock: useMockData,
    });

  } catch (error) {
    console.error('Stats API error:', error);

    // If we have cached data, return it even if expired
    if (cachedStats) {
      return NextResponse.json({
        ...cachedStats,
        cached: true,
        stale: true,
        error: 'Failed to fetch fresh data, serving cached data',
      });
    }

    // Fallback to mock data on error
    const fallbackStats = generateMockStats();
    return NextResponse.json({
      ...fallbackStats,
      mock: true,
      error: 'API unavailable, serving mock data',
    }, { status: 200 }); // Return 200 with mock data instead of error
  }
}
