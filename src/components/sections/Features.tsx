import { Banknote, Calculator, Workflow } from "lucide-react";

const features = [
  {
    title: "Finance & Accounting",
    icon: Calculator,
    points: [
      "Invoice processing & approvals",
      "Reconciliation & month-end automations",
      "Expense policy checks & reporting",
    ],
  },
  {
    title: "Sales & CRM",
    icon: Banknote,
    points: [
      "Lead routing & enrichment",
      "Quote-to-cash sync",
      "Renewals & billing reminders",
    ],
  },
  {
    title: "Operations & IT",
    icon: Workflow,
    points: [
      "User provisioning & access reviews",
      "Data sync across tools",
      "Incident triage & notifications",
    ],
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Built for service companies</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Practical automations that integrate your existing stack. We focus on high-ROI back-office workflows that are reliable and maintainable.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ title, icon: Icon, points }) => (
            <article key={title} className="rounded-lg border p-6 bg-card shadow-elevated hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                  <Icon className="text-primary" />
                </span>
                <h3 className="text-xl font-medium">{title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
