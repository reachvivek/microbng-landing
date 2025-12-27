"use client";

import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Architecture } from "@/components/landing/Architecture";
import { Features } from "@/components/landing/Features";
import { Testimonials } from "@/components/landing/Testimonials";
import { Scalability } from "@/components/landing/Scalability";
import { Pricing } from "@/components/landing/Pricing";
import { WhyMicroBNG } from "@/components/landing/WhyMicroBNG";
import { UseCases } from "@/components/landing/UseCases";
import { CTA } from "@/components/landing/CTA";
import { CalendlySection } from "@/components/landing/CalendlySection";
import { Footer } from "@/components/landing/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className="min-h-screen bg-[#121212] text-white">
      <Navigation />
      <div data-animate><Hero /></div>
      <div data-animate><About /></div>
      <div data-animate><Architecture /></div>
      <div data-animate><Features /></div>
      <div data-animate><Testimonials /></div>
      <div data-animate><Scalability /></div>
      <div data-animate><Pricing /></div>
      <div data-animate><WhyMicroBNG /></div>
      <div data-animate><UseCases /></div>
      <div data-animate><CTA /></div>
      <div data-animate><CalendlySection /></div>
      <Footer />
    </div>
  );
}
