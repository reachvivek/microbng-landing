import { Card, CardContent } from "@/components/ui/card";

export function UseCases() {
  const useCases = [
    {
      title: "ISPs Launching Fiber Broadband",
      desc: "Rapidly deploy BNG infrastructure for new fiber-to-home rollouts without massive upfront capital investment."
    },
    {
      title: "Regional Telcos Modernizing Access",
      desc: "Replace aging hardware BNGs with cloud-native software for improved operational efficiency."
    },
    {
      title: "Cloud-Native ISPs",
      desc: "Born-in-the-cloud service providers building modern, API-driven broadband platforms."
    },
    {
      title: "Lab & Testing Environments",
      desc: "Spin up BNG instances for development, testing, and proof-of-concept deployments in minutes."
    },
    {
      title: "Edge Broadband Deployments",
      desc: "Deploy lightweight BNG nodes at the network edge for latency-sensitive applications."
    },
    {
      title: "Multi-Region Deployments",
      desc: "Consistent BNG software across multiple geographic regions with centralized management."
    }
  ];

  return (
    <section id="use-cases" className="min-h-screen flex items-center justify-center section-padding">
      <div className="page-container w-full">
        <h2 className="text-4xl md:text-5xl font-bold max-w-5xl usecases-heading">
          <span className="text-[#39ff14]">Use Cases</span>
        </h2>
        <div className="grid md:grid-cols-2 usecases-grid-gap usecases-grid">
          {useCases.map((useCase, i) => (
            <Card key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 transition-all">
              <CardContent className="usecase-card-content">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold usecase-title">{useCase.title}</h3>
                    <p className="text-gray-400">{useCase.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#39ff14] font-bold text-xl">{i + 1}</span>
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
