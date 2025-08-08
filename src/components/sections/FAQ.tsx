import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is effectzero?</AccordionTrigger>
            <AccordionContent>
              effectzero is a managed automation partner. We design, build, and run workflows that connect your tools and data, focusing on reliability and measurable ROI.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Which platforms do you support?</AccordionTrigger>
            <AccordionContent>
              We work with a variety of open-source and commercial automation platforms, plus direct API integrations. We recommend the best fit for your requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do you handle security and access?</AccordionTrigger>
            <AccordionContent>
              We use least-privilege access, encrypted secrets, and change management. We align with your compliance needs (SOC 2, ISO 27001) and provide audit trails.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What does onboarding look like?</AccordionTrigger>
            <AccordionContent>
              In week one, we map your processes and prioritize use cases. We begin delivering workflows within the first two weeks and iterate based on outcomes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
