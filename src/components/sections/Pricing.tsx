import { Button } from "@/components/ui/button";


const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 animate-enter">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Pricing</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Get a custom quote tailored to your automation needs. We partner long-term to evolve your automation portfolio.
        </p>
        <div className="max-w-md mx-auto">
          <div className="rounded-lg border p-8 bg-card shadow-elevated hover-scale">
            <h3 className="text-2xl font-medium mb-4">Custom Solutions</h3>
            <p className="text-muted-foreground mb-6">
              Every business has unique automation needs. Let's discuss your requirements and create a tailored solution.
            </p>
            <a href="#contact">
              <Button variant="premium" size="lg" className="w-full">
                Contact Sales for Pricing
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
