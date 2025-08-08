import { Helmet } from "react-helmet-async";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import N8nSection from "@/components/sections/N8nSection";
import Integrations from "@/components/sections/Integrations";
import Pricing from "@/components/sections/Pricing";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/sections/Footer";
import EnterpriseBar from "@/components/sections/EnterpriseBar";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "effectzero",
    description:
      "Automation services for finance, accounting, and operations teams.",
    url: canonical,
    areaServed: "Global",
    sameAs: [],
  };

  return (
    <div>
      <Helmet>
        <title>Automation Services for Finance & Ops | effectzero</title>
        <meta
          name="description"
          content="We design, build, and manage automations for finance, accounting, and operations teams. Faster, error-free processes with real ROI."
        />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <EnterpriseBar />
        <Features />
        <HowItWorks />
        <N8nSection />
        <Integrations />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
