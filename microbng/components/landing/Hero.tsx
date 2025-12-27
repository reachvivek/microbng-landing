"use client";

import { GlassButton } from "@/components/ui/glass-button";
import { Badge } from "@/components/ui/badge";
import { useCountUp } from "@/hooks/useCountUp";

export function Hero() {
  const { count: cost, ref: costRef } = useCountUp(70, 2000);
  const { count: speed, ref: speedRef } = useCountUp(10, 2000);
  const { count: uptime, ref: uptimeRef } = useCountUp(99.99, 2000);
  const { count: users, ref: usersRef } = useCountUp(10, 2500);
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#39ff14] rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#00ff88] rounded-full filter blur-[150px]"></div>
      </div>

      <div className="page-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="text-center lg:text-left">
            <div className="mt-4 mb-6 md:mb-8 flex justify-center lg:justify-start">
              <Badge variant="outline" className="text-[#39ff14] border-[#39ff14]/30 bg-[#39ff14]/5 px-3 py-1 text-xs font-medium">
                Trusted by 100+ ISPs Worldwide
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-gray-400 text-2xl sm:text-3xl md:text-4xl font-normal block mb-2">Virtual BNG</span>
              <span className="block" ref={usersRef}>Scale to<br /><span className="text-[#39ff14] whitespace-nowrap">{Math.round(users)}M+ Users</span></span>
              <span className="text-3xl sm:text-4xl md:text-5xl text-gray-400 font-normal block">
                Deploy in Hours
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-6 max-w-xl mx-auto lg:mx-0">
              Pure software. Zero hardware. Enterprise-grade performance.
            </p>

            <div className="hero-buttons">
              <GlassButton href="#cta" variant="primary" className="w-[170px] h-[46px] text-sm px-4">
                Calculate Savings
              </GlassButton>
              <GlassButton href="https://calendly.com/nixroutetechnologies/new-meeting?month=2025-12" variant="secondary" className="w-[170px] h-[46px] text-sm px-4" target="_blank" rel="noopener noreferrer">
                Request Callback
              </GlassButton>
            </div>
          </div>

          {/* Right Column: Metrics */}
          <div className="hero-metrics-container mx-auto lg:mx-0">
            <div className="glass hero-metric-card" ref={costRef}>
              <div className="hero-metric-number">{Math.round(cost)}%</div>
              <div className="hero-metric-label">Cost Reduction</div>
            </div>
            <div className="glass hero-metric-card" ref={speedRef}>
              <div className="hero-metric-number">{Math.round(speed)}x</div>
              <div className="hero-metric-label">Faster Deployment</div>
            </div>
            <div className="glass hero-metric-card" ref={uptimeRef}>
              <div className="hero-metric-number">{uptime.toFixed(2)}%</div>
              <div className="hero-metric-label">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
