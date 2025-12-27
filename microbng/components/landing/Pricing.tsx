import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlassButton } from "@/components/ui/glass-button";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      desc: "For small ISPs",
      price: "Contact Sales",
      features: [
        "Up to 10K subscribers",
        "Single node deployment",
        "Email support",
        "Community documentation",
        "PPPoE & DHCP support"
      ]
    },
    {
      name: "Growth",
      desc: "Regional providers",
      price: "Contact Sales",
      features: [
        "Up to 500K subscribers",
        "Multi-node clustering",
        "Priority support",
        "Advanced QoS & FUP",
        "High availability setup",
        "Professional services"
      ],
      featured: true
    },
    {
      name: "Carrier",
      desc: "Large-scale deployments",
      price: "Contact Sales",
      features: [
        "Unlimited subscribers",
        "Multi-POP architecture",
        "24/7 dedicated support",
        "Custom SLA guarantees",
        "White-label options",
        "On-site training"
      ]
    }
  ];

  return (
    <section id="pricing" className="min-h-screen flex items-center justify-center section-padding">
      <div className="page-container w-full">
        <div className="pricing-header">
          <h2 className="text-4xl md:text-5xl font-bold max-w-5xl mx-auto pricing-heading">
            Simple, <span className="text-[#39ff14]">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl pricing-subtitle">
            Subscription-based pricing with no hidden licensing fees
          </p>
        </div>

        <div className="grid md:grid-cols-3 pricing-grid-gap max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <Card key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all pricing-card">
              <CardHeader className="pricing-card-header">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.desc}</CardDescription>
              </CardHeader>
              <CardContent className="pricing-card-content">
                <ul className="pricing-features">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="pricing-feature-item">
                      <span className="text-[#39ff14] mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pricing-card-footer flex justify-center">
                <GlassButton
                  href="#cta"
                  variant="primary"
                  className="w-[155px] h-[50px]"
                >
                  Talk to Sales
                </GlassButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
