import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "../components/LegalDocument";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund and cooling-off policy of Finergy Finance Private Limited, aligned with RBI digital lending guidelines for NBFC loan disbursements and EMI transactions.",
  alternates: { canonical: "/refund-policy" },
  openGraph: {
    title: "Refund Policy | Finergy Finance",
    description:
      "Cooling-off and refund principles for Finergy Finance Private Limited loan disbursements.",
    url: "/refund-policy",
  },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    title: "1. Introduction",
    content: "This Refund Policy (\"Policy\") governs the terms under which refunds may be processed for transactions and loan disbursements carried out through the digital platforms of Finergy Finance Private Limited (“Finergy”, “Company”, “we”, “our”, or “us”). This Policy is to be read in conjunction with our Privacy Policy and the applicable Loan Agreement, Key Fact Statement (KFS), and prevailing RBI digital lending guidelines.",
  },
  {
    title: "2. General Refund Principles",
    content: "Finergy is committed to fair and transparent practices. However, by its nature, loan repayments and EMI transactions are financial commitments and are generally non-refundable, subject to certain specific exceptions outlined below.",
  },
  {
    title: "3. Cooling-Off Period",
    content: "A borrower may request loan cancellation and a refund of any EMI or pre-closure amount paid, within three (3) calendar days from the date of:",
    bullets: ["Loan disbursement", "Execution of the loan agreement", "Any other date specified in the loan agreement"],
    details: [{ content: "Such refunds are subject to:", bullets: ["Deduction of a one-time processing fee (as mentioned in your KFS), and", "Written confirmation and identity verification by the borrower."] }],
  },
  {
    title: "4. Duplicate / Excess Payment Refunds",
    content: "If you have accidentally paid more than once or an excess amount, you may request a refund within 7 calendar days of the transaction by submitting:",
    bullets: ["Transaction receipt or screenshot", "Bank statement (if applicable)", "Loan ID and registered mobile number"],
    afterBullets: ["After verification, Finergy will refund the excess amount within 3 working days."],
  },
  {
    title: "5. Merchant Product Return-Related Loans",
    content: "If your loan was availed to finance a consumer durable purchase and:",
    bullets: ["The product is returned or cancelled by the merchant,", "The borrower must first remit the full refunded amount to Finergy before the Company considers loan cancellation."],
    details: [{ content: "Until then:", bullets: ["EMIs will continue as scheduled.", "Interest and other charges shall apply normally.", "Finergy is not liable for any merchant delay in refund."] }],
  },
  {
    title: "6. Final and Non-Refundable Payments",
    content: "Any EMI, prepayment, or foreclosure amount once paid will be treated as final and non-refundable, unless it qualifies as excess or duplicate under this policy.",
  },
  {
    title: "7. Special Condition — EMI Is Non-Refundable Unless Paid Double",
    content: "It is specifically clarified that:",
    bullets: ["“Any EMI amount paid is strictly non-refundable unless it is proven and verified that the borrower has mistakenly paid double the amount.”"],
    details: [{ content: "In such a scenario:", bullets: ["The duplicate EMI amount may be refunded after proper validation by the Company.", "Processing time: 3–5 working days.", "Finergy reserves the right to request documentary proof before approving such refunds."] }],
  },
  {
    title: "8. No Refund for Charges Already Incurred",
    content: "No refund shall apply to:",
    bullets: ["Processing fees", "Penal interest", "Third-party charges (e.g., e-mandate charges, service provider fees)", "Statutory taxes (GST, etc.)"],
    afterBullets: ["It is clarified that the Company shall not be liable for any loss or damage arising from the double payment."],
  },
  {
    title: "9. Grievance Redressal",
    content: "For refund-related issues, please contact:",
    details: [{ title: "Grievance Redressal Officer", bullets: ["Finergy Finance Private Limited", "Email: grievance.officer@finergyfinance.com"] }],
    afterDetails: ["If unresolved within 30 days, you may escalate the matter to the Reserve Bank of India Ombudsman under the Integrated Ombudsman Scheme."],
  },
];

export default function RefundPolicyPage() {
  return <LegalDocument title="Refund Policy" subtitle="Finergy Finance Private Limited - Refund Policy" sections={sections} eyebrow="FINERGY FINANCE · POLICIES" meta={[["Effective Date", "July 16, 2025"], ["Version", "1.0"], ["Status", "RBI Compliant"]]} notice="" footerNotice="" />;
}
