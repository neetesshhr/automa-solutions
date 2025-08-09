const EnterpriseBar = () => {
  const badges = [
    "Enterprise SLAs",
    "Security-first",
    "Audit-ready",
    "Role-based access",
    "Observability",
  ];
  return (
    <section className="py-6 animate-enter">
      <div className="container mx-auto flex flex-wrap items-center gap-3 justify-center">
        <span className="text-sm text-muted-foreground">Trusted by startups & enterprises</span>
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <span key={b} className="text-xs rounded-full border px-3 py-1 bg-secondary/50">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseBar;
