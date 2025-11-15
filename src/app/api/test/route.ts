/**
 * API Route: /api/test
 * Simple test endpoint to verify environment variables are loaded
 */

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * GET /api/test
 * Returns environment configuration status
 */
export async function GET() {
  const config = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    envVars: {
      NEXT_PUBLIC_PTERODACTYL_URL: process.env.NEXT_PUBLIC_PTERODACTYL_URL || 'NOT SET',
      PTERODACTYL_API_KEY_SET: !!process.env.PTERODACTYL_API_KEY,
      PTERODACTYL_API_KEY_PREFIX: process.env.PTERODACTYL_API_KEY
        ? process.env.PTERODACTYL_API_KEY.substring(0, 8) + '...'
        : 'NOT SET',
      NEXT_PUBLIC_DISCORD_URL: process.env.NEXT_PUBLIC_DISCORD_URL || 'NOT SET',
      NEXT_PUBLIC_STATS_REFRESH_INTERVAL: process.env.NEXT_PUBLIC_STATS_REFRESH_INTERVAL || 'NOT SET',
      NEXT_PUBLIC_USE_MOCK_DATA: process.env.NEXT_PUBLIC_USE_MOCK_DATA || 'NOT SET',
    },
  };

  return NextResponse.json(config);
}
