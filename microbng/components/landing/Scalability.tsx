'use client';

import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";

function MetricCard({ value, suffix, prefix, label, reverse }: { value: number; suffix: string; prefix?: string; label: string; reverse?: boolean }) {
  const { count, ref } = useCountUp(value, 2500, reverse);

  const displayValue = prefix === '<'
    ? `<${Math.ceil(count)}${suffix}`
    : `${Math.floor(count)}${suffix}`;

  return (
    <Card className="bg-white/8 backdrop-blur-2xl border border-white/15">
      <CardContent className="scalability-metric-card">
        <div ref={ref} className="font-bold text-[#39ff14] scalability-metric-number">
          {displayValue}
        </div>
        <div className="text-gray-400 text-sm">{label}</div>
      </CardContent>
    </Card>
  );
}

export function Scalability() {
  const metrics = [
    { value: 10, suffix: "M+", label: "Concurrent Sessions", reverse: false },
    { value: 100, suffix: "Gbps+", label: "Line-Rate Throughput", reverse: false },
    { value: 1, suffix: "ms", label: "Packet Latency", prefix: "<", reverse: true }
  ];

  const scalabilityFeatures = [
    { title: "Horizontal Scaling", desc: "Add nodes on demand. No single point of failure." },
    { title: "Stateless Control Plane", desc: "Session state distributed across cluster for resilience." },
    { title: "High Availability", desc: "Active-active deployments with instant failover." },
    { title: "Multi-POP Ready", desc: "Deploy across multiple points of presence seamlessly." },
    { title: "IPv4 & IPv6 Native", desc: "Dual-stack support from day one." },
    { title: "CGNAT Friendly", desc: "Integrate with carrier-grade NAT solutions." }
  ];

  return (
    <section id="scalability" className="min-h-screen flex items-center justify-center section-padding">
      <div className="page-container w-full">
        <div className="scalability-header">
          <h2 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto scalability-heading">
            Grow from 1,000 to<br />
            <span className="text-[#39ff14]">10 Million Subscribers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl scalability-subtitle">
            Add capacity instantly as you grow. No hardware upgrades, no downtime, no limits.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 scalability-metrics-gap scalability-metrics-bottom">
          {metrics.map((stat, i) => (
            <MetricCard
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              reverse={stat.reverse}
            />
          ))}
        </div>

        {/* Key scalability features */}
        <div className="grid md:grid-cols-3 scalability-features-gap scalability-features-bottom">
          {scalabilityFeatures.map((item, i) => (
            <Card key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <CardContent className="scalability-feature-card">
                <h3 className="font-semibold text-[#39ff14] scalability-feature-title">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
