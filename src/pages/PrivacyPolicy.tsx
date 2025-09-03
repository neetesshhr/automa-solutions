import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - EffortZero</title>
        <meta name="description" content="EffortZero Privacy Policy - Learn how we collect, use, and protect your information." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                EffortZero ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our automation platform and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Personal Information</h3>
              <p className="text-muted-foreground mb-4">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and business information</li>
                <li>Account credentials and authentication data</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Usage Information</h3>
              <p className="text-muted-foreground mb-4">We automatically collect certain information about your device and usage:</p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Usage patterns and preferences</li>
                <li>Platform interaction data</li>
                <li>Error logs and performance data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Providing and maintaining our automation services</li>
                <li>Processing transactions and managing your account</li>
                <li>Communicating with you about updates and support</li>
                <li>Improving our platform and developing new features</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
                <li>Analyzing usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Service providers who assist in operating our platform</li>
                <li>Third-party platforms you choose to integrate with</li>
                <li>Professional advisors and legal authorities when required</li>
                <li>Business partners with your explicit consent</li>
                <li>In connection with business transfers or acquisitions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication protocols</li>
                <li>Secure data centers and infrastructure</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct or update inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict or object to certain processing activities</li>
                <li>Data portability where applicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your experience. You can manage cookie preferences through your browser settings. Essential cookies required for platform functionality cannot be disabled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your information for as long as necessary to provide our services and comply with legal obligations. When you close your account, we will delete or anonymize your personal information within 90 days, except where retention is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will promptly delete the information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-foreground font-semibold">EffortZero</p>
                <p className="text-muted-foreground">Email: contacteffortzero@gmail.com</p>
                <p className="text-muted-foreground">Privacy Team: privacy@effortzero.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;