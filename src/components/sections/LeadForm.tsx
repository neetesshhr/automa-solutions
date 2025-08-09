import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const LeadForm: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [webhookUrl, setWebhookUrl] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    setIsLoading(true);

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            ...payload,
            timestamp: new Date().toISOString(),
            triggered_from: window.location.origin,
          }),
        });
        toast({
          title: "Request sent",
          description: "Check your Zap's history to confirm it was triggered.",
        });
      } else {
        console.log("Lead submitted", payload);
        toast({ title: "Thanks!", description: "We'll be in touch shortly." });
      }
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
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
          <div className="grid gap-2">
            <Label htmlFor="webhook">Zapier webhook (optional)</Label>
            <Input id="webhook" name="webhook" placeholder="https://hooks.zapier.com/..." value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />
            <p className="text-xs text-muted-foreground">Add a Zapier webhook to receive this form instantly in your tools.</p>
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
