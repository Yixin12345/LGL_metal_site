import { LegalPage } from "@/components/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This placeholder privacy page gives LGL Metal a production-safe legal route until company-specific policy language is provided."
      sections={[
        {
          title: "Information We Collect",
          body: "Contact details submitted through this website may include your name, company, email address, phone number, service interest, and message content. Additional analytics or hosting logs may be collected by the deployment platform for security and performance monitoring.",
        },
        {
          title: "How Information Is Used",
          body: "Submitted information is intended to support quote requests, project discussions, customer support, and operational follow-up. Company-specific retention, consent, and internal handling policies should be added before launch with final legal approval.",
        },
        {
          title: "Third-Party Services",
          body: "This site can be connected to email, CRM, analytics, or marketing systems during implementation. Any third-party processors used in production should be documented here, including their data handling responsibilities and relevant privacy links.",
        },
      ]}
    />
  );
}
