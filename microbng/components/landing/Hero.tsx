import { GlassButton } from "@/components/ui/glass-button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39ff14] rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ff88] rounded-full filter blur-[150px]"></div>
      </div>

      <div className="page-container text-center relative z-10 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight max-w-5xl mx-auto">
          Deploy Broadband at Scale<br />
          <span className="text-[#39ff14]">
            Without the Hardware Costs
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-5xl mx-auto leading-relaxed section-description">
          MicroBNG helps ISPs launch faster, scale smarter, and cut infrastructure costs by up to 70%.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center section-buttons">
          <GlassButton href="#cta" variant="primary" className="w-[200px] h-[50px]">
            Get Started Free
          </GlassButton>
          <GlassButton href="#about" variant="secondary" className="w-[200px] h-[50px]">
            See How It Works
          </GlassButton>
        </div>
      </div>
    </section>
  );
}
