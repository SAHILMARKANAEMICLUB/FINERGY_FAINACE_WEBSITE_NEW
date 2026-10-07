import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "../components/LegalDocument";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions of Service for Finergy Finance Private Limited, an RBI-registered NBFC. Understand platform use, loan products, and customer obligations.",
  alternates: { canonical: "/terms-conditions" },
  openGraph: {
    title: "Terms & Conditions | Finergy Finance",
    description:
      "Platform and service terms for Finergy Finance Private Limited, an RBI-registered NBFC.",
    url: "/terms-conditions",
  },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    title: "Preamble",
    content: "These Terms and Conditions (hereinafter referred to as the “Terms” or the “Agreement”) constitute a legally binding agreement between you, the User, and Finergy Finance Private Limited, a company incorporated under the Companies Act, 2013, registered as a Non-Banking Financial Company with the Reserve Bank of India (RBI), having its registered office at Floor-grd,plot 118, Sumer, Mansion, Patthe Bapurao, Mumbai Central, Mumbai, Mumbai, Maharashtra, India, 400008 (hereinafter referred to as the “Company,” “We,” “Us,” or “Finergy”).",
    paragraphs: ["This Agreement governs your access to and use of the Company’s proprietary mobile application, (the “App”), and its corresponding website, www.finergyfinance.com (the “Website”). The App and the Website are hereinafter collectively referred to as the “Platform.”", "By accessing, downloading, or utilizing the Platform or any of the services provided thereon, you unequivocally acknowledge that you have read, understood, and consent to be bound by the entirety of this Agreement, which, when read in conjunction with our Privacy Policy, forms the complete contractual relationship between you and the Company. Should you find any provision of this Agreement disagreeable, you are hereby instructed to immediately cease and desist from using the Platform."],
  },
  {
    title: "1. Definitions",
    bullets: ["“Account” shall mean the secure, password-protected account created by the User on the Platform.", "“Product” shall refer to the financial products, including but not limited to consumer durable loans and personal loans, offered by the Company through the Platform.", "“Services” shall encompass all functionalities provided by the Company via the Platform, including the facilitation of Products, financial capability verification, data analytics, and associated support services.", "“User” or “You” shall mean any natural or legal person who accesses, registers on, or utilizes the Platform for any purpose whatsoever."],
  },
  {
    title: "2. Scope of Services",
    content: "Finergy operates the Platform as an online digital lending portal. The Services provided include, inter alia:",
    bullets: ["Facilitating the provision of Products between the Company and its Users.", "Conducting due diligence and creditworthiness assessments of Users to determine eligibility for Products.", "Employing proprietary data analytics on the backend, which may involve analysis of User-provided information (such as bank SMS data and other integrations with service providers) to assess financial behaviour and risk profiles. This analysis is for internal purposes, and its output is not shared with the User.", "Providing customer support and communication regarding the Products and Services."],
  },
  {
    title: "3. Eligibility and User Declarations",
    content: "The User hereby represents and warrants that they are:",
    bullets: ["A citizen and resident of India.", "A natural person who has attained the age of majority (18 years) and is at least twenty (20) years of age, possessing the full legal capacity to enter into and be bound by a contract under the Indian Contract Act, 1872.", "Possess an annual household income exceeding ₹3,00,000 (Rupees Three Lakhs). For the purposes of this clause, “household” is defined as a single family unit comprising a husband, wife, and their unmarried children."],
    afterBullets: ["The Company reserves the absolute right to terminate any User's Account and prohibit access to the Platform, with or without notice, should it come to our attention or if we have reasonable grounds to suspect that the User does not meet these eligibility criteria."],
  },
  {
    title: "4. User Account and Obligations",
    bullets: ["Account Creation and Security: To avail the Services, you must register and maintain an active Account. You are solely and exclusively responsible for maintaining the confidentiality and security of your Account credentials (including passwords) and for all activities that occur thereunder. You shall immediately notify Finergy of any unauthorized use of your Account.", "Accuracy of Information: You solemnly undertake to provide information that is true, accurate, current, and complete in all respects. Should any information provided be found to be untrue, inaccurate, or incomplete, the Company reserves the unilateral right to suspend or terminate your Account and refuse any and all current or future use of the Services.", "Consent to Communication: By creating an Account, you expressly consent to be contacted by Finergy, our authorized representatives, affiliates, or third-party collection agencies through any means, including but not limited to telephone calls, SMS messages, emails, WhatsApp, and in-app notifications, for purposes related to the Services.", "Payment Authorizations: You shall provide the Company with an unconditional and irrevocable electronic mandate (such as e-NACH/e-mandate) in the form and manner prescribed by the RBI and the Company, authorizing debits from your designated bank account for the repayment of dues. Your submission of payment instructions constitutes an irrevocable authority for the Company to initiate such debits."],
  },
  {
    title: "5. Privacy and Data Protection",
    content: "The collection, storage, use, processing, and transfer of your personal and financial information are governed by our Privacy Policy. We may utilize third-party services for KYC verification, payment processing, and credit assessment. While we enter into legally sound agreements with these third parties, Finergy disclaims any liability arising from the acts or omissions of such third-party service providers.",
  },
  {
    title: "6. Limited License and Intellectual Property",
    content: "Finergy grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Platform strictly for personal, non-commercial purposes in accordance with these Terms. You shall not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any portion of the Platform, its content, or its underlying technology without the express prior written consent of the Company. All rights, titles, and interests in and to the Platform and its contents are and shall remain the exclusive property of Finergy and its licensors.",
  },
  {
    title: "7. Prohibited Conduct",
    content: "You are expressly prohibited from using the Platform for any purpose that is unlawful, fraudulent, or malicious. This includes, but is not limited to: infringing upon intellectual property rights; harassing, defaming, or discriminating against others; submitting false or misleading information; uploading or transmitting viruses or other malicious code; or attempting to interfere with the security features of the Platform. Violation of this clause shall result in immediate termination of your access and may subject you to civil and criminal liability.",
  },
  {
    title: "8. Disclaimer of Warranties and Limitation of Liability",
    bullets: ["Disclaimer: The Platform and Services are provided on an “AS IS” and “AS AVAILABLE” basis. Finergy expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, timely, secure, or error-free.", "Limitation of Liability: To the maximum extent permitted by applicable law, in no event shall Finergy, its directors, officers, employees, affiliates, or agents be liable for any indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, or data, arising out of or in connection with your use of the Platform. The Company's total cumulative liability to you, for any and all claims arising from this Agreement, shall be strictly limited to the principal loan amount availed by you through the Platform."],
  },
  {
    title: "9. Indemnification",
    content: "You agree to indemnify, defend, and hold harmless Finergy Finance Private Limited and its affiliates, directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with: (a) your access to or use of the Platform; (b) your violation of this Agreement; or (c) your infringement of any intellectual property or other right of any person or entity.",
  },
  {
    title: "10. Governing Law and Jurisdiction",
    content: "This Agreement shall be governed by and construed in accordance with the laws of the Republic of India. You agree that any legal action or proceeding arising out of this Agreement shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra.",
  },
  {
    title: "11. Miscellaneous Provisions",
    bullets: ["Amendment: We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically. Your continued use of the Platform after any such change constitutes your acceptance of the new Terms.", "Waiver: No failure or delay by the Company in exercising any right, power, or privilege hereunder shall operate as a waiver thereof.", "Severability: If any provision of these Terms is held to be invalid, illegal, or unenforceable, the validity, legality, and enforceability of the remaining provisions shall not in any way be affected or impaired thereby.", "Assignment: You may not assign or transfer any of your rights or obligations under this Agreement without the prior written consent of the Company.", "Survival: Clauses relating to indemnification, limitation of liability, disclaimer of warranties, governing law, and intellectual property shall survive the termination of this Agreement."],
  },
  {
    title: "12. Refund and Cancellation",
    content: "This Clause governs the process and circumstances under which refunds may be initiated in respect of loan disbursements and associated financial transactions undertaken through the Company’s digital lending platforms for consumer durable loans, personal loans and to the extent applicable to other loan products.",
    paragraphs: ["The Company, in compliance with fair lending practices and applicable regulatory guidelines, acknowledges the Borrower’s right to request refunds or raise disputes arising from duplicate payments, loan cancellation within the cooling-off period, or other transaction-related discrepancies. Accordingly, this Policy shall apply to all loan products disbursed by the Company, and shall be read in conjunction with the applicable Loan Agreement, Key Fact Statement (KFS), and digital lending guidelines issued by the Reserve Bank of India from time to time.", "Where the Borrower cancels the loan or withdraws from the arrangement within a period of three (3) calendar days from the date of loan disbursement or from the date of execution of the loan agreement, whichever is earlier (hereinafter referred to as the “Cooling-Off Period”), the Borrower shall be entitled to a refund of the amounts, if any, paid by him/her towards loan repayment or pre-closure, subject to deduction of a one-time processing fee, as disclosed at the time of sanction and documented in the KFS. The Company shall not be liable to refund any such fee retained pursuant to cancellation, provided the same was disclosed and accepted by the Borrower prior to disbursement.", "In cases where duplicate or excess payments have been made by the Borrower—whether due to technical error, system failure, or manual overpayment—the Borrower may submit a refund request to the Company within seven (7) calendar days of the said transaction. Such request must be accompanied by supporting documentation, including but not limited to payment confirmation, transaction reference number, date and mode of payment, and bank statements, if applicable. Upon validation of the request, and subject to confirmation of excess remittance, the Company shall initiate the refund of the excess amount within a maximum of three (3) working days from the date of successful verification.", "Where the loan disbursed by the Company is used for financing a consumer durable purchase and such purchase is subsequently cancelled by the Borrower with the merchant or the product is returned or exchanged, the Company shall not be obligated to reverse the loan or cancel the loan agreement unless the Borrower remits the full amount of the merchant refund to the Company, including any applicable charges or penalties already incurred. The Borrower shall remain liable to continue servicing the loan, including payment of all scheduled EMIs and applicable interest, until such time as the refunded amount is received by the Company and applied toward reduction or closure of the outstanding liability. The Company shall not be responsible for any delay in refund processing by the merchant or any loss arising therefrom.", "It is further clarified that once a loan repayment is made by the Borrower toward any scheduled EMI, part-prepayment, or full pre-closure of the loan facility, such payment shall be treated as final and non-refundable, unless it is conclusively established that such amount was remitted in excess or due to duplicate debit as per the provisions of this Policy. Refunds shall not be applicable to any penal charges, statutory taxes, or third-party expenses already incurred by the Company and disclosed to the Borrower.", "Any grievance, dispute, or escalation regarding a refund or cancellation request shall be handled by the Company’s designated Grievance Redressal Officer, whose contact details shall be published on the Company’s website. In case the matter remains unresolved beyond thirty (30) days, the Borrower may escalate the matter to the Office of the RBI Ombudsman under the Integrated Ombudsman Scheme."],
  },
  {
    title: "13. Grievance Redressal",
    content: "For any queries, complaints, or feedback regarding the Services, you may contact our designated Grievance Redressal Officer:",
    details: [{ title: "Grievance Redressal Officer", bullets: ["Finergy Finance Private Limited", "Name of Grievance Officer: Tarang Pandya", "Email: grievance.officer@finergyfinance.com", "Corporate Office: Floor-Grd, Plot 118, Sumer, Mansion, Patthe Bapurao, Mumbai Central, Mumbai, Maharashtra, India, 400008"] }],
    afterDetails: ["We are committed to addressing your concerns in a timely and effective manner."],
  },
];

export default function TermsPage() {
  return <LegalDocument title="TERMS AND CONDITIONS OF SERVICE" subtitle="Finergy Finance Private Limited - Terms and Conditions" sections={sections} eyebrow="FINERGY FINANCE · POLICIES" meta={[["Effective Date", "July 16, 2025"], ["Version", "1.0"], ["Status", "RBI Compliant"]]} notice="" footerNotice="" />;
}
