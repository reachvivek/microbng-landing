"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "We were hemorrhaging budget on vendor lock-in and watching competitors launch faster. The board was losing patience. Three weeks after switching, we deployed two new markets that would've taken us eight months before.",
    author: "Rajesh Kumar",
    role: "CTO",
    company: "FiberNet India",
    metric: "2M+ subscribers"
  },
  {
    quote: "Every growth spike meant emergency procurement meetings and exec escalations. I was spending more time in vendor calls than building our network. Now I sleep through peak hours.",
    author: "Sarah Chen",
    role: "VP Engineering",
    company: "MetroLink Broadband",
    metric: "1.5M+ subscribers"
  },
  {
    quote: "Our expansion strategy was hostage to 6-month lead times. We'd identify a market opportunity and by the time hardware arrived, competitors had already moved in. That problem just... disappeared.",
    author: "Michael Rodriguez",
    role: "Head of Infrastructure",
    company: "ConnectWave ISP",
    metric: "800K+ subscribers"
  },
  {
    quote: "I was three months from getting fired. Our legacy BNG was collapsing under load and the vendor wanted another million for an upgrade. Took a bet on the migration. Saved my career and the company.",
    author: "David Thompson",
    role: "Network Director",
    company: "SwiftNet Solutions",
    metric: "1.2M+ subscribers"
  },
  {
    quote: "Peak traffic used to mean war rooms, all-hands, and crossing fingers. Last Diwali we hit 3x normal load. My team was at the holiday party. The system just... handled it.",
    author: "Priya Sharma",
    role: "Chief Operations Officer",
    company: "NetSpeed Telecom",
    metric: "950K+ subscribers"
  },
  {
    quote: "Maintenance windows at 3 AM, angry customers, revenue loss. Our SLA was a joke. First zero-downtime upgrade, I just stared at the monitoring dashboard in disbelief. Customers didn't even notice.",
    author: "James Wilson",
    role: "VP Technology",
    company: "FiberLink Communications",
    metric: "1.8M+ subscribers"
  },
  {
    quote: "Twenty years in telecom, I'd never seen a hardware refresh that didn't involve weekend nightmares and recovery plans. Pushed an update last Tuesday afternoon. Grabbed coffee. It was done.",
    author: "Maria Garcia",
    role: "Infrastructure Lead",
    company: "GlobalNet Broadband",
    metric: "2.5M+ subscribers"
  },
  {
    quote: "Product kept pitching new features but infrastructure was the bottleneck. 'Six months for capacity' became our motto. Now product complains we move too fast. Best problem I've ever had.",
    author: "Ahmed Hassan",
    role: "CTO",
    company: "MegaSpeed ISP",
    metric: "1.1M+ subscribers"
  },
  {
    quote: "My team's morale was shot. Smart engineers reduced to babysitting hardware and arguing with vendors. They wanted to quit and build things. Now they actually do. Retention went from 60% to 95%.",
    author: "Lisa Anderson",
    role: "VP Engineering",
    company: "StreamLine Networks",
    metric: "750K+ subscribers"
  }
];

const stats = [
  { value: "100+", label: "ISPs Worldwide" },
  { value: "10M+", label: "Active Subscribers" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "70%", label: "Cost Reduction" }
];

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#39ff14] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="page-container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center max-w-5xl mx-auto section-heading">
          Trusted by Leading <span className="text-[#39ff14]">ISPs</span>
        </h2>

        {/* Infinite Scrolling Testimonials */}
        <div className="testimonials-carousel-container">
          <div className="testimonials-carousel">
            {/* Render testimonials twice for seamless infinite loop */}
            {[...Array(2)].map((_, setIndex) => (
              testimonials.map((testimonial, index) => (
                <div key={`set-${setIndex}-${index}`} className="testimonial-card-carousel">
                  <div className="testimonial-quote-icon">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="testimonial-text">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <div className="author-name">{testimonial.author}</div>
                      <div className="author-role">{testimonial.role}</div>
                      <div className="author-company">{testimonial.company}</div>
                    </div>
                    <div className="author-metric">{testimonial.metric}</div>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className={`trust-badges ${isVisible ? 'visible' : ''}`}>
          <div className="trust-badge">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>ISO 27001 Certified</span>
          </div>
          <div className="trust-badge">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Enterprise Security</span>
          </div>
          <div className="trust-badge">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>99.99% SLA Guarantee</span>
          </div>
          <div className="trust-badge">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>24/7 Expert Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
