import { GlassButton } from "@/components/ui/glass-button";

export function Navigation() {
  return (
    <nav className="main-nav">
      <div className="page-container main-nav-container">
        <a href="#hero" className="text-2xl font-bold hover:opacity-80 transition-opacity cursor-pointer">
          Micro<span className="text-[#39ff14]">BNG</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm items-center">
          <a href="#about" className="hover:text-[#39ff14] transition-colors">About</a>
          <a href="#features" className="hover:text-[#39ff14] transition-colors">Features</a>
          <a href="#scalability" className="hover:text-[#39ff14] transition-colors">Scalability</a>
          <a href="#pricing" className="hover:text-[#39ff14] transition-colors">Pricing</a>
          <a href="#why" className="hover:text-[#39ff14] transition-colors">Why MicroBNG</a>
        </div>
        <GlassButton href="#cta" variant="primary" className="w-[130px] h-[40px] text-sm">
          Get Demo
        </GlassButton>
      </div>
    </nav>
  );
}
