const categories = [
  {
    name: "Cloud Apps",
    items: ["Slack", "Microsoft Teams", "Gmail", "Outlook", "Google Drive", "Airtable"],
  },
  {
    name: "Databases & Warehouses",
    items: ["PostgreSQL", "MySQL", "Snowflake", "BigQuery", "Redshift"],
  },
  {
    name: "Finance & ERP",
    items: ["QuickBooks", "Xero", "NetSuite", "SAP", "Stripe"],
  },
  {
    name: "Messaging & Events",
    items: ["Kafka", "RabbitMQ", "SQS", "Webhooks"],
  },
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Integrations we support</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          We work across a wide range of platforms and APIs. If your tool has an API, we can likely automate it.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <article key={cat.name} className="rounded-lg border p-6 bg-card shadow-elevated">
              <h3 className="text-lg font-medium mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((i) => (
                  <span key={i} className="text-xs rounded-full border px-3 py-1 bg-secondary/50">{i}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
