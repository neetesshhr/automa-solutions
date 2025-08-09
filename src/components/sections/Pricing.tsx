import { Button } from "@/components/ui/button";


const tiers = [
  {
    name: "Starter",
    price: "$2,000/mo",
    features: [
      "Dedicated automation engineer",
      "2-3 workflows / month",
      "Monitoring & alerts",
      "Email support",
    ],
  },
  {
    name: "Scale",
    price: "$5,000+/mo",
    features: [
      "Senior automation architect",
      "Roadmap & governance",
      "Advanced observability",
      "Priority support",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 animate-enter">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Simple monthly retainers</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Get predictable delivery and outcomes. We partner long-term to evolve your automation portfolio.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((t) => (
            <article key={t.name} className="rounded-lg border p-6 bg-card shadow-elevated hover-scale">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-medium">{t.name}</h3>
                <div className="text-2xl font-semibold">{t.price}</div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 mb-6">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact"><Button variant="premium" className="w-full">Talk to sales</Button></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
