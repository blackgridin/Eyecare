import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="whitespace-nowrap">India • WhatsApp Appointments</Badge>
              </div>
              <CardTitle className="text-3xl md:text-4xl">Privacy Policy</CardTitle>
              <div className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> <em>29 Aug 2025</em> · <strong>Entity:</strong> <em>Shivas Eye Care</em>
              </div>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none dark:prose-invert">
              <p>
                Shivas Eye Care (<strong>we</strong>, <strong>us</strong>, <strong>our</strong>) operates a WhatsApp-based appointment booking
                service for patients in India. This Privacy Policy describes how we collect, use, disclose and protect personal
                data in connection with that service. By using our service, you agree to this Policy.
              </p>

              <h2>1) What We Collect</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Identity &amp; contact: name, WhatsApp number, optional email.</li>
                <li>Appointment details: preferred date/time, department/doctor, notes you provide.</li>
                <li>Communication metadata: message timestamps, delivery/read status, templates used.</li>
                <li>Technical logs: IP address, user agent, and webhook request logs (for security and troubleshooting).</li>
              </ul>

              <h2>2) How We Collect</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Directly from you on WhatsApp chats or web forms.</li>
                <li>Automatically via our WhatsApp Business API / Meta webhooks.</li>
                <li>From our clinic/hospital staff when they create or modify a booking for you.</li>
              </ul>

              <h2>3) Why We Use Your Data</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To schedule, confirm, and manage medical appointments and reminders.</li>
                <li>To communicate about rescheduling, cancellations, or basic pre-visit instructions.</li>
                <li>To improve our service, quality assurance, and analytics (in aggregated/de-identified form where possible).</li>
                <li>To secure our systems, prevent fraud/misuse, and comply with law.</li>
              </ul>
              <p>We do <strong>not</strong> sell your personal data.</p>

              <h2>4) Legal Basis &amp; Consent (India)</h2>
              <p>
                We rely on your consent and legitimate uses under applicable Indian law, including the Information
                Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 ("DPDP Act"). You may withdraw
                consent at any time by contacting us; doing so may affect our ability to provide appointments.
              </p>

              <h2>5) WhatsApp &amp; Third Parties</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Messages are sent/received through the WhatsApp Business Platform (operated by Meta). Your use of WhatsApp
                  is also governed by WhatsApp’s own terms and privacy policy.
                </li>
                <li>
                  We may use service providers (e.g., hosting, SMS/voice reminder, analytics limited to operational metrics).
                  They process data under contracts and only as instructed by us.
                </li>
              </ul>

              <h2>6) Sharing &amp; Disclosures</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>With doctors/clinics involved in your appointment.</li>
                <li>With vendors who provide infrastructure or customer support to us (bound by confidentiality and security obligations).</li>
                <li>When required by applicable law, regulation, or legal process, or to protect rights and safety.</li>
              </ul>

              <h2>7) Storage, Security &amp; Location</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Data is stored in secure systems with access limited to authorized personnel.</li>
                <li>We apply reasonable technical and organizational measures (encryption in transit, access controls, logging).</li>
                <li>
                  Data may be processed or stored outside India by our processors; we ensure contractual protections for such
                  transfers as required by law.
                </li>
              </ul>

              <h2>8) Retention</h2>
              <p>
                We retain personal data only as long as needed for appointment services and legitimate business or legal
                purposes. Records may be kept for audit, regulatory, or dispute purposes as permitted by law.
              </p>

              <h2>9) Your Rights</h2>
              <p>Subject to applicable law, including the DPDP Act, you may:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction or updating of inaccurate or incomplete data.</li>
                <li>Request deletion/erasure and withdraw consent (where applicable).</li>
                <li>
                  Make a complaint to our Grievance Officer and escalate to the Data Protection Board of India if unsatisfied.
                </li>
                <li>Nominate another person to exercise rights on your behalf in case of incapacity (where applicable).</li>
              </ul>
              <p>
                To exercise these rights, contact us using the details below. We may need to verify your identity before acting
                on requests.
              </p>

              <h2>10) Children’s Data</h2>
              <p>
                Our service is intended for adults. If you are a parent/guardian and believe your child has provided personal
                data, please contact us to delete or manage it.
              </p>

              <h2>11) Cookies &amp; Website</h2>
              <p>
                If you visit our website, we may use minimal cookies or local storage for functionality and security. You can
                control cookies via your browser settings.
              </p>

              <h2>12) Changes to This Policy</h2>
              <p>
                We may update this Policy from time to time. The “Effective Date” above shows the latest revision. Significant
                changes will be communicated via our usual channels.
              </p>

              <h2>13) Contact &amp; Grievance Officer (India)</h2>
              <p>
                <strong>Email:</strong> <a href="mailto:shivaseyecare@gmail.com">shivaseyecare@gmail.com</a>
                <br />
                <strong>Phone:</strong> 9840088522
                <br />
                <strong>Address:</strong> 134/1818, 13th Main Rd, Thiruvalluvar Colony, Anna Nagar, Chennai, Tamil Nadu 600040
              </p>
              <p>
                <strong>Grievance Officer:</strong> Grievance Officer
                <br />
                <strong>Email:</strong> <a href="mailto:shivaseyecare@gmail.com">shivaseyecare@gmail.com</a>
                <br />
                <strong>Address:</strong> 134/1818, 13th Main Rd, Thiruvalluvar Colony, Anna Nagar, Chennai, Tamil Nadu 600040
              </p>

              <div className="mt-8 text-sm text-muted-foreground">
                © {currentYear} Shivas Eye Care. All rights reserved.
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}


