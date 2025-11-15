/**
 * Custom hook for fetching and managing hosting statistics
 * Implements auto-refresh, error handling, and loading states
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import type { HostingStats } from '@/lib/pterodactyl/types';

interface UseStatsOptions {
  refreshInterval?: number;
  autoRefresh?: boolean;
}

interface UseStatsReturn {
  stats: HostingStats | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  lastUpdated: number | null;
}

/**
 * Hook to fetch and auto-refresh hosting statistics
 * @param options Configuration for refresh behavior
 * @returns Stats data, loading state, error, and refresh function
 */
export function useStats(options: UseStatsOptions = {}): UseStatsReturn {
  const {
    refreshInterval = Number(process.env.NEXT_PUBLIC_STATS_REFRESH_INTERVAL) || 30000,
    autoRefresh = true,
  } = options;

  const [stats, setStats] = useState<HostingStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);

  /**
   * Fetch stats from API endpoint
   */
  const fetchStats = useCallback(async () => {
    try {
      setError(null);
      const response = await fetch('/api/stats', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch stats: ${response.status}`);
      }

      const data = await response.json();
      setStats(data);
      setLastUpdated(Date.now());
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch statistics');
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Manual refresh function
   */
  const refresh = useCallback(async () => {
    setLoading(true);
    await fetchStats();
  }, [fetchStats]);

  /**
   * Initial fetch on mount
   */
  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  /**
   * Auto-refresh interval
   */
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchStats();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchStats]);

  return {
    stats,
    loading,
    error,
    refresh,
    lastUpdated,
  };
}
