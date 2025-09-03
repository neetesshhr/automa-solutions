import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - EffortZero</title>
        <meta name="description" content="EffortZero Terms of Service - Understand your rights and responsibilities when using our automation platform." />
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
            <h1 className="text-4xl font-bold mb-4 text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Effective Date: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using EffortZero's automation platform and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our Services.
              </p>
              <p className="text-muted-foreground mb-4">
                These Terms apply to all visitors, users, and others who access or use the Services. We reserve the right to update these Terms at any time, and we will notify you of any material changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Use of Services</h2>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Eligibility</h3>
              <p className="text-muted-foreground mb-4">
                You must be at least 18 years old and have the legal capacity to enter into these Terms. By using our Services, you represent and warrant that you meet these eligibility requirements.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Account Registration</h3>
              <p className="text-muted-foreground mb-4">
                To access certain features, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Acceptable Use Policy</h2>
              <p className="text-muted-foreground mb-4">You agree not to use our Services to:</p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit malicious code, viruses, or harmful content</li>
                <li>Engage in unauthorized data mining or scraping</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to any systems</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Resell or redistribute the Services without authorization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Our Intellectual Property</h3>
              <p className="text-muted-foreground mb-4">
                The Services and all content, features, and functionality are owned by EffortZero and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Your Content</h3>
              <p className="text-muted-foreground mb-4">
                You retain ownership of any content you submit through our Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content solely for providing and improving our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                If you purchase any services from us, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Pay all fees according to the pricing plan you select</li>
                <li>Provide valid payment information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Be responsible for any taxes applicable to your use</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                All fees are non-refundable unless otherwise specified. We reserve the right to change our pricing with 30 days' notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Service Level Agreement</h2>
              <p className="text-muted-foreground mb-4">
                We strive to maintain high availability of our Services but do not guarantee uninterrupted access. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Modify or discontinue Services with reasonable notice</li>
                <li>Perform scheduled maintenance</li>
                <li>Suspend access for security or technical reasons</li>
                <li>Update features and functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Data Processing and Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Your use of our Services is also governed by our Privacy Policy. By using our Services, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
              <p className="text-muted-foreground mb-4">
                You are responsible for maintaining the confidentiality of any data processed through our platform and ensuring compliance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                Our Services may integrate with third-party platforms and services. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>The availability or accuracy of third-party services</li>
                <li>Content, products, or services offered by third parties</li>
                <li>Your interactions with third-party services</li>
                <li>Third-party terms and privacy policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Disclaimers and Warranties</h2>
              <p className="text-muted-foreground mb-4">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground uppercase">
                <li>MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY OR RELIABILITY OF INFORMATION</li>
                <li>UNINTERRUPTED OR ERROR-FREE SERVICE</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, EFFORTZERO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or system failures</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Costs of procurement of substitute services</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Our total liability shall not exceed the amount paid by you to us in the twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify, defend, and hold harmless EffortZero and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit through the Services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may terminate or suspend your account and access to the Services immediately, without prior notice, for any reason, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Breach of these Terms</li>
                <li>Non-payment of fees</li>
                <li>Fraudulent or illegal activity</li>
                <li>At our sole discretion</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Upon termination, your right to use the Services will immediately cease. All provisions that should survive termination shall survive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Governing Law and Disputes</h2>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which EffortZero is incorporated, without regard to conflict of law principles.
              </p>
              <p className="text-muted-foreground mb-4">
                Any disputes arising from these Terms or the Services shall be resolved through binding arbitration, except where prohibited by law. You waive any right to a jury trial or class action lawsuit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">14. General Provisions</h2>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Entire Agreement</h3>
              <p className="text-muted-foreground mb-4">
                These Terms constitute the entire agreement between you and EffortZero regarding the Services.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Severability</h3>
              <p className="text-muted-foreground mb-4">
                If any provision is found unenforceable, the remaining provisions shall continue in full force.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Waiver</h3>
              <p className="text-muted-foreground mb-4">
                No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Assignment</h3>
              <p className="text-muted-foreground mb-4">
                You may not assign or transfer these Terms without our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">15. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-foreground font-semibold">EffortZero Legal Department</p>
                <p className="text-muted-foreground">Email: contacteffortzero@gmail.com</p>
                <p className="text-muted-foreground">Legal: legal@effortzero.com</p>
                <p className="text-muted-foreground">Support: support@effortzero.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;