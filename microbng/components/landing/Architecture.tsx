"use client";

import { useEffect, useRef, useState } from "react";

export function Architecture() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="architecture" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#39ff14] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="page-container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center max-w-5xl mx-auto section-heading">
          From Hardware to <span className="text-[#39ff14]">Cloud in Hours</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Traditional BNG */}
          <div className={`architecture-card traditional ${isVisible ? 'visible' : ''}`}>
            <div className="architecture-card-header">
              <div className="architecture-icon-badge traditional">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="architecture-card-title">Traditional BNG</h3>
            </div>

            <div className="architecture-visual">
              <div className="arch-box hardware">
                <div className="arch-label">Hardware Appliance</div>
                <div className="arch-cost">$500K - $2M</div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-limitations">
                <div className="limitation-item">
                  <span className="limitation-icon">⚠</span>
                  <span>6-12 Month Deployment</span>
                </div>
                <div className="limitation-item">
                  <span className="limitation-icon">⚠</span>
                  <span>Fixed Capacity</span>
                </div>
                <div className="limitation-item">
                  <span className="limitation-icon">⚠</span>
                  <span>Complex Upgrades</span>
                </div>
                <div className="limitation-item">
                  <span className="limitation-icon">⚠</span>
                  <span>Vendor Lock-in</span>
                </div>
              </div>
            </div>
          </div>

          {/* MicroBNG */}
          <div className={`architecture-card virtual ${isVisible ? 'visible' : ''}`}>
            <div className="architecture-card-header">
              <div className="architecture-icon-badge virtual">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="architecture-card-title">MicroBNG</h3>
            </div>

            <div className="architecture-visual">
              <div className="arch-box software">
                <div className="arch-label">Pure Software</div>
                <div className="arch-cost savings">70% Cost Savings</div>
              </div>
              <div className="arch-arrow success">↓</div>
              <div className="arch-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Deploy in Hours</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Auto-scaling</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Zero-downtime Updates</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Cloud-native</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture flow diagram */}
        <div className={`mt-16 architecture-flow ${isVisible ? 'visible' : ''}`}>
          <h3 className="architecture-flow-title">How MicroBNG Works</h3>
          <div className="flow-container">
            <div className="flow-step">
              <div className="flow-number">1</div>
              <div className="flow-content">
                <div className="flow-title">Subscriber Traffic</div>
                <div className="flow-desc">PPPoE/IPoE sessions from end users</div>
              </div>
            </div>
            <div className="flow-connector">→</div>
            <div className="flow-step">
              <div className="flow-number">2</div>
              <div className="flow-content">
                <div className="flow-title">MicroBNG Core</div>
                <div className="flow-desc">Software-defined session management</div>
              </div>
            </div>
            <div className="flow-connector">→</div>
            <div className="flow-step">
              <div className="flow-number">3</div>
              <div className="flow-content">
                <div className="flow-title">Cloud Scale</div>
                <div className="flow-desc">Auto-scale to millions of users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
