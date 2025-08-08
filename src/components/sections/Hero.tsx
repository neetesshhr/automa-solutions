import React from "react";
import heroImage from "@/assets/hero-automation.jpg";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "var(--gradient-surface)" }} />
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-10 relative">
        <div>
          <p className="mb-3 text-sm text-muted-foreground">n8n Experts • Managed Automations</p>
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Automation services for finance, accounting, and operations
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We design, build, and run scalable n8n workflows that cut manual work, reduce errors, and accelerate your back-office.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact"><Button variant="hero" size="xl">Get a demo</Button></a>
            <a href="#n8n"><Button variant="outline" size="lg">See how it works</Button></a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="Abstract workflow automation connecting finance, accounting, and operations"
            loading="lazy"
            className="rounded-lg shadow-glow w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
