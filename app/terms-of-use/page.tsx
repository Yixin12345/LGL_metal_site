import { LegalPage } from "@/components/legal-page";

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="This placeholder terms page provides a clean route structure for launch while company-approved legal language is being finalized."
      sections={[
        {
          title: "Website Purpose",
          body: "This website is intended to present LL Metal Tech services, capabilities, and contact information for prospective clients and partners. Content is provided for general business information and does not create a binding offer unless confirmed through direct commercial agreement.",
        },
        {
          title: "Content and Availability",
          body: "Service information, imagery, and project descriptions may be updated, expanded, or replaced over time. Availability, scope, lead times, specifications, and pricing remain subject to direct confirmation, quotation, and contract review.",
        },
        {
          title: "Use Restrictions",
          body: "Users should not misuse the website, interfere with service availability, attempt unauthorized access, or reproduce branded materials without permission. Final company-specific legal clauses, governing law, warranty limitations, and liability language should be added before public launch.",
        },
      ]}
    />
  );
}
