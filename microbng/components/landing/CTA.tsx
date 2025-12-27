import { GlassButton } from "@/components/ui/glass-button";

export function CTA() {
  return (
    <section id="cta" className="min-h-screen flex items-center justify-center section-padding">
      <div className="page-container text-center w-full">
        <h2 className="text-4xl md:text-6xl font-bold max-w-5xl mx-auto cta-heading">
          Ready to Cut Your<br />
          <span className="text-[#39ff14]">Infrastructure Costs by 70%?</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-5xl mx-auto section-description">
          See how MicroBNG can transform your network in just 30 minutes
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center cta-buttons">
          <GlassButton href="https://calendly.com/nixroutetechnologies/new-meeting?month=2025-12" variant="primary" className="w-[240px] h-[55px]" target="_blank" rel="noopener noreferrer">
            Schedule Free Demo
          </GlassButton>
          <GlassButton href="#pricing" variant="secondary" className="w-[240px] h-[55px]">
            Download Datasheet
          </GlassButton>
        </div>
      </div>
    </section>
  );
}
