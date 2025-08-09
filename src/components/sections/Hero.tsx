import React from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";
import { ShieldCheck, Cog, LineChart, Layers } from "lucide-react";

const Hero: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const demoVideo = "";

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
      className="relative overflow-hidden py-16 md:py-24 animate-enter"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "var(--gradient-surface)" }} />
      <div className="absolute inset-0 pointer-events-none">
        <ShieldCheck className="absolute top-10 left-6 h-8 w-8 text-muted-foreground/20 pulse" aria-hidden="true" />
        <Cog className="absolute bottom-16 left-1/3 h-10 w-10 text-muted-foreground/15" aria-hidden="true" />
        <LineChart className="absolute top-20 right-8 h-9 w-9 text-muted-foreground/15" aria-hidden="true" />
        <Layers className="absolute bottom-8 right-1/4 h-8 w-8 text-muted-foreground/20" aria-hidden="true" />
      </div>
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-10 relative z-10">
        <div>
          <p className="mb-3 text-sm text-muted-foreground">Automation Experts • Managed Workflows</p>
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Automation services for finance, accounting, and operations
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We design, build, and run scalable automations across your stack that cut manual work, reduce errors, and accelerate your back-office.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact"><Button variant="hero" size="xl">Get a demo</Button></a>
            <a href="#platforms"><Button variant="outline" size="lg">See how it works</Button></a>
          </div>
        </div>
        <div className="relative animate-fade-in rounded-xl overflow-hidden border border-border bg-card shadow-lg">
          {demoVideo ? (
            <video
              src={demoVideo}
              controls
              preload="metadata"
              playsInline
              poster={heroImage}
              aria-label="EffortZero automation demo video"
              className="w-full h-full object-cover aspect-video"
            />
          ) : (
            <img
              src={heroImage}
              alt="EffortZero automation workflows overview"
              loading="lazy"
              className="w-full h-full object-cover aspect-video"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
