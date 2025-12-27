import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  const architectureFlow = [
    { label: "Access Layer", desc: "PPPoE/DHCP subscribers" },
    { label: "MicroBNG", desc: "VPP + DPDK data plane" },
    { label: "AAA/RADIUS", desc: "Authentication & policy" },
    { label: "Core Network", desc: "IP routing & transit" }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center section-padding">
      <div className="page-container w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center max-w-5xl mx-auto section-heading">
          What is <span className="text-[#39ff14]">MicroBNG</span>?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-12 text-lg text-gray-300">
            <p>
              <strong className="text-white">Traditional broadband gateways</strong> lock you into expensive hardware contracts and slow procurement cycles.
            </p>
            <p>
              <strong className="text-[#39ff14]">MicroBNG changes that.</strong> Deploy in hours, not months. Scale instantly as your subscribers grow. Run on any server or cloud platform you choose.
            </p>
            <p>
              Get carrier-grade performance without carrier-grade costs. Perfect for growing ISPs, fiber deployments, and modern telcos ready to compete.
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <CardHeader>
              <CardTitle className="text-xl text-center">Architecture Flow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 arch-flow-content">
              {architectureFlow.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/8 backdrop-blur-2xl border border-white/15 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#39ff14] font-bold text-lg">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-base">{item.label}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
