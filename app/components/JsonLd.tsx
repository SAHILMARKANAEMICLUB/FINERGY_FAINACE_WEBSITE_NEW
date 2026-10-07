import { absoluteUrl, homeFaqs, siteConfig } from "../../lib/site";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Prevent HTML parsers from breaking on raw tags inside JSON
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function buildHomeJsonLd() {
  const organizationId = absoluteUrl("/#organization");
  const websiteId = absoluteUrl("/#website");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": organizationId,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: ["Finergy", "Finergy Finance NBFC"],
        url: siteConfig.url,
        logo: absoluteUrl("/finergy-logo.png"),
        image: absoluteUrl("/finergy-logo.png"),
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phoneDisplay,
        foundingLocation: siteConfig.foundingLocation,
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        knowsAbout: [
          "RBI registered NBFC",
          "Personal finance",
          "Business finance",
          "Digital lending",
          "EMI planning",
          "Lending partnerships",
        ],
        slogan: siteConfig.tagline,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: siteConfig.email,
            telephone: siteConfig.phoneDisplay,
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            contactType: "complaints",
            email: siteConfig.email,
            telephone: siteConfig.phoneDisplay,
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ],
        sameAs: [
          "https://sachet.rbi.org.in/",
          "https://cms.rbi.org.in/cms/indexpage.html#eng",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-IN",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        url: siteConfig.url,
        name: "Finergy Finance | RBI Registered NBFC for Personal & Business Finance",
        description: siteConfig.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        primaryImageOfPage: absoluteUrl("/finergy-logo.png"),
        inLanguage: "en-IN",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".hero-description", ".faq-list details p", ".legal-note"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl("/#faq"),
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/#breadcrumb"),
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
        ],
      },
    ],
  };
}
