const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>© {new Date().getFullYear()} EffortZero</p>
          <a href="/privacy-policy" className="hover:text-primary">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-primary">Terms of Service</a>
        </div>
        <nav className="flex items-center gap-4 flex-wrap justify-center">
          <a href="#features" className="hover:text-primary">Features</a>
          <a href="#how" className="hover:text-primary">How it works</a>
          <a href="#platforms" className="hover:text-primary">Platforms</a>
          <a href="#integrations" className="hover:text-primary">Integrations</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
