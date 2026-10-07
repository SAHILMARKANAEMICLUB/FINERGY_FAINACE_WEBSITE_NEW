import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "../components/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Finergy Finance Private Limited, an RBI-registered NBFC–ND. Learn how we collect, use, store, and protect personal information in line with Indian law and RBI guidelines.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Finergy Finance",
    description:
      "How Finergy Finance Private Limited protects customer data as an RBI-registered NBFC–ND.",
    url: "/privacy-policy",
  },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    title: "1. Summary of Policy",
    bullets: ["Policy Name: Privacy Policy", "Version No.: 1.0", "Periodicity of Review: Annual", "Prepared by: Compliance Department", "Reviewed and approved by: Board of Directors", "Date of Approval: July 16, 2025", "Effective Date: July 16, 2025", "Date of Review: 16-07-2025", "Date of Next Review: On or before 16-07-2026"],
  },
  {
    title: "2. Introduction",
    content: "This Privacy Policy (hereinafter referred to as the \"Policy\") is adopted and published by Finergy Finance Private Limited (hereinafter referred to as the \"Company\"), a Non-Banking Financial Company – Non-Deposit Taking (NBFC–ND) registered with the Reserve Bank of India, for the purpose of governing the collection, use, processing, storage, sharing, and protection of personal information provided by customers and users (hereinafter referred to as the \"Data Subjects\") in the course of availing the Company's financial products and services via digital or offline means.",
    paragraphs: ["At Finergy Finance Private Limited (\"Finergy,\" \"we,\" \"us,\" or \"our\"), your trust and privacy are our highest priorities. We are committed to protecting the personal information you share while ensuring transparency in how we collect, use, and secure your data. This Privacy Policy explains our practices in plain language—helping you feel confident and secure as we serve your financial needs."],
  },
  {
    title: "3. Scope and Applicability",
    content: "This Policy applies to all personal information collected by the Company in connection with its financial products and services, including through its website, mobile applications, loan origination platforms, third-party platforms, lending service providers (LSPs), payment gateways, and customer interactions, whether online or offline. This Policy shall be read in accordance with applicable laws, including but not limited to the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, RBI Guidelines on Digital Lending (2022), and any other circulars or notifications issued from time to time.",
  },
  {
    title: "4. Nature of Information Collected",
    content: "The Company may collect the following categories of personal data:",
    bullets: ["Identity details: Name, gender, date of birth, PAN, Aadhaar, voter ID, or other government-issued identification;", "Contact information: Address, phone number, email address;", "Financial details: Bank account number, credit bureau reports, income statements, salary slips, income tax returns, and transaction history;", "Employment details: Employer name, designation, work address, and employment proof;", "Device and usage data: IP address, device ID, mobile network information, location data, browser type, and cookies;", "Biometric or KYC data (only where legally permitted and with explicit consent);", "Any other information collected through Know Your Customer (KYC), video KYC, or onboarding procedures."],
  },
  {
    title: "5. Purpose of Collection and Processing",
    content: "The Company may use the personal information for the following purposes:",
    bullets: ["To verify the identity and creditworthiness of the customer;", "To process loan applications and disbursements;", "To monitor the performance of the loan portfolio;", "To comply with statutory and regulatory requirements including reporting to authorities such as FIU, RBI, and CICs;", "To detect and prevent fraud or unauthorized access;", "To communicate with the customer about products, services, payments, and collections;", "To conduct analytics, audits, and risk assessments;", "For grievance redressal and customer service;", "For marketing and promotional purposes where permitted by law and with consent."],
  },
  {
    title: "6. How We Collect Your Information",
    bullets: ["Directly from you: When you open an account, apply for a loan, or sign up for services.", "Automatically: Through cookies, web analytics, and device logging as you interact with our digital platforms.", "From external sources: For verification, credit assessment, or compliance purposes (e.g., credit bureaus, KYC registries, government databases).", "From service providers: From fintech or banking partners who assist us in delivering services."],
  },
  {
    title: "7. Why We Use Your Information",
    content: "Your data helps us in several critical ways:",
    bullets: ["To provide, manage & enhance our products and services", "For compliance with legal, regulatory, and audit obligations", "For fraud prevention, risk assessment, and credit evaluation", "To personalise customer experience, including timely offers and communications", "For marketing & communication, where permitted by applicable laws or your consent", "To analyze and improve our digital platforms, products, and policies"],
  },
  {
    title: "8. Storage and Retention",
    content: "Personal information shall be stored in secure servers located within India, and shall be retained only for as long as is reasonably necessary to fulfil the lawful purposes for which it was collected, or as required under applicable law. Retention timelines shall comply with RBI Master Directions and other sectoral guidelines.",
  },
  {
    title: "9. Disclosure and Sharing",
    content: "The Company shall not disclose personal information to any third party without the consent of the Data Subject, except:",
    bullets: ["to subsidiaries, service providers, credit bureaus, legal advisors, auditors, and payment gateway partners, auditors, legal counsel, and marketing agencies strictly on a need-to-know basis;", "where such disclosure is mandated under law, judicial orders, or regulatory directions;", "in connection with mergers, acquisitions, or restructuring activities, provided the recipient entity adheres to similar data protection standards."],
  },
  {
    title: "10. Use of Cookies and Similar Technologies",
    content: "We employ cookies, pixels, and local storage mechanisms to:",
    bullets: ["Track website/app usage and performance", "Deliver personalized content and seamless experiences", "Understand and improve our services"],
    afterBullets: ["You may opt out of non-essential cookies by adjusting your browser settings. Note that disabling some cookies may affect functionality."],
  },
  {
    title: "11. Data Retention",
    content: "Finergy retains your personal information only as long as necessary to:",
    bullets: ["Meet regulatory, legal, or reporting requirements", "Fulfill the purposes described above", "Resolve disputes, enforce agreements, and protect legal rights"],
    afterBullets: ["Once data is no longer needed, we delete or anonymize it securely."],
  },
  {
    title: "12. Data Security Measures",
    content: "The Company shall implement industry-standard technical and organizational security measures to protect personal data against unauthorized access, destruction, loss, alteration, or disclosure. These measures include firewalls, encryption, restricted access protocols, internal audits, and regular security reviews in accordance with the Company's Information Security and Cybersecurity Policy.",
  },
  {
    title: "13. Consent and Data Subject Rights",
    content: "By availing any product or service of the Company or by accessing its platforms, the Data Subject consents to the collection and processing of personal data in accordance with this Policy. Data Subjects shall have the right to:",
    bullets: ["Review the information provided;", "Correct inaccuracies in personal data;", "Withdraw consent (subject to legal limitations);", "Opt-out of marketing communications", "Lodge a complaint with the designated Grievance Redressal Officer."],
  },
  {
    title: "14. Your Rights & Choices",
    content: "You have the power to manage how we handle your information:",
    bullets: ["Access, correct or request deletion of your personal data", "Withdraw consent or object to processing for certain purposes", "Opt-out of marketing communications", "Request restriction of processing or portability, where permitted", "Lodge concerns with data protection authorities, as applicable"],
    afterBullets: ["To exercise these rights, you may contact our Data Privacy Officer at:", "Email: care@finergyfinance.com", "Address: Floor-Grd, Plot 118, Sumer, Mansion, Patthe Bapurao, Mumbai Central, Mumbai, Maharashtra, India, 400008", "We will respond to all legitimate requests in accordance with applicable law."],
  },
  {
    title: "15. Review of Policy",
    content: "The Company reserves the right to amend or update this Policy from time to time. Any changes shall be published on the Company's official website. Continued use of the Company's services after such publication shall constitute acceptance of the revised terms.",
  },
  {
    title: "16. Contact Us",
    content: "If you have questions, suggestions, or complaints about this Policy or its execution, please reach out to:",
    details: [{ title: "Get in Touch", bullets: ["Finergy Finance Private Limited", "Data Privacy Officer: care@finergyfinance.com", "Grievance Officer: grievance.officer@finergyfinance.com", "Office Address: Floor-Grd, Plot 118, Sumer, Mansion, Patthe Bapurao, Mumbai Central, Mumbai, Maharashtra, India, 400008"] }],
  },
  {
    title: "17. Grievance Redressal Mechanism",
    content: "In accordance with the Information Technology Act, 2000 and relevant RBI guidelines, Finergy has appointed a Grievance Redressal Officer who is responsible for resolving any privacy-related concerns or data protection complaints.",
    details: [{ title: "Grievance Redressal Officer", bullets: ["Finergy Finance Private Limited", "Email: grievance.officer@finergyfinance.com"] }],
    afterDetails: ["All grievances will be acknowledged within 3 working days and resolved within 30 days, as per applicable regulations."],
  },
  {
    title: "18. Compliance with Data Privacy Laws",
    content: "This Privacy Policy is governed by Indian law, specifically the Information Technology Act, 2000, Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and any applicable sectoral regulations issued by the RBI or other authorities from time to time. We also align our practices with global standards wherever applicable, including the principles outlined in the General Data Protection Regulation (GDPR) for cross-border transfers or foreign users.",
  },
  {
    title: "19. Consent and Acknowledgment",
    content: "By accessing our platforms, submitting any personal data, or availing our services, you explicitly acknowledge that:",
    bullets: ["You have read and understood this Privacy Policy;", "You consent to the collection, usage, processing, storage, and disclosure of your personal data as outlined herein;", "You accept that this policy forms part of your agreement with Finergy Finance Private Limited."],
  },
  {
    title: "20. Language and Interpretation",
    content: "This policy is drafted in English. In case of any translations provided for reference, the English version shall prevail in case of interpretation disputes or legal proceedings.",
  },
  {
    title: "21. Annexures (Optional)",
    content: "Finergy may include the following annexures for internal or audit purposes (not mandatory for public policy):",
    bullets: ["Annexure A: List of approved service providers and processors", "Annexure B: Categories of personal information collected", "Annexure C: Data retention and archival periods"],
    afterBullets: ["These annexures may be shared with stakeholders upon formal request and subject to internal approval processes."],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalDocument title="Privacy Policy" subtitle="Finergy Finance Private Limited - Data Protection & Privacy" sections={sections} eyebrow="FINERGY FINANCE · POLICIES" meta={[["Effective Date", "July 16, 2025"], ["Version", "1.0"], ["Status", "RBI Compliant"]]} notice="" footerNotice="" />;
}
