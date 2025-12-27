import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      title: "Lightning Fast Performance",
      desc: "Handle millions of subscribers with line-rate throughput. Your customers get the speed they paid for."
    },
    {
      title: "Slash Infrastructure Costs",
      desc: "Run on commodity servers or cloud. No expensive proprietary hardware to buy or maintain."
    },
    {
      title: "Deploy in Hours",
      desc: "Spin up new capacity instantly. No waiting weeks for hardware delivery and installation."
    },
    {
      title: "Scale on Demand",
      desc: "Add subscribers as you grow. Start small, scale big. Only pay for what you need."
    },
    {
      title: "Run Anywhere",
      desc: "Works on your servers, any cloud provider, or both. You choose where it runs."
    },
    {
      title: "No Vendor Lock-In",
      desc: "Own your infrastructure. Switch providers anytime. Your network, your rules."
    }
  ];

  return (
    <section id="features" className="min-h-screen flex items-center justify-center section-padding">
      <div className="page-container w-full features-grid-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center max-w-5xl mx-auto features-heading">
          Core <span className="text-[#39ff14]">Features</span>
        </h2>
        <div className="features-grid">
          {features.map((feature, i) => (
            <Card key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 transition-all cursor-pointer feature-card">
              <CardContent className="feature-card-content">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#39ff14] font-bold text-2xl">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold feature-title">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
