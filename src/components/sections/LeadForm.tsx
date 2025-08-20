import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const LeadForm: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  // EmailJS configuration - Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = "service_88uztx9"; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = "template_k78o4vy"; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = "iKgRfjcDVkVt4q69b"; // Replace with your EmailJS public key

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsLoading(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      toast({
        title: "Request sent successfully!",
        description: "We'll be in touch with you shortly.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send request. Please try again or contact us directly at contacteffortzero@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 animate-enter">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Request a demo</h2>
          <p className="text-muted-foreground">
            Tell us about your processes. We will propose a roadmap and show you a live workflow tailored to your needs.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-lg border p-6 bg-card shadow-elevated grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Jane Doe" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Work email</Label>
            <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Acme Co." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="usecase">What should we automate?</Label>
            <Textarea id="usecase" name="usecase" placeholder="e.g., AP invoice approvals, bank reconciliations, user onboarding" />
          </div>
          <Button type="submit" variant="hero" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send request"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
