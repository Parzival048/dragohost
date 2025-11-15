/**
 * TypeScript interfaces for Pterodactyl API responses
 * Documentation: https://dashflo.net/docs/api/pterodactyl/v1/
 */

export interface PterodactylServerAttributes {
  id: number;
  external_id: string | null;
  uuid: string;
  identifier: string;
  name: string;
  description: string;
  status: 'installing' | 'install_failed' | 'suspended' | 'running' | 'offline' | 'starting' | 'stopping';
  suspended: boolean;
  limits: {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    cpu: number;
  };
  feature_limits: {
    databases: number;
    allocations: number;
    backups: number;
  };
  user: number;
  node: number;
  allocation: number;
  nest: number;
  egg: number;
  container: {
    startup_command: string;
    image: string;
    installed: boolean;
    environment: Record<string, string>;
  };
  created_at: string;
  updated_at: string;
}

export interface PterodactylServer {
  object: 'server';
  attributes: PterodactylServerAttributes;
}

export interface PterodactylServersResponse {
  object: 'list';
  data: PterodactylServer[];
  meta: {
    pagination: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
}

export interface PterodactylUserAttributes {
  id: number;
  external_id: string | null;
  uuid: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  language: string;
  root_admin: boolean;
  '2fa': boolean;
  created_at: string;
  updated_at: string;
}

export interface PterodactylUser {
  object: 'user';
  attributes: PterodactylUserAttributes;
}

export interface PterodactylUsersResponse {
  object: 'list';
  data: PterodactylUser[];
  meta: {
    pagination: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
}

/**
 * Aggregated stats for display on the homepage
 */
export interface HostingStats {
  totalServers: number;
  onlineServers: number;
  totalUsers: number;
  timestamp: number;
}

/**
 * Error response from Pterodactyl API
 */
export interface PterodactylError {
  errors: Array<{
    code: string;
    status: string;
    detail: string;
  }>;
}
