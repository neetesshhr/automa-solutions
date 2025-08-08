import { Lightbulb, Workflow, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Discover",
    icon: Lightbulb,
    desc: "Understand your processes, systems, and goals. Identify quick wins and high-ROI automations.",
  },
  {
    title: "Design",
    icon: Workflow,
    desc: "Blueprint robust workflows, data flows, and guardrails. Plan observability and ownership.",
  },
  {
    title: "Deliver & Improve",
    icon: ShieldCheck,
    desc: "Ship in weeks, monitor in production, and iterate for reliability, speed, and scale.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">How we work</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          A simple, outcomes-first approach that works for startups and enterprises alike.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ title, icon: Icon, desc }) => (
            <article key={title} className="rounded-lg border p-6 bg-card shadow-elevated hover-scale">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                  <Icon className="text-primary" />
                </span>
                <h3 className="text-xl font-medium">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
