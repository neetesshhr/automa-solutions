import { Helmet } from "react-helmet-async";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import N8nSection from "@/components/sections/N8nSection";
import Pricing from "@/components/sections/Pricing";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "FlowPilot Automations",
    description:
      "n8n automation services for finance, accounting, and operations teams.",
    url: canonical,
    areaServed: "Global",
    sameAs: ["https://n8n.io"],
  };

  return (
    <div>
      <Helmet>
        <title>Automation Services for Finance & Ops | n8n Experts</title>
        <meta
          name="description"
          content="We design, build, and manage n8n automations for finance, accounting, and operations teams. Faster, error-free processes with real ROI."
        />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <N8nSection />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
