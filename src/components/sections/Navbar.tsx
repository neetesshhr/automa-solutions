import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:glass-panel">
      <nav className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="inline-flex items-center gap-2">
          <span className="text-xl font-semibold text-gradient-primary">FlowPilot Automations</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#n8n" className="hover:text-primary transition-colors">n8n</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <a href="#contact"><Button variant="hero" size="sm">Get a demo</Button></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
