# 🔌 DragoHost API Documentation

Complete documentation for Pterodactyl API integration and internal Next.js API routes.

## Table of Contents

1. [Pterodactyl API Integration](#pterodactyl-api-integration)
2. [Internal API Routes](#internal-api-routes)
3. [TypeScript Types](#typescript-types)
4. [Usage Examples](#usage-examples)
5. [Error Handling](#error-handling)
6. [Rate Limiting](#rate-limiting)

---

## Pterodactyl API Integration

### Client Configuration

**Location**: [src/lib/pterodactyl/client.ts](src/lib/pterodactyl/client.ts)

The Pterodactyl client is a singleton class that handles all communication with your panel.

```typescript
import { pterodactylClient } from '@/lib/pterodactyl/client';
```

### Environment Variables

```env
# Panel URL (no trailing slash)
NEXT_PUBLIC_PTERODACTYL_URL=https://console.dragohost.cloud

# Application API key (starts with ptla_)
PTERODACTYL_API_KEY=ptla_your_key_here
```

### Authentication

The client automatically includes authentication headers:

```typescript
headers: {
  'Authorization': 'Bearer ptla_...',
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}
```

---

## Pterodactyl Client Methods

### `getAllServers()`

Fetches all servers from the panel with pagination support.

**Signature:**
```typescript
async getAllServers(): Promise<PterodactylServersResponse>
```

**Returns:**
```typescript
{
  object: 'list',
  data: [
    {
      object: 'server',
      attributes: {
        id: 1,
        uuid: '...',
        name: 'My Server',
        status: 'running',
        limits: {
          memory: 2048,
          cpu: 200,
          disk: 10240,
        },
        // ... more fields
      }
    }
  ],
  meta: {
    pagination: {
      total: 150,
      count: 100,
      per_page: 100,
      current_page: 1,
      total_pages: 2
    }
  }
}
```

**Example Usage:**
```typescript
try {
  const response = await pterodactylClient.getAllServers();
  console.log(`Total servers: ${response.meta.pagination.total}`);
  console.log(`Fetched ${response.data.length} servers`);
} catch (error) {
  console.error('Failed to fetch servers:', error);
}
```

**Error Handling:**
```typescript
// Automatically logs errors and throws
// Check console for detailed error information
```

---

### `getAllUsers()`

Fetches all users from the panel with pagination support.

**Signature:**
```typescript
async getAllUsers(): Promise<PterodactylUsersResponse>
```

**Returns:**
```typescript
{
  object: 'list',
  data: [
    {
      object: 'user',
      attributes: {
        id: 1,
        uuid: '...',
        username: 'user123',
        email: 'user@example.com',
        first_name: 'John',
        last_name: 'Doe',
        created_at: '2024-01-01T00:00:00Z',
        // ... more fields
      }
    }
  ],
  meta: {
    pagination: {
      total: 500,
      count: 100,
      per_page: 100,
      current_page: 1,
      total_pages: 5
    }
  }
}
```

**Example Usage:**
```typescript
try {
  const response = await pterodactylClient.getAllUsers();
  console.log(`Total users: ${response.meta.pagination.total}`);
} catch (error) {
  console.error('Failed to fetch users:', error);
}
```

---

### `getHostingStats()`

Aggregates server and user data into simplified stats for the homepage.

**Signature:**
```typescript
async getHostingStats(): Promise<HostingStats>
```

**Returns:**
```typescript
{
  totalServers: 150,      // Total servers in panel
  onlineServers: 120,     // Servers with status 'running' or 'starting'
  totalUsers: 500,        // Total registered users
  timestamp: 1704067200000 // Unix timestamp in milliseconds
}
```

**Example Usage:**
```typescript
try {
  const stats = await pterodactylClient.getHostingStats();

  console.log(`Servers: ${stats.totalServers} (${stats.onlineServers} online)`);
  console.log(`Users: ${stats.totalUsers}`);
  console.log(`Data age: ${Date.now() - stats.timestamp}ms`);
} catch (error) {
  console.error('Failed to fetch stats:', error);
}
```

**Performance:**
- Makes 2 parallel API requests (servers + users)
- Typical response time: 500-1500ms
- Caching recommended for production

---

### `validateConnection()`

Tests API credentials and panel connectivity.

**Signature:**
```typescript
async validateConnection(): Promise<boolean>
```

**Returns:**
- `true` if connection successful
- `false` if connection failed

**Example Usage:**
```typescript
const isConnected = await pterodactylClient.validateConnection();

if (isConnected) {
  console.log('✓ Pterodactyl API connected');
} else {
  console.error('✗ Failed to connect to Pterodactyl API');
}
```

**Use Cases:**
- Startup health checks
- Admin dashboard status indicators
- API credential validation

---

### `generateMockStats()`

Generates fake statistics for development/testing.

**Signature:**
```typescript
function generateMockStats(): HostingStats
```

**Returns:**
```typescript
{
  totalServers: 150-200,    // Random number in range
  onlineServers: 120-150,   // Random number in range
  totalUsers: 500-600,      // Random number in range
  timestamp: Date.now()
}
```

**Example Usage:**
```typescript
import { generateMockStats } from '@/lib/pterodactyl/client';

const mockStats = generateMockStats();
console.log('Mock data:', mockStats);
```

**When to Use:**
- Development without API access
- Testing UI with different numbers
- Demo/preview environments
- Rate limit testing

---

## Internal API Routes

### `GET /api/stats`

Next.js API route that provides cached hosting statistics.

**Location**: [src/app/api/stats/route.ts](src/app/api/stats/route.ts)

**Endpoint:**
```
GET http://localhost:3000/api/stats
```

**Response:**
```json
{
  "totalServers": 150,
  "onlineServers": 120,
  "totalUsers": 500,
  "timestamp": 1704067200000,
  "cached": false,
  "cacheAge": 0,
  "mock": false
}
```

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `totalServers` | number | Total servers in panel |
| `onlineServers` | number | Currently online servers |
| `totalUsers` | number | Total registered users |
| `timestamp` | number | Unix timestamp (ms) of data |
| `cached` | boolean | Whether data came from cache |
| `cacheAge` | number | Age of cache in milliseconds |
| `mock` | boolean | Whether data is mocked |
| `error` | string? | Error message if any |
| `stale` | boolean? | Cache is stale but served anyway |

**Caching Behavior:**

- **Cache Duration**: 30 seconds
- **Fresh Request**: `cached: false`
- **Cached Request**: `cached: true, cacheAge: 15000` (example)
- **Stale Cache**: Served if fresh fetch fails
- **Mock Fallback**: Served if API completely unavailable

**Example Requests:**

```typescript
// Fetch with native fetch
const response = await fetch('/api/stats');
const data = await response.json();
console.log(`Servers: ${data.totalServers}`);

// With axios
import axios from 'axios';
const { data } = await axios.get('/api/stats');

// With cache busting
const response = await fetch('/api/stats?t=' + Date.now());
```

**Error Responses:**

```json
{
  "totalServers": 150,
  "cached": true,
  "stale": true,
  "error": "Failed to fetch fresh data, serving cached data"
}
```

**Status Codes:**
- `200 OK`: Success (even with mock/stale data)
- No error codes returned (graceful degradation)

---

## React Hook: `useStats`

### Overview

Custom hook for fetching and auto-refreshing stats in React components.

**Location**: [src/hooks/useStats.ts](src/hooks/useStats.ts)

**Signature:**
```typescript
function useStats(options?: UseStatsOptions): UseStatsReturn
```

**Options:**
```typescript
interface UseStatsOptions {
  refreshInterval?: number;  // Refresh interval in ms (default: 30000)
  autoRefresh?: boolean;     // Enable auto-refresh (default: true)
}
```

**Returns:**
```typescript
interface UseStatsReturn {
  stats: HostingStats | null;    // Current stats data
  loading: boolean;              // Loading state
  error: string | null;          // Error message
  refresh: () => Promise<void>;  // Manual refresh function
  lastUpdated: number | null;    // Last update timestamp
}
```

### Basic Usage

```typescript
import { useStats } from '@/hooks/useStats';

function MyComponent() {
  const { stats, loading, error } = useStats();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{stats.totalServers} Servers</h2>
      <p>{stats.totalUsers} Users</p>
    </div>
  );
}
```

### Advanced Usage

```typescript
import { useStats } from '@/hooks/useStats';

function AdvancedComponent() {
  const {
    stats,
    loading,
    error,
    refresh,
    lastUpdated
  } = useStats({
    refreshInterval: 60000,  // 1 minute
    autoRefresh: true,
  });

  const handleManualRefresh = async () => {
    await refresh();
    console.log('Stats refreshed!');
  };

  return (
    <div>
      {stats && (
        <>
          <div>Servers: {stats.totalServers}</div>
          <div>Users: {stats.totalUsers}</div>
          <div>
            Last updated: {new Date(lastUpdated).toLocaleTimeString()}
          </div>
          <button onClick={handleManualRefresh}>
            Refresh Now
          </button>
        </>
      )}
    </div>
  );
}
```

### Auto-Refresh

The hook automatically refreshes data at specified intervals:

```typescript
// Refresh every 30 seconds (default)
const { stats } = useStats();

// Refresh every 1 minute
const { stats } = useStats({ refreshInterval: 60000 });

// Disable auto-refresh
const { stats } = useStats({ autoRefresh: false });
```

**Cleanup**: Auto-refresh automatically stops when component unmounts.

---

## TypeScript Types

### Core Types

**Location**: [src/lib/pterodactyl/types.ts](src/lib/pterodactyl/types.ts)

### `HostingStats`

Simplified stats interface for homepage display.

```typescript
interface HostingStats {
  totalServers: number;    // Total servers
  onlineServers: number;   // Online servers
  totalUsers: number;      // Total users
  timestamp: number;       // Unix timestamp (ms)
}
```

### `PterodactylServer`

Complete server object from API.

```typescript
interface PterodactylServer {
  object: 'server';
  attributes: PterodactylServerAttributes;
}

interface PterodactylServerAttributes {
  id: number;
  uuid: string;
  name: string;
  description: string;
  status: 'installing' | 'install_failed' | 'suspended' |
          'running' | 'offline' | 'starting' | 'stopping';
  limits: {
    memory: number;  // MB
    cpu: number;     // Percentage
    disk: number;    // MB
  };
  // ... more fields
}
```

### `PterodactylUser`

Complete user object from API.

```typescript
interface PterodactylUser {
  object: 'user';
  attributes: PterodactylUserAttributes;
}

interface PterodactylUserAttributes {
  id: number;
  uuid: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;  // ISO 8601
  // ... more fields
}
```

---

## Error Handling

### Error Types

**API Connection Errors:**
```typescript
// Network errors, timeout, DNS issues
{
  message: 'Failed to fetch servers',
  code: 'ECONNREFUSED',
  status: undefined
}
```

**Authentication Errors:**
```typescript
// Invalid API key, insufficient permissions
{
  status: 403,
  errors: [{
    code: 'ForbiddenException',
    detail: 'You do not have permission to access this resource'
  }]
}
```

**Rate Limit Errors:**
```typescript
{
  status: 429,
  errors: [{
    code: 'TooManyRequestsException',
    detail: 'Rate limit exceeded'
  }]
}
```

### Handling Errors

**In API Client:**
```typescript
try {
  const stats = await pterodactylClient.getHostingStats();
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.error('API Error:', error.response?.status);
    console.error('Details:', error.response?.data);
  } else {
    console.error('Unknown error:', error);
  }
}
```

**In React Components:**
```typescript
const { stats, error } = useStats();

if (error) {
  // Show user-friendly message
  return <div className="error">Unable to load stats. Please try again.</div>;
}
```

**In API Route:**
```typescript
// Graceful degradation - returns mock data instead of error
if (error) {
  console.error('API error:', error);
  return NextResponse.json({
    ...generateMockStats(),
    mock: true,
    error: 'API unavailable, serving mock data',
  });
}
```

---

## Rate Limiting

### Pterodactyl API Limits

**Default Limits:**
- 60 requests per minute per IP
- 720 requests per hour per IP

**Recommendations:**
- Cache responses (30s minimum)
- Use pagination efficiently
- Combine requests where possible

### Client-Side Caching

**Built-in cache** (30 seconds):
```typescript
// First request: Fetches from API
fetch('/api/stats')  // Cache MISS

// Within 30s: Returns cached data
fetch('/api/stats')  // Cache HIT

// After 30s: Fetches fresh data
fetch('/api/stats')  // Cache MISS
```

**Custom cache duration:**

Edit [src/app/api/stats/route.ts:15](src/app/api/stats/route.ts#L15):
```typescript
const CACHE_DURATION = 60000; // 60 seconds
```

---

## Testing & Development

### Mock Data Mode

Enable mock data in development:

```env
NEXT_PUBLIC_USE_MOCK_DATA=true
```

**Benefits:**
- No API calls made
- Instant response times
- Test UI with different numbers
- No rate limits

### Testing Checklist

- [ ] Stats load on homepage
- [ ] Auto-refresh works (check network tab)
- [ ] Manual refresh button works
- [ ] Error states display properly
- [ ] Loading states show during fetch
- [ ] Cached responses include `cached: true`
- [ ] Mock mode works when enabled
- [ ] API connection validated on startup

---

## Performance Optimization

### Best Practices

1. **Use caching**: 30s minimum cache duration
2. **Pagination**: Fetch 100 items per page maximum
3. **Parallel requests**: Use `Promise.all()` for independent calls
4. **Error boundaries**: Graceful degradation with mock data
5. **Request debouncing**: Prevent excessive manual refreshes

### Monitoring

**Log API performance:**
```typescript
console.time('pterodactyl-api');
const stats = await pterodactylClient.getHostingStats();
console.timeEnd('pterodactyl-api');
// Output: pterodactyl-api: 850ms
```

**Monitor cache hit rate:**
```typescript
fetch('/api/stats')
  .then(res => res.json())
  .then(data => {
    console.log(`Cache ${data.cached ? 'HIT' : 'MISS'}`);
  });
```

---

## API Reference Quick Links

**External Documentation:**
- [Pterodactyl API Docs](https://dashflo.net/docs/api/pterodactyl/v1/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

**Internal Code:**
- [Pterodactyl Client](src/lib/pterodactyl/client.ts)
- [TypeScript Types](src/lib/pterodactyl/types.ts)
- [Stats API Route](src/app/api/stats/route.ts)
- [useStats Hook](src/hooks/useStats.ts)

---

**Need help?** Check the [README](README.md) or [SETUP-GUIDE](SETUP-GUIDE.md) for more information.
