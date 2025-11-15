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

              {/* World Map SVG - Accurate simplified continents */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 2000 857" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>

                {/* Greenland */}
                <path
                  d="M 520,80 L 580,70 L 640,75 L 680,90 L 700,110 L 710,140 L 705,170 L 685,190 L 650,200 L 600,195 L 560,185 L 530,165 L 515,140 L 510,110 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* North America */}
                <path
                  d="M 100,150 L 150,120 L 200,110 L 250,105 L 310,110 L 370,125 L 430,150 L 480,185 L 520,230 L 545,280 L 555,330 L 550,380 L 530,420 L 490,450 L 440,470 L 380,480 L 320,485 L 260,480 L 210,465 L 170,440 L 140,410 L 115,370 L 100,330 L 90,280 L 85,230 L 90,180 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Central America */}
                <path
                  d="M 380,485 L 400,490 L 420,500 L 435,510 L 445,525 L 440,540 L 425,545 L 405,542 L 385,535 L 375,520 L 375,505 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* South America */}
                <path
                  d="M 445,545 L 470,560 L 490,585 L 505,620 L 515,665 L 518,710 L 512,755 L 495,790 L 465,815 L 425,830 L 385,835 L 350,828 L 325,810 L 310,785 L 305,750 L 310,710 L 325,670 L 345,630 L 370,595 L 400,570 L 425,555 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Iceland */}
                <path
                  d="M 750,145 L 770,143 L 785,147 L 790,155 L 785,163 L 770,165 L 755,162 L 748,155 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Europe */}
                <path
                  d="M 850,170 L 880,160 L 920,155 L 960,158 L 1000,170 L 1030,190 L 1050,215 L 1060,245 L 1055,275 L 1035,300 L 1005,315 L 970,325 L 930,328 L 890,320 L 860,305 L 840,280 L 830,250 L 832,220 L 840,195 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Scandinavia */}
                <path
                  d="M 920,85 L 950,78 L 975,80 L 990,90 L 1000,110 L 1005,135 L 1000,160 L 985,175 L 965,180 L 945,178 L 930,168 L 920,150 L 915,125 L 915,100 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Africa */}
                <path
                  d="M 960,330 L 1000,320 L 1040,325 L 1080,340 L 1115,365 L 1140,400 L 1155,445 L 1160,495 L 1158,545 L 1148,595 L 1128,640 L 1100,680 L 1065,715 L 1020,740 L 970,755 L 920,760 L 875,755 L 840,740 L 815,715 L 800,680 L 795,635 L 800,590 L 815,545 L 840,500 L 870,460 L 905,425 L 935,390 L 955,355 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Asia */}
                <path
                  d="M 1060,140 L 1120,125 L 1190,120 L 1270,125 L 1360,140 L 1450,165 L 1540,200 L 1620,245 L 1690,300 L 1740,360 L 1775,420 L 1795,480 L 1800,535 L 1790,585 L 1765,625 L 1725,655 L 1675,675 L 1615,685 L 1550,685 L 1485,675 L 1425,655 L 1370,625 L 1320,585 L 1280,540 L 1250,490 L 1230,440 L 1220,385 L 1215,330 L 1215,275 L 1220,220 L 1230,175 L 1180,185 L 1140,195 L 1100,200 L 1070,195 L 1055,175 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* India Subcontinent */}
                <path
                  d="M 1330,430 L 1365,415 L 1395,425 L 1415,450 L 1425,485 L 1425,520 L 1415,555 L 1395,580 L 1365,590 L 1335,585 L 1310,565 L 1295,535 L 1290,500 L 1295,465 L 1310,440 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Southeast Asia */}
                <path
                  d="M 1480,500 L 1510,505 L 1535,520 L 1545,545 L 1540,570 L 1520,585 L 1490,590 L 1465,580 L 1450,560 L 1450,535 L 1460,515 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Japan */}
                <path
                  d="M 1750,320 L 1770,310 L 1790,315 L 1800,330 L 1805,350 L 1800,375 L 1785,395 L 1765,405 L 1745,400 L 1730,385 L 1725,360 L 1730,340 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Australia */}
                <path
                  d="M 1550,630 L 1600,625 L 1655,635 L 1705,655 L 1745,685 L 1770,720 L 1780,760 L 1775,795 L 1755,820 L 1720,835 L 1675,842 L 1625,840 L 1575,828 L 1535,805 L 1505,775 L 1485,735 L 1480,695 L 1488,660 L 1510,638 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* New Zealand */}
                <path
                  d="M 1850,760 L 1865,755 L 1878,762 L 1882,778 L 1875,795 L 1860,802 L 1845,798 L 1838,785 L 1840,770 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
                />

                {/* Madagascar */}
                <path
                  d="M 1140,620 L 1155,615 L 1168,625 L 1173,645 L 1170,670 L 1160,690 L 1145,698 L 1132,693 L 1125,675 L 1128,650 L 1135,630 Z"
                  fill="url(#map-gradient)"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1.5"
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
