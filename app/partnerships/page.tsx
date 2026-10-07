import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "../components/LegalDocument";

export const metadata: Metadata = {
  title: "NBFC Lending Partnerships",
  description:
    "Partner with Finergy Finance Private Limited, an RBI-registered NBFC–ND. Explore co-lending, DSA, fintech, and digital lending partnership opportunities across India.",
  keywords: [
    "NBFC partnerships",
    "lending partners India",
    "DSA partnership NBFC",
    "fintech lending partner",
    "Finergy Finance partnerships",
    "co-lending NBFC",
  ],
  alternates: { canonical: "/partnerships" },
  openGraph: {
    title: "NBFC Lending Partnerships | Finergy Finance",
    description:
      "Partner with Finergy Finance, an RBI-registered NBFC–ND, for co-lending, DSA, and fintech partnerships across India.",
    url: "/partnerships",
  },
};

const sections: LegalSection[] = [
  {
    title: "Partner with Finergy",
    content: "Finergy Finance Private Limited is an RBI-registered Non-Banking Financial Company (NBFC–ND). We work with banks, NBFCs, fintech platforms, DSAs, merchants, and technology partners to expand responsible, transparent credit access across India. If you share our focus on compliance, customer protection, and quality origination, we would like to hear from you.",
  },
  {
    title: "Our Lending Partners",
    content: "Details of active digital lending partners engaged by Finergy Finance Private Limited, published for customer awareness under applicable RBI digital lending guidelines.",
    details: [
      {
        title: "Lending Service Partner · The EMI Club",
        content: "Mash Technologies Private Limited, operating as The EMI Club, works with Finergy as a digital partner for small-ticket mobile-phone loans. They help customers complete applications, support onboarding, and assist with servicing and collections so device financing stays straightforward.",
      },
      {
        title: "Customer care and grievance support",
        bullets: [
          "Finergy Finance: Contact Finergy",
          "The EMI Club: theemiclub.com/financial-partners",
          "RBI Sachet: sachet.rbi.org.in",
          "RBI CMS: cms.rbi.org.in",
        ],
      },
      {
        title: "Privacy policy",
        bullets: [
          "Finergy Finance: Privacy Policy",
          "The EMI Club: theemiclub.com/privacy-policy",
        ],
      },
      {
        title: "Services provided",
        bullets: [
          "Loan sourcing, customer onboarding, collections support, and after-sales assistance.",
        ],
      },
    ],
  },
  {
    title: "What We Offer Partners",
    content: "",
    bullets: [
      "RBI-registered NBFC balance sheet for compliant lending",
      "Personal loans, business loans, and consumer durable loans",
      "Transparent terms, documented processes, and customer-first servicing",
      "Dedicated relationship support for onboarding and portfolio reviews",
    ],
  },
  {
    title: "How to Apply",
    content: "Share a brief profile of your organisation, proposed partnership model, geographies, and expected volumes. Our team will review and respond.",
    bullets: [
      "Company name, registration details, and contact person",
      "Nature of partnership sought (co-lending, DSA, merchant, tech)",
      "Relevant licences, RBI or other registrations (if applicable)",
    ],
  },
  {
    title: "Contact for Partnerships",
    content: "Write to us with the subject line Partnership Enquiry.",
    details: [
      {
        title: "Partnership Desk",
        content: "Finergy Finance Private Limited · Email: care@finergyfinance.com · Phone: +91 97698 80628 · Office: Floor-Grd, Plot 118, Sumer, Mansion, Patthe Bapurao, Mumbai Central, Mumbai, Maharashtra, India, 400008",
      },
    ],
  },
];

export default function PartnershipsPage() {
  return (
    <LegalDocument
      title="Partnerships"
      subtitle="Finergy Finance Private Limited - Collaborate with Us"
      sections={sections}
      eyebrow="FINERGY FINANCE · PARTNER NETWORK"
      meta={[["Partner models", "Co-lending, DSA & Fintech"], ["Registration", "RBI Registered NBFC"], ["Location", "Mumbai, India"]]}
      notice=""
      footerNotice=""
    />
  );
}
