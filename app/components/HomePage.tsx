"use client";

import { useEffect, useState } from "react";
import { homeFaqs } from "../../lib/site";

const solutions = [
  {
    number: "01",
    label: "EVERYDAY GOALS",
    title: "Personal finance",
    copy: "Personal loan and consumer finance options from an RBI-registered NBFC for plans and purchases that matter in everyday life.",
    art: "journey",
  },
  {
    number: "02",
    label: "GROWING BUSINESSES",
    title: "Business finance",
    copy: "Business finance support for entrepreneurs and growing companies ready to build, invest, and scale with clarity.",
    art: "growth",
  },
  {
    number: "03",
    label: "PARTNER NETWORK",
    title: "Finance partnerships",
    copy: "Lending partnerships with banks, NBFCs, fintechs, and DSAs to make responsible credit more accessible across India.",
    art: "network",
  },
];

const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [amount, setAmount] = useState(300000);
  const [rate, setRate] = useState(14);
  const [months, setMonths] = useState(36);

  const monthlyRate = rate / 12 / 100;
  const factor = (1 + monthlyRate) ** months;
  const monthlyPayment = (amount * monthlyRate * factor) / (factor - 1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Finergy Finance home">
          <img src="/finergy-logo.png" alt="Finergy Finance Private Limited logo – RBI registered NBFC" width={160} height={53} />
        </a>
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={`navigation${menuOpen ? " open" : ""}`} aria-label="Main navigation">
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Finergy</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
        </nav>
        <a className="header-cta" href="#contact">Talk to our team <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy reveal">
            <p className="eyebrow"><i /> RBI REGISTERED NBFC</p>
            <h1>
              Finergy Finance —
              <br />
              make your next
              <br />
              move <em>matter.</em>
            </h1>
            <p className="hero-description">
              Finergy Finance Private Limited is an RBI-registered NBFC offering personal finance, business finance, and lending partnerships that help people and businesses across India take their next step with confidence.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#solutions">Explore solutions <span>↗</span></a>
              <a className="text-link" href="#about">Get to know Finergy <span>↓</span></a>
            </div>
            <div className="hero-note">
              <span className="note-star">✳</span>
              <span>
                Clear guidance. Considered support.
                <br />
                <b>People first, at every step.</b>
              </span>
            </div>
          </div>
          <div className="hero-art reveal">
            <div className="hero-photo">
              <img
                src="/images/hero-nbfc.jpg"
                alt="Finergy Finance NBFC workspace with loan documents, EMI planning tools, and Mumbai skyline"
              />
            </div>
            <div className="hero-stamp">
              <b>F</b>
              <span>
                FORWARD
                <br />
                TOGETHER
              </span>
            </div>
            <div className="floating-card">
              <span className="floating-icon">↗</span>
              <span>
                <small>A clear path forward</small>
                <b>Built around you</b>
              </span>
              <i>✓</i>
            </div>
            <div className="photo-caption">
              <span>01 / 03</span>
              <span>Infinite Possibilities. One Finergy</span>
            </div>
          </div>
          <div className="hero-footer">
            <span>FINERGY FINANCE PRIVATE LIMITED · RBI REGISTERED NBFC</span>
            <a href="#solutions">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        <section className="principles-strip" aria-label="Our principles">
          <span>✳ &nbsp;RBI registered NBFC</span>
          <span>✳ &nbsp;Built on clarity</span>
          <span>✳ &nbsp;Designed around people</span>
          <b>
            A more thoughtful way forward <i>↗</i>
          </b>
        </section>

        <section className="section solutions" id="solutions">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow eyebrow-dark"><i /> HOW WE CAN HELP</p>
              <h2>
                Personal &amp; business
                <br />
                <em>finance in motion.</em>
              </h2>
            </div>
            <p>
              From personal loans and everyday goals to business credit and partner-led lending, Finergy brings clarity to your options so you can move forward with confidence.
            </p>
          </div>
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article className="solution-card reveal" key={solution.number}>
                <div className="card-meta">
                  <span>
                    {solution.number} — {solution.label}
                  </span>
                  <i>↗</i>
                </div>
                <div className={`solution-art ${solution.art}`} aria-hidden="true">
                  {solution.art === "journey" && (
                    <>
                      <span className="art-sun" />
                      <span className="art-road" />
                      <span className="art-mark">F</span>
                    </>
                  )}
                  {solution.art === "growth" && (
                    <>
                      <span className="tower tower-one" />
                      <span className="tower tower-two" />
                      <span className="tower tower-three" />
                      <span className="growth-star">✳</span>
                    </>
                  )}
                  {solution.art === "network" && (
                    <>
                      <span className="network-ring ring-one" />
                      <span className="network-ring ring-two" />
                      <span className="network-ring ring-three" />
                      <span className="network-core">F</span>
                    </>
                  )}
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.copy}</p>
                <a className="card-link" href="#contact">
                  Explore {solution.title.toLowerCase()} <span>↗</span>
                </a>
              </article>
            ))}
          </div>
          <p className="disclaimer">
            Product availability, eligibility, terms, and pricing are subject to assessment and applicable partner policies.
          </p>
        </section>

        <section className="approach" id="approach">
          <div className="approach-image reveal">
            <img
              src="/images/about-nbfc.jpg"
              alt="Finergy Finance advisors guiding a customer through personal and business lending options"
            />
            <span className="image-label">
              THE FINERGY WAY <i>✳</i>
            </span>
          </div>
          <div className="approach-copy reveal">
            <p className="eyebrow"><i /> A BETTER KIND OF FINANCE</p>
            <h2>
              Good finance
              <br />
              starts with <em>listening.</em>
            </h2>
            <p>
              Money decisions are personal. As an RBI-registered NBFC in India, Finergy believes the lending experience should be clear, considered, and respectful of where you are—and where you want to go.
            </p>
            <a className="button button-outline" href="#about">
              Discover our approach <span>↗</span>
            </a>
            <div className="approach-caption">
              <span>01</span>
              <span>Clarity first · People always</span>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow eyebrow-dark"><i /> ABOUT FINERGY FINANCE</p>
              <h2>
                Progress is personal.
                <br />
                <em>Our purpose is shared.</em>
              </h2>
            </div>
            <p>
              Finergy Finance Private Limited is an RBI-registered NBFC–ND based in Mumbai. We build finance experiences grounded in trust, thoughtful service, and lasting relationships across India.
            </p>
          </div>
          <div className="values-grid">
            <article className="value-card reveal">
              <small>01 / OUR BELIEF</small>
              <h3>
                People
                <br />
                <em>before process.</em>
              </h3>
              <p>We put understanding first and make every interaction count.</p>
              <span>✳</span>
            </article>
            <article className="value-card value-green reveal">
              <small>02 / OUR PROMISE</small>
              <h3>
                Clear steps.
                <br />
                <em>Real support.</em>
              </h3>
              <p>Helpful guidance at every point in the lending journey.</p>
              <span>↗</span>
            </article>
            <article className="value-card value-gold reveal">
              <small>03 / OUR AMBITION</small>
              <h3>
                More people
                <br />
                <em>moving forward.</em>
              </h3>
              <p>Responsible credit can open doors. We&apos;re here to help make that possible.</p>
              <span>◎</span>
            </article>
          </div>
        </section>

        <section className="calculator-section" id="emi-calculator" aria-label="EMI calculator">
          <div className="calculator-copy reveal">
            <p className="eyebrow"><i /> PLAN WITH CLARITY</p>
            <h2>
              EMI calculator for
              <br />
              your <em>monthly plan.</em>
            </h2>
            <p>
              Use the Finergy EMI calculator to see how loan amount, interest rate, and tenure can shape an estimated monthly repayment for personal or business finance.
            </p>
            <small>This estimate is for illustration only and is not an offer or loan approval.</small>
          </div>
          <div className="calculator-card reveal">
            <div className="calculator-heading">
              <b>ILLUSTRATIVE EMI CALCULATOR</b>
              <span>QUICK ESTIMATE</span>
            </div>
            <label className="amount-label" htmlFor="amount">
              Loan amount <strong>{formatINR(amount)}</strong>
            </label>
            <input
              className="amount-range"
              id="amount"
              type="range"
              min={50000}
              max={1500000}
              step={10000}
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
            />
            <div className="range-labels">
              <span>₹50,000</span>
              <span>₹15,00,000</span>
            </div>
            <div className="input-grid">
              <label>
                Annual interest rate
                <div className="number-input">
                  <input
                    type="number"
                    min={1}
                    max={36}
                    step={0.5}
                    value={rate}
                    onChange={(event) => setRate(Math.min(36, Math.max(1, Number(event.target.value) || 1)))}
                  />
                  <span>%</span>
                </div>
              </label>
              <label>
                Tenure
                <div className="number-input">
                  <input
                    type="number"
                    min={3}
                    max={84}
                    step={1}
                    value={months}
                    onChange={(event) => setMonths(Math.min(84, Math.max(3, Number(event.target.value) || 3)))}
                  />
                  <span>months</span>
                </div>
              </label>
            </div>
            <div className="emi-result">
              <span>
                <small>ESTIMATED MONTHLY EMI</small>
                <strong>{formatINR(monthlyPayment)}</strong>
              </span>
              <i>↗</i>
            </div>
            <p className="calculator-disclaimer">Illustrative only. Final terms depend on lender assessment.</p>
          </div>
        </section>

        <section className="faq-section section" id="faq">
          <div className="faq-heading reveal">
            <p className="eyebrow eyebrow-dark"><i /> GOOD TO KNOW</p>
            <h2>
              Finergy Finance
              <br />
              <em>FAQs.</em>
            </h2>
            <p>Clear answers about our RBI-registered NBFC, products, EMI estimates, and support.</p>
          </div>
          <div className="faq-list reveal">
            {homeFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span>+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orbit" aria-hidden="true" />
          <p className="eyebrow"><i /> YOUR NEXT STEP STARTS HERE</p>
          <h2>
            Let&apos;s move
            <br />
            <em>forward together.</em>
          </h2>
          <p>
            Contact Finergy Finance in Mumbai for personal finance, business finance, partnership enquiries, or grievance support.
          </p>
          <a
            className="button button-gold"
            href="mailto:grievance.officer@finergyfinance.com?subject=Finergy%20Finance%20enquiry"
          >
            Get in touch <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#top">
              <img src="/finergy-logo.png" alt="Finergy Finance Private Limited" width={174} height={58} />
            </a>
            <p>Infinite Possibilities. One Finergy</p>
            <p className="footer-reg">RBI Registered NBFC–ND</p>
          </div>
          <div className="footer-links">
            <div>
              <b>EXPLORE</b>
              <a href="#solutions">Solutions</a>
              <a href="#approach">Our approach</a>
              <a href="#about">About Finergy</a>
              <a href="#emi-calculator">EMI calculator</a>
            </div>
            <div>
              <b>GET IN TOUCH</b>
              <a href="mailto:grievance.officer@finergyfinance.com">Email our team</a>
              <a href="tel:+919769880628">+91 97698 80628</a>
            </div>
            <div>
              <b>LEGAL</b>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-conditions">Terms &amp; Conditions</a>
              <a href="/refund-policy">Refund Policy</a>
            </div>
            <div>
              <b>RESOURCES</b>
              <a href="https://sachet.rbi.org.in/" target="_blank" rel="noreferrer">
                RBI Sachet
              </a>
              <a href="https://cms.rbi.org.in/cms/indexpage.html#eng" target="_blank" rel="noreferrer">
                RBI CMS
              </a>
              <a href="/partnerships">Partnerships</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Finergy Finance Private Limited</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
        <p className="legal-note">
          Finergy Finance Private Limited is a Non-Banking Financial Company – Non-Deposit Taking (NBFC–ND) registered with the Reserve Bank of India, with its registered office in Mumbai, Maharashtra. Financing options, if available, are subject to eligibility, assessment, lender terms, and applicable regulations. This content is general information and does not constitute a loan offer, financial advice, or guarantee of approval. EMI figures are estimates only.
        </p>
      </footer>
    </>
  );
}
