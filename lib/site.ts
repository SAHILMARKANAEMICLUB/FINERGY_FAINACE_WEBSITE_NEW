export const siteConfig = {
  name: "Finergy Finance",
  legalName: "Finergy Finance Private Limited",
  tagline: "Infinite Possibilities. One Finergy",
  description:
    "Finergy Finance Private Limited is an RBI-registered NBFC–ND offering personal finance, business finance, and lending partnerships across India. Clear guidance, thoughtful support, and responsible credit.",
  url: "https://www.finergyfinance.com",
  locale: "en_IN",
  email: "grievance.officer@finergyfinance.com",
  phone: "+919769880628",
  phoneDisplay: "+91 97698 80628",
  address: {
    street: "Floor Grd, Plot 118, Sumer Mansion, Patthe Bapurao, Mumbai Central",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400008",
    country: "IN",
  },
  foundingLocation: "Mumbai, India",
  registration: "RBI-registered Non-Banking Financial Company – Non-Deposit Taking (NBFC–ND)",
  keywords: [
    "Finergy Finance",
    "Finergy Finance Private Limited",
    "RBI registered NBFC",
    "NBFC India",
    "NBFC Mumbai",
    "personal finance India",
    "business finance India",
    "personal loan NBFC",
    "business loan NBFC",
    "EMI calculator",
    "digital lending India",
    "lending partnerships",
    "non banking financial company",
    "responsible credit",
    "grievance redressal NBFC",
  ],
} as const;

export const homeFaqs = [
  {
    question: "Is Finergy Finance an RBI-registered NBFC?",
    answer:
      "Yes. Finergy Finance Private Limited is a Non-Banking Financial Company – Non-Deposit Taking (NBFC–ND) registered with the Reserve Bank of India.",
  },
  {
    question: "What does Finergy Finance do?",
    answer:
      "Finergy Finance is an RBI-registered NBFC that helps people and businesses access personal finance, business finance, and partner-led lending solutions across India, with clear guidance and thoughtful customer support.",
  },
  {
    question: "Where is Finergy Finance located?",
    answer:
      "Finergy Finance Private Limited is based in Mumbai, Maharashtra, India, with its registered office at Floor Grd, Plot 118, Sumer Mansion, Patthe Bapurao, Mumbai Central, Mumbai 400008.",
  },
  {
    question: "How do I find a finance solution that suits me?",
    answer:
      "Contact the Finergy team to discuss your needs and learn about available personal or business finance options, eligibility requirements, and next steps. Product availability depends on assessment and applicable policies.",
  },
  {
    question: "Does the EMI calculator show my final repayment?",
    answer:
      "No. The Finergy EMI calculator provides an illustrative estimate from the loan amount, interest rate, and tenure you enter. Actual terms may differ after lender assessment.",
  },
  {
    question: "How can I contact Finergy Finance for support or grievances?",
    answer:
      "For support or grievance-related queries, email grievance.officer@finergyfinance.com or call +91 97698 80628. You may also use RBI Sachet and RBI CMS for regulatory complaint channels.",
  },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
