const N8nSection = () => {
  return (
    <section id="n8n" className="py-16 md:py-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why n8n for automations</h2>
          <p className="text-muted-foreground mb-6">
            n8n is a powerful, open-source automation platform with 400+ integrations. We design resilient workflows, manage deployments, and monitor runs so your team can focus on outcomes.
          </p>
          <ul className="space-y-3 text-sm">
            <li>• Flexible: self-hosted or cloud, data-friendly</li>
            <li>• Reliable: retries, alerts, and observability baked in</li>
            <li>• Scalable: from quick wins to mission-critical processes</li>
          </ul>
        </div>
        <div className="rounded-lg border p-6 bg-card shadow-elevated">
          <h3 className="text-lg font-medium mb-2">Workflow blueprint</h3>
          <p className="text-sm text-muted-foreground mb-4">
            A typical finance automation: capture invoice → extract data → validate policy → route for approval → post to ERP → notify stakeholders.
          </p>
          <div className="grid grid-cols-3 gap-3 text-xs text-center">
            {[
              "Capture",
              "Extract",
              "Validate",
              "Approve",
              "Post",
              "Notify",
            ].map((s) => (
              <div key={s} className="rounded-md border p-3 bg-secondary/40">{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default N8nSection;
