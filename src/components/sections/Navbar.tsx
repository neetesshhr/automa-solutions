import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:glass-panel">
      <nav className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="inline-flex items-center gap-2">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-primary transition-colors story-link">Features</a>
          <a href="#how" className="hover:text-primary transition-colors story-link">How it works</a>
          <a href="#platforms" className="hover:text-primary transition-colors story-link">Platforms</a>
          <a href="#integrations" className="hover:text-primary transition-colors story-link">Integrations</a>
          <a href="#pricing" className="hover:text-primary transition-colors story-link">Pricing</a>
          <a href="#faq" className="hover:text-primary transition-colors story-link">FAQ</a>
          <a href="#contact"><Button variant="hero" size="sm">Get a demo</Button></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

