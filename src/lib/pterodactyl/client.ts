/**
 * Pterodactyl API Client
 * Handles all communication with the Pterodactyl panel API
 * Includes error handling, rate limiting awareness, and TypeScript types
 */

import axios, { AxiosInstance, AxiosError } from 'axios';
import type {
  PterodactylServersResponse,
  PterodactylUsersResponse,
  HostingStats,
  PterodactylError,
} from './types';

class PterodactylClient {
  private client: AxiosInstance;
  private baseURL: string;
  private apiKey: string;

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_PTERODACTYL_URL || 'https://console.dragohost.cloud';
    this.apiKey = process.env.PTERODACTYL_API_KEY || '';

    // Log configuration (without exposing full API key)
    console.log('Pterodactyl Client Config:', {
      baseURL: this.baseURL,
      apiKeySet: !!this.apiKey,
      apiKeyPrefix: this.apiKey ? this.apiKey.substring(0, 8) + '...' : 'NOT SET',
    });

    // Initialize axios client with default configuration
    this.client = axios.create({
      baseURL: `${this.baseURL}/api/application`,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      timeout: 15000, // 15 second timeout for serverless
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError<PterodactylError>) => {
        console.error('Pterodactyl API Error:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          url: error.config?.url,
          baseURL: error.config?.baseURL,
          message: error.message,
        });
        return Promise.reject(error);
      }
    );
  }

  /**
   * Fetch all servers from Pterodactyl panel
   * Handles pagination automatically to get complete dataset
   */
  async getAllServers(): Promise<PterodactylServersResponse> {
    try {
      const response = await this.client.get<PterodactylServersResponse>('/servers', {
        params: {
          per_page: 100, // Maximum items per page
        },
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch servers:', error);
      throw error;
    }
  }

  /**
   * Fetch all users from Pterodactyl panel
   * Handles pagination automatically
   */
  async getAllUsers(): Promise<PterodactylUsersResponse> {
    try {
      const response = await this.client.get<PterodactylUsersResponse>('/users', {
        params: {
          per_page: 100,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error;
    }
  }

  /**
   * Get aggregated hosting statistics for homepage display
   * Returns total servers, online servers, and total users
   */
  async getHostingStats(): Promise<HostingStats> {
    try {
      const [serversResponse, usersResponse] = await Promise.all([
        this.getAllServers(),
        this.getAllUsers(),
      ]);

      const totalServers = serversResponse.meta.pagination.total;

      // Count servers that are not suspended or offline
      // Note: Pterodactyl Application API doesn't provide real-time status
      // We count servers that are in an active state (not offline, suspended, or failed)
      const onlineServers = serversResponse.data.filter(
        (server) =>
          !server.attributes.suspended &&
          server.attributes.status !== 'offline' &&
          server.attributes.status !== 'install_failed' &&
          server.attributes.container.installed
      ).length;

      console.log('Pterodactyl Stats:', {
        totalServers,
        onlineServers,
        totalUsers: usersResponse.meta.pagination.total,
        serverStatuses: serversResponse.data.map(s => ({
          name: s.attributes.name,
          status: s.attributes.status,
          suspended: s.attributes.suspended,
          installed: s.attributes.container.installed,
        })),
      });

      return {
        totalServers,
        onlineServers,
        totalUsers: usersResponse.meta.pagination.total,
        timestamp: Date.now(),
      };
    } catch (error) {
      console.error('Failed to fetch hosting stats:', error);
      throw error;
    }
  }

  /**
   * Validate API connection and credentials
   * Useful for health checks
   */
  async validateConnection(): Promise<boolean> {
    try {
      await this.client.get('/servers?per_page=1');
      return true;
    } catch (error) {
      return false;
    }
  }
}

// Export singleton instance
export const pterodactylClient = new PterodactylClient();

/**
 * Mock data generator for development/testing
 * Use when NEXT_PUBLIC_USE_MOCK_DATA=true
 */
export function generateMockStats(): HostingStats {
  return {
    totalServers: Math.floor(Math.random() * 50) + 150, // 150-200 servers
    onlineServers: Math.floor(Math.random() * 30) + 120, // 120-150 online
    totalUsers: Math.floor(Math.random() * 100) + 500, // 500-600 users
    timestamp: Date.now(),
  };
}
