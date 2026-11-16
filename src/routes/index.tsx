import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle,
  Star,
  MapPin,
  Bug,
  Home,
  Building2,
  Hotel,
  Warehouse,
  Hospital,
  ChevronDown,
  Zap,
  Clock,
  Award,
  ThumbsUp,
  Leaf,
  BadgeCheck,
  CalendarCheck,
  Headphones,
  ChevronRight,
} from "lucide-react";

const PHONE = "8441925748";
const WHATSAPP_LINK = `https://wa.me/91${PHONE}?text=Hello%20Daksh%20Pest%20Control%2C%20I%20need%20pest%20control%20services.`;
const CALL_LINK = `tel:+91${PHONE}`;

/* ── Unsplash images (CDN, no API key needed) ── */
const IMG = {
  hero: "/hero-pest-control.jpg",
  heroPest: "/hero-pest-control.jpg",
  cockroach: "/svc-cockroach.jpg",
  mosquito: "/svc-mosquito.png",
  termite: "/svc-termite.jpg",
  rodent: "/svc-rodent.jpg",
  techHome:
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=700&q=80",
};

const services = [
  {
    img: IMG.cockroach,
    icon: Bug,
    name: "Cockroach Control",
    tagline: "Zero tolerance. Zero cockroaches.",
    description:
      "Gel-based and spray treatments that eliminate cockroach colonies from every crack and corner. Safe for kitchens and homes.",
    badge: "Most Popular",
  },
  {
    img: IMG.mosquito,
    icon: Zap,
    name: "Mosquito Control",
    tagline: "Sleep without the buzz.",
    description:
      "Thermal fogging, larvicidal treatment and residual spraying to wipe out mosquitoes and block their breeding grounds.",
    badge: "Seasonal Special",
  },
  {
    img: IMG.termite,
    icon: ShieldCheck,
    name: "Termite Control",
    tagline: "Protect your structure for decades.",
    description:
      "Pre and post-construction termite barriers using industry-leading chemical treatments with long-lasting warranty.",
    badge: "Long-Term Protection",
  },
  {
    img: IMG.rodent,
    icon: Award,
    name: "Rodent Control",
    tagline: "No entry for rats and mice.",
    description:
      "Baiting stations, mechanical traps and structural proofing to eliminate rodents and prevent future infestations.",
    badge: "High Efficacy",
  },
];

const clientTypes = [
  {
    icon: Home,
    label: "Home",
    desc: "Safe, odourless treatments that protect your family and pets from all household pests.",
    col: "serve-navy",
  },
  {
    icon: Building2,
    label: "Office",
    desc: "Discreet pest management scheduled around your work hours with zero disruption.",
    col: "serve-orange",
  },
  {
    icon: Hotel,
    label: "Hotels",
    desc: "Hygiene-compliant solutions maintaining high guest satisfaction and hotel star ratings.",
    col: "serve-teal",
  },
  {
    icon: Warehouse,
    label: "Warehouse",
    desc: "Large-scale fumigation and structural proofing for storage and logistics facilities.",
    col: "serve-slate",
  },
  {
    icon: Hospital,
    label: "Hospital & Clinics",
    desc: "Medical-grade, regulation-compliant pest management with certified safe chemicals.",
    col: "serve-green",
  },
];

const stats = [
  { num: "500+", label: "Happy Clients", icon: ThumbsUp },
  { num: "10+", label: "Years Experience", icon: Award },
  { num: "100%", label: "Safe Chemicals", icon: Leaf },
  { num: "24×7", label: "Support", icon: Headphones },
];

const whyUs = [
  { icon: BadgeCheck, text: "Certified & experienced pest control technicians" },
  { icon: Leaf, text: "100% safe, MSDS-certified chemicals" },
  { icon: Zap, text: "Same-day service available across the city" },
  { icon: Bug, text: "Odourless treatments for sensitive spaces" },
  { icon: CalendarCheck, text: "Annual Maintenance Contracts (AMC) available" },
  { icon: Star, text: "Service warranty on every treatment" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daksh Pest Control | Professional Pest Management Services" },
      {
        name: "description",
        content:
          "Daksh Pest Control — cockroach, mosquito, termite & rodent control for homes, offices, hotels, warehouses and hospitals. Call 8441925748.",
      },
      { property: "og:title", content: "Daksh Pest Control | Professional Pest Management" },
      { property: "og:description", content: "Expert pest control services. Call 8441925748." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Are your chemicals safe for children and pets?",
      a: "Yes! We use MSDS-certified, odourless chemicals completely safe for children and pets after the recommended drying time (usually 1–2 hours).",
    },
    {
      q: "How long does a treatment take?",
      a: "Most treatments are completed in 1–2 hours. Termite treatments may take longer depending on the property size.",
    },
    {
      q: "Do you offer Annual Maintenance Contracts?",
      a: "Yes, we offer AMC plans for homes and commercial properties that include scheduled visits and warranty on all treatments.",
    },
    {
      q: "How soon can I book a service?",
      a: "We offer same-day and next-day service. Call or WhatsApp us at 8441925748 to book your slot instantly.",
    },
  ];

  return (
    <main className="dpc">
      {/* ═══════════════ HEADER ═══════════════ */}
      <header className="dpc-header">
        <a className="dpc-logo" href="#top">
          <span className="dpc-logo-icon">
            <Bug />
          </span>
          <span className="dpc-logo-name">
            Daksh<span> Pest</span> Control
          </span>
        </a>
        <nav className="dpc-nav">
          <a href="#services">Services</a>
          <a href="#we-serve">We Serve</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="dpc-hctas">
          <a href={CALL_LINK} className="hcta-call">
            <Phone /> Call Now
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hcta-wa">
            <MessageCircle /> WhatsApp
          </a>
        </div>
      </header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="dpc-hero" id="top">
        <img src={IMG.hero} alt="Professional pest control service" className="hero-img" />
        <div className="hero-overlay" />

        {/* Left: text content */}
        <div className="hero-content">
          <div className="hero-pill">
            <MapPin /> Professional Pest Management
          </div>
          <h1>
            Your Space, Completely
            <br />
            <span>Pest-Free.</span>
          </h1>
          <p>
            Daksh Pest Control delivers safe, certified and affordable pest solutions for homes,
            offices, hotels, warehouses and hospitals — trusted by 500+ customers across the city.
          </p>
          <div className="hero-ctas">
            <a href={CALL_LINK} className="btn-orange">
              <Phone /> Call: {PHONE}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-wa">
              <MessageCircle /> WhatsApp Us
            </a>
          </div>
          <div className="hero-trust">
            <span>
              <Star fill="currentColor" /> 500+ Happy Clients
            </span>
            <span>
              <ShieldCheck /> MSDS Certified
            </span>
            <span>
              <CheckCircle /> Same-Day Service
            </span>
          </div>
        </div>

        {/* Right: hero image panel */}
        <div className="hero-img-panel">
          <div className="hero-img-frame">
            <img
              src={IMG.heroPest}
              alt="Daksh Pest Control technician at work"
              className="hero-panel-img"
            />
            <div className="hero-img-badge-wrap">
              <span className="hero-img-badge">
                <ShieldCheck />
                Certified &amp; Safe
              </span>
            </div>
          </div>
          {/* floating info card — moved inside image panel on desktop */}
          <div className="hero-infocard">
            <div className="hic-row">
              <CheckCircle className="hic-icon ok" />
              <span>Free Inspection</span>
            </div>
            <div className="hic-row">
              <CheckCircle className="hic-icon ok" />
              <span>Warranty on all treatments</span>
            </div>
            <div className="hic-row">
              <CheckCircle className="hic-icon ok" />
              <span>Certified technicians</span>
            </div>
            <a href={CALL_LINK} className="hic-cta">
              Book Now <ChevronRight />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ RIBBON ═══════════════ */}
      <div className="dpc-ribbon">
        <div>
          <BadgeCheck />
          <span>ISO Certified</span>
        </div>
        <div className="rdiv" />
        <div>
          <CheckCircle />
          <span>Trained Technicians</span>
        </div>
        <div className="rdiv" />
        <div>
          <Star fill="currentColor" />
          <span>500+ Clients</span>
        </div>
        <div className="rdiv" />
        <div>
          <Clock />
          <span>24×7 Support</span>
        </div>
        <div className="rdiv" />
        <div>
          <Zap />
          <span>Same-Day Service</span>
        </div>
      </div>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="dpc-services" id="services">
        <div className="sec-head center">
          <div className="sec-eyebrow">
            <span>01</span> OUR SERVICES
          </div>
          <h2>
            What We <em>Eliminate</em>
          </h2>
          <p>Proven, safe and permanent pest control solutions tailored to your space.</p>
        </div>
        <div className="svc-grid">
          {services.map((svc, i) => (
            <article className="svc-card" key={svc.name}>
              <div className="svc-img-wrap">
                <img src={svc.img} alt={svc.name} className="svc-img" loading="lazy" />
                <span className="svc-badge">{svc.badge}</span>
                <span className="svc-num">0{i + 1}</span>
              </div>
              <div className="svc-body">
                <div className="svc-icon-row">
                  <div className="svc-icon">
                    <svc.icon />
                  </div>
                  <h3>{svc.name}</h3>
                </div>
                <p className="svc-tagline">{svc.tagline}</p>
                <p className="svc-desc">{svc.description}</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="svc-cta">
                  Book Now <ArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <div className="dpc-stats">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <s.icon className="stat-icon" />
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ═══════════════ WE SERVE ═══════════════ */}
      <section className="dpc-serve" id="we-serve">
        <div className="sec-head center light">
          <div className="sec-eyebrow light">
            <span>02</span> WHERE WE SERVE
          </div>
          <h2>
            Spaces We <em>Protect</em>
          </h2>
          <p>From homes to hospitals — the right pest solution for every space.</p>
        </div>
        <div className="serve-grid">
          {clientTypes.map((ct) => (
            <div className={`serve-card ${ct.col}`} key={ct.label}>
              <div className="serve-icon-wrap">
                <ct.icon />
              </div>
              <h3>{ct.label}</h3>
              <p>{ct.desc}</p>
              <a href={CALL_LINK} className="serve-link">
                Get Quote <ArrowRight />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ WHY US ═══════════════ */}
      <section className="dpc-why" id="why-us">
        <div className="why-img-col">
          <img
            src={IMG.techHome}
            alt="Daksh Pest Control technician at work"
            className="why-img"
            loading="lazy"
          />
          <div className="why-img-badge">
            <ThumbsUp />
            <div>
              <strong>500+</strong>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
        <div className="why-copy">
          <div className="sec-eyebrow">
            <span>03</span> WHY CHOOSE US
          </div>
          <h2>
            Trusted by <em>Hundreds</em>
          </h2>
          <p className="why-desc">
            We combine certified chemicals, expert technicians, and customer-first service to
            deliver pest control that actually works — and lasts.
          </p>
          <ul className="why-list">
            {whyUs.map((w) => (
              <li key={w.text}>
                <span className="why-icon">
                  <w.icon />
                </span>
                {w.text}
              </li>
            ))}
          </ul>
          <div className="why-ctas">
            <a href={CALL_LINK} className="btn-orange">
              <Phone /> Call {PHONE}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-wa">
              <MessageCircle /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section className="dpc-process">
        <div className="sec-head center">
          <div className="sec-eyebrow">
            <span>04</span> HOW IT WORKS
          </div>
          <h2>
            Book in <em>3 Easy Steps</em>
          </h2>
        </div>
        <div className="process-grid">
          <div className="pstep">
            <div className="pstep-num">01</div>
            <div className="pstep-icon-wrap">
              <Phone />
            </div>
            <h3>Call or WhatsApp</h3>
            <p>
              Reach us at <strong>{PHONE}</strong>. Tell us your pest problem and location.
            </p>
          </div>
          <div className="pstep-connector">
            <ArrowRight />
          </div>
          <div className="pstep">
            <div className="pstep-num">02</div>
            <div className="pstep-icon-wrap">
              <CalendarCheck />
            </div>
            <h3>Schedule a Slot</h3>
            <p>We arrange a convenient visit — same-day or next-day options available.</p>
          </div>
          <div className="pstep-connector">
            <ArrowRight />
          </div>
          <div className="pstep">
            <div className="pstep-num">03</div>
            <div className="pstep-icon-wrap">
              <BadgeCheck />
            </div>
            <h3>Job Done, Guaranteed</h3>
            <p>Our certified technician arrives, treats and backs it up with a service warranty.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="dpc-faq">
        <div className="sec-head center">
          <div className="sec-eyebrow">
            <span>05</span> FAQ
          </div>
          <h2>
            Got <em>Questions?</em>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
              <button
                className="faq-q"
                aria-expanded={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`faq-chev${openFaq === i ? " spin" : ""}`} />
              </button>
              {openFaq === i && <p className="faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ CONTACT CTA ═══════════════ */}
      <section className="dpc-contact" id="contact">
        <div className="contact-inner">
          <div className="sec-eyebrow light center">
            <span>BOOK NOW</span>
          </div>
          <h2>
            Get a <em>Free Inspection</em> Today
          </h2>
          <p>Call or WhatsApp us — we respond within minutes, 24×7.</p>
          <div className="contact-ctas">
            <a href={CALL_LINK} className="btn-orange btn-lg">
              <Phone /> Call: {PHONE}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-wa btn-lg">
              <MessageCircle /> Chat on WhatsApp
            </a>
          </div>
          <div className="contact-badges">
            <span>
              <CheckCircle /> Free Inspection
            </span>
            <span>
              <CheckCircle /> Same-Day Available
            </span>
            <span>
              <CheckCircle /> Service Warranty
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="dpc-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="dpc-logo" href="#top">
              <span className="dpc-logo-icon">
                <Bug />
              </span>
              <span className="dpc-logo-name">
                Daksh<span> Pest</span> Control
              </span>
            </a>
            <p>Professional pest management you can trust.</p>
            <div className="footer-socials">
              <a href={CALL_LINK} className="fsocial">
                <Phone />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="fsocial fwa">
                <MessageCircle />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">Cockroach Control</a>
            <a href="#services">Mosquito Control</a>
            <a href="#services">Termite Control</a>
            <a href="#services">Rodent Control</a>
          </div>
          <div className="footer-col">
            <h4>We Serve</h4>
            <a href="#we-serve">Homes</a>
            <a href="#we-serve">Offices</a>
            <a href="#we-serve">Hotels</a>
            <a href="#we-serve">Warehouses</a>
            <a href="#we-serve">Hospitals & Clinics</a>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <a href={CALL_LINK}>
              <Phone /> {PHONE}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp Us
            </a>
            <span>
              <MapPin /> Available across the city
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Daksh Pest Control. All rights reserved.</span>
          <a href="#top" className="back-top">
            Back to top ↑
          </a>
        </div>
      </footer>

      {/* ═══════════════ FLOATING BUTTONS ═══════════════ */}
      <div className="dpc-float">
        <a href={CALL_LINK} className="float-call" aria-label="Call us">
          <Phone />
          <span>Call Now</span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="float-wa"
          aria-label="WhatsApp"
        >
          <MessageCircle />
          <span>WhatsApp</span>
        </a>
      </div>
    </main>
  );
}
