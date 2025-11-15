/**
 * Home Page Component
 * Main landing page that combines all sections
 * Implements smooth scrolling and section navigation
 */

import { Hero } from '@/components/sections/Hero';
import { Plans } from '@/components/sections/Plans';
import { LocationMap } from '@/components/sections/LocationMap';
import { PlanComparison } from '@/components/sections/PlanComparison';
import { PerformanceDashboard } from '@/components/sections/PerformanceDashboard';
import { Features } from '@/components/sections/Features';
import { Footer } from '@/components/sections/Footer';
import { ParticleBackground } from '@/components/animations/ParticleBackground';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-dark-900">
      {/* Particle Background Effects */}
      <ParticleBackground />

      {/* Hero Section */}
      <Hero />

      {/* Real-Time Performance Dashboard */}
      <PerformanceDashboard />

      {/* Plans Section */}
      <Plans />

      {/* Plan Comparison Table */}
      <PlanComparison />

      {/* Server Location Map */}
      <LocationMap />

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <Footer />
    </main>
  );
}
