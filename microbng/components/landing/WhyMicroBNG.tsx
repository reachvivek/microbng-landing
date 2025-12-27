import { Card } from "@/components/ui/card";

export function WhyMicroBNG() {
  const comparisonData = [
    { feature: "Deployment Time", micro: "Hours", trad: "Weeks/Months" },
    { feature: "Initial Cost", micro: "Low (software)", trad: "High (hardware)" },
    { feature: "Horizontal Scaling", micro: "✓ Yes", trad: "✗ No" },
    { feature: "Cloud Ready", micro: "✓ Native", trad: "✗ Limited" },
    { feature: "Vendor Lock-in", micro: "✓ None", trad: "✗ Strong" },
    { feature: "API Integration", micro: "✓ API-first", trad: "✗ Limited" },
    { feature: "Maintenance Windows", micro: "Rolling updates", trad: "Scheduled downtime" },
    { feature: "Future-proof", micro: "✓ Software-defined", trad: "✗ Hardware dependent" }
  ];

  return (
    <section id="why" className="min-h-screen flex items-center justify-center section-padding">
      <div className="page-container w-full">
        <h2 className="text-4xl md:text-5xl font-bold max-w-5xl why-heading">
          Why <span className="text-[#39ff14]">MicroBNG</span>?
        </h2>

        {/* Comparison Table */}
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/8 backdrop-blur-2xl border border-white/15">
                <tr>
                  <th className="text-left why-table-header">Feature</th>
                  <th className="text-center why-table-header text-[#39ff14]">MicroBNG</th>
                  <th className="text-center why-table-header text-gray-500">Traditional Hardware BNG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-all">
                    <td className="why-table-cell font-medium">{row.feature}</td>
                    <td className="why-table-cell text-center text-[#39ff14]">{row.micro}</td>
                    <td className="why-table-cell text-center text-gray-500">{row.trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}
