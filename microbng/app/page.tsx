import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Features } from "@/components/landing/Features";
import { Scalability } from "@/components/landing/Scalability";
import { Pricing } from "@/components/landing/Pricing";
import { WhyMicroBNG } from "@/components/landing/WhyMicroBNG";
import { UseCases } from "@/components/landing/UseCases";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Scalability />
      <Pricing />
      <WhyMicroBNG />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  );
}
