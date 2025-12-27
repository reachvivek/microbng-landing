"use client";

import { useEffect } from "react";

export function CalendlySection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="calendly" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#39ff14] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="page-container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center max-w-5xl mx-auto section-heading">
          Schedule Your <span className="text-[#39ff14]">Free Demo</span>
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-5xl mx-auto section-description">
          Book a 30-minute session with our team to see how MicroBNG can transform your network infrastructure.
        </p>

        {/* Calendly inline widget */}
        <div className="w-full flex justify-center items-start" style={{ minHeight: "1000px" }}>
          <div className="max-w-4xl w-full" style={{ minHeight: "1000px" }}>
            <div
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/nixroutetechnologies/new-meeting?month=2025-12&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "1000px" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
