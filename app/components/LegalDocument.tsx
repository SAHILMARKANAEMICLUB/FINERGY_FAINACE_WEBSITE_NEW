export type LegalSection = {
  title: string;
  content?: string;
  paragraphs?: string[];
  bullets?: string[];
  details?: { title?: string; content?: string; bullets?: string[] }[];
  afterBullets?: string[];
  afterDetails?: string[];
};

type LegalDocumentProps = {
  title: string;
  subtitle: string;
  sections: LegalSection[];
  eyebrow?: string;
  meta?: [string, string][];
  notice?: string;
  footerNotice?: string;
};

const policyLinks = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-conditions"],
  ["Refund Policy", "/refund-policy"],
] as const;

export function LegalDocument({
  title,
  subtitle,
  sections,
  eyebrow = "FINERGY FINANCE · POLICIES",
  meta = [["Effective date", "16 July 2025"], ["Version", "1.0"]],
  notice = "This is a plain-language summary for convenience.",
  footerNotice = "This page provides a concise overview of the published policy.",
}: LegalDocumentProps) {
  return (
    <>
      <header className="site-header legal-header">
        <a className="brand" href="/" aria-label="Finergy Finance home"><img src="/finergy-logo.png" alt="Finergy Finance" /></a>
        <nav className="navigation legal-nav" aria-label="Main navigation">
          <a href="/#solutions">Solutions</a><a href="/#about">About Finergy</a><a href="/#contact">Contact</a>
        </nav>
        <a className="header-cta" href="/#contact">Talk to our team <span>↗</span></a>
      </header>

      <main className="legal-page">
        <section className="legal-hero">
          <div className="legal-hero-inner">
            <p className="eyebrow"><i /> {eyebrow}</p>
            <p className="legal-breadcrumb"><a href="/">Home</a><span>/</span>{title}</p>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="legal-meta">{meta.map(([label, value]) => <span key={label}>{label}<b>{value}</b></span>)}</div>
          </div>
        </section>

        <div className="legal-layout">
          <aside className="legal-aside">
            <p>ON THIS PAGE</p>
            <nav aria-label="Page contents">{sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.title}>{String(index + 1).padStart(2, "0")} <span>{section.title}</span></a>)}</nav>
          </aside>
          <article className="legal-content">
            {notice && <div className="summary-notice"><span>i</span><p>{notice}</p></div>}
            {sections.map((section, index) => (
              <section className="legal-section" id={`section-${index + 1}`} key={section.title}>
                <span className="legal-section-index">{String(index + 1).padStart(2, "0")}</span>
                <div><h2>{section.title}</h2>{section.content && <p>{section.content}</p>}{section.paragraphs?.map((paragraph) => <p className="legal-extra-paragraph" key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}{section.afterBullets?.map((paragraph) => <p className="legal-extra-paragraph" key={paragraph}>{paragraph}</p>)}{section.details?.map((detail) => <div className="legal-detail" key={detail.title || detail.content}><>{detail.title && <h3>{detail.title}</h3>}{detail.content && <p>{detail.content}</p>}{detail.bullets && <ul>{detail.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</></div>)}{section.afterDetails?.map((paragraph) => <p className="legal-extra-paragraph" key={paragraph}>{paragraph}</p>)}</div>
              </section>
            ))}
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div><a className="brand footer-brand" href="/"><img src="/finergy-logo.png" alt="Finergy Finance Private Limited" /></a><p>Infinite Possibilities. One Finergy</p><p className="footer-reg">RBI Registered NBFC–ND</p></div>
          <div className="footer-links">
            <div><b>EXPLORE</b><a href="/#solutions">Solutions</a><a href="/#approach">Our approach</a><a href="/#about">About Finergy</a></div>
            <div><b>GET IN TOUCH</b><a href="mailto:grievance.officer@finergyfinance.com">Email our team</a><a href="tel:+919769880628">+91 97698 80628</a></div>
            <div><b>LEGAL</b>{policyLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
            <div><b>RESOURCES</b><a href="https://sachet.rbi.org.in/" target="_blank" rel="noreferrer">RBI Sachet</a><a href="https://cms.rbi.org.in/cms/indexpage.html#eng" target="_blank" rel="noreferrer">RBI CMS</a><a href="/partnerships">Partnerships</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Finergy Finance Private Limited</span><a href="#top">BACK TO TOP ↑</a></div>
        {footerNotice && <p className="legal-note">{footerNotice}</p>}
      </footer>
    </>
  );
}
