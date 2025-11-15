/**
 * LocationMap Component
 * Interactive world map showing datacenter locations
 * Features:
 * - Animated ping indicators
 * - Glowing markers
 * - Click for location details
 * - Real-time latency display
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap, Globe, Clock } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

interface Datacenter {
  id: string;
  name: string;
  city: string;
  country: string;
  flag: string;
  position: { x: number; y: number }; // Percentage position on map
  latency: number;
  status: 'online' | 'maintenance';
  specs: {
    servers: number;
    capacity: string;
  };
}

const datacenters: Datacenter[] = [
  {
    id: 'india-mumbai',
    name: 'Mumbai Datacenter',
    city: 'Mumbai',
    country: 'India',
    flag: '🇮🇳',
    position: { x: 66, y: 52 }, // India position on world map
    latency: 8,
    status: 'online',
    specs: {
      servers: 150,
      capacity: '10 Gbps',
    },
  },
];

export function LocationMap() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <section className="relative py-20 lg:py-32 bg-dark-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-dark-800 to-dark-800" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20">
                <span className="text-neon-blue font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Server Locations
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Global{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Lightning-fast servers powered by premium Indian datacenters with ultra-low latency
            </p>
          </div>
        </FadeIn>

        {/* Map Container */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative max-w-6xl mx-auto">
            {/* Map Background */}
            <div className="relative aspect-[2/1] bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl border border-dark-600 overflow-hidden">
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

              {/* World Map SVG - Simplified continents */}
              <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                {/* North America */}
                <path
                  d="M 100,200 L 120,150 L 180,120 L 250,100 L 320,110 L 380,140 L 420,180 L 450,240 L 460,300 L 450,360 L 420,420 L 380,460 L 320,480 L 280,490 L 240,480 L 200,450 L 160,400 L 120,340 L 100,280 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.4)"
                  strokeWidth="2"
                />
                {/* South America */}
                <path
                  d="M 380,500 L 400,520 L 420,560 L 430,620 L 420,700 L 400,780 L 370,840 L 330,880 L 290,900 L 260,890 L 240,860 L 230,810 L 240,750 L 260,680 L 290,620 L 320,560 L 350,520 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.4)"
                  strokeWidth="2"
                />
                {/* Europe */}
                <path
                  d="M 850,180 L 900,160 L 960,170 L 1000,200 L 1020,240 L 1010,280 L 980,310 L 940,320 L 890,310 L 860,280 L 850,240 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.4)"
                  strokeWidth="2"
                />
                {/* Africa */}
                <path
                  d="M 920,340 L 960,320 L 1020,330 L 1080,360 L 1120,420 L 1140,500 L 1130,580 L 1100,660 L 1050,720 L 980,760 L 920,780 L 870,770 L 840,740 L 830,680 L 840,600 L 860,520 L 890,440 L 910,380 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.4)"
                  strokeWidth="2"
                />
                {/* Asia */}
                <path
                  d="M 1050,120 L 1150,100 L 1280,110 L 1420,140 L 1560,180 L 1680,240 L 1760,320 L 1800,400 L 1810,480 L 1780,540 L 1720,580 L 1640,600 L 1540,590 L 1440,560 L 1360,510 L 1300,440 L 1260,360 L 1240,280 L 1220,220 L 1180,170 L 1120,140 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.4)"
                  strokeWidth="2"
                />
                {/* Australia */}
                <path
                  d="M 1500,680 L 1580,670 L 1660,690 L 1720,730 L 1750,790 L 1740,840 L 1700,870 L 1640,880 L 1570,870 L 1510,840 L 1480,790 L 1470,730 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.4)"
                  strokeWidth="2"
                />
              </svg>

              {/* Animated Background Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(14, 165, 233, 0)" />
                    <stop offset="50%" stopColor="rgba(14, 165, 233, 0.5)" />
                    <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" />
                  </linearGradient>
                </defs>
                {/* Horizontal lines */}
                {[20, 40, 60, 80].map((y) => (
                  <motion.line
                    key={`h-${y}`}
                    x1="0%"
                    y1={`${y}%`}
                    x2="100%"
                    y2={`${y}%`}
                    stroke="url(#line-gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: y / 100 }}
                  />
                ))}
              </svg>

              {/* Datacenter Markers */}
              {datacenters.map((dc) => (
                <DatacenterMarker
                  key={dc.id}
                  datacenter={dc}
                  isSelected={selectedLocation === dc.id}
                  onClick={() => setSelectedLocation(selectedLocation === dc.id ? null : dc.id)}
                />
              ))}

              {/* Connection Lines (animated) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {datacenters.map((dc) => (
                  <motion.circle
                    key={`pulse-${dc.id}`}
                    cx={`${dc.position.x}%`}
                    cy={`${dc.position.y}%`}
                    r="0"
                    fill="none"
                    stroke="rgba(14, 165, 233, 0.3)"
                    strokeWidth="2"
                    animate={{
                      r: [0, 80, 160],
                      opacity: [0.8, 0.3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Location Details Panel */}
            <AnimatePresence>
              {selectedLocation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md px-4"
                >
                  <LocationDetailsCard
                    datacenter={datacenters.find((dc) => dc.id === selectedLocation)!}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>

        {/* Stats Row */}
        <FadeIn direction="up" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <StatCard
              icon={Zap}
              value="8ms"
              label="Average Latency"
              color="text-neon-blue"
            />
            <StatCard
              icon={Globe}
              value="10 Gbps"
              label="Network Capacity"
              color="text-neon-purple"
            />
            <StatCard
              icon={Clock}
              value="99.9%"
              label="Uptime SLA"
              color="text-neon-green"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/**
 * Datacenter Marker Component
 */
function DatacenterMarker({
  datacenter,
  isSelected,
  onClick,
}: {
  datacenter: Datacenter;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${datacenter.position.x}%`,
        top: `${datacenter.position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      whileHover={{ scale: 1.2 }}
      onClick={onClick}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 -m-4 rounded-full bg-neon-blue/30 blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Marker */}
      <motion.div
        className={`relative w-8 h-8 rounded-full flex items-center justify-center ${
          isSelected ? 'bg-neon-blue ring-4 ring-neon-blue/30' : 'bg-primary-500'
        }`}
        animate={{
          boxShadow: isSelected
            ? ['0 0 20px rgba(0, 212, 255, 0.5)', '0 0 40px rgba(0, 212, 255, 0.8)', '0 0 20px rgba(0, 212, 255, 0.5)']
            : '0 0 10px rgba(14, 165, 233, 0.5)',
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <MapPin className="w-5 h-5 text-white" />
      </motion.div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-full mt-2 whitespace-nowrap text-xs font-semibold text-white bg-dark-900/90 px-2 py-1 rounded"
      >
        {datacenter.flag} {datacenter.city}
      </motion.div>

      {/* Ping Indicator */}
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-dark-900"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}

/**
 * Location Details Card
 */
function LocationDetailsCard({ datacenter }: { datacenter: Datacenter }) {
  return (
    <div className="bg-dark-900/95 backdrop-blur-lg border border-dark-600 rounded-xl p-6 shadow-2xl">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">
            {datacenter.flag} {datacenter.name}
          </h3>
          <p className="text-gray-400 text-sm">
            {datacenter.city}, {datacenter.country}
          </p>
        </div>
        <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          {datacenter.status.toUpperCase()}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-3xl font-bold text-neon-blue font-mono">{datacenter.latency}ms</div>
          <div className="text-xs text-gray-500">Latency</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-neon-purple font-mono">{datacenter.specs.servers}</div>
          <div className="text-xs text-gray-500">Servers</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-neon-green font-mono">{datacenter.specs.capacity}</div>
          <div className="text-xs text-gray-500">Bandwidth</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Stat Card Component
 */
function StatCard({
  icon: Icon,
  value,
  label,
  color,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-dark-900/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 text-center"
    >
      <Icon className={`w-8 h-8 ${color} mx-auto mb-3`} />
      <div className={`text-4xl font-bold ${color} font-mono mb-2`}>{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
}
