const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} FlowPilot Automations</p>
        <nav className="flex items-center gap-4">
          <a href="#features" className="hover:text-primary">Features</a>
          <a href="#n8n" className="hover:text-primary">n8n</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
