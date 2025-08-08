const N8nSection = () => {
  return (
    <section id="platforms" className="py-16 md:py-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Platforms we implement</h2>
          <p className="text-muted-foreground mb-6">
            We design and manage reliable workflows using best-in-class automation platforms (open-source and commercial). From integration to observability, we run it for you.
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
