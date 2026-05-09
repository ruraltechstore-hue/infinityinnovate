import { Link } from "react-router-dom";
import { LegalLayout } from "./LegalLayout";

const sections = [
  {
    to: "/privacy-policy",
    title: "Privacy Policy",
    desc: "How we collect, store and safeguard the personal data of buyers, investors, and visitors across our digital properties.",
  },
  {
    to: "/cookies",
    title: "Cookie Policy",
    desc: "Details of the cookies and similar technologies used on the InfinityInnovate Properties website to enhance your experience.",
  },
  {
    to: "/terms",
    title: "Terms & Conditions",
    desc: "The terms governing the use of our website, project listings, brochures, and enquiry services.",
  },
];

const Legal = () => (
  <LegalLayout
    title="Legal Information"
    subtitle="Transparency is the foundation of trust. Below you will find the legal documents that govern your interaction with InfinityInnovate Properties — across our website, marketing material, project enquiries and on-site engagements."
  >
    <h2>Our Legal Commitment</h2>
    <p>
      InfinityInnovate Properties Pvt. Ltd. is a RERA-registered real estate developer headquartered in
      Hyderabad, India. We are committed to operating in full compliance with the Real Estate (Regulation
      and Development) Act, 2016 (RERA), the Information Technology Act, 2000, the Digital Personal Data
      Protection Act, 2023 (DPDP Act), and all other applicable Central and State legislations governing
      property development, sale, marketing and digital communications in India.
    </p>
    <p>
      This Legal Hub consolidates the policies and disclosures that apply when you visit our website,
      submit an enquiry, download a brochure, schedule a site visit, or enter into any commercial
      agreement with us.
    </p>

    <h2>Documents</h2>
    <ul>
      {sections.map((s) => (
        <li key={s.to}>
          <Link to={s.to} className="text-primary hover:underline font-semibold">
            {s.title}
          </Link>
          <span className="block text-muted-foreground">{s.desc}</span>
        </li>
      ))}
    </ul>

    <h2>RERA & Regulatory Disclosures</h2>
    <p>
      All projects marketed by InfinityInnovate Properties are registered with the relevant State Real
      Estate Regulatory Authority. RERA registration numbers, approved sanction plans, carpet area
      details, and project completion timelines are disclosed on the respective project pages and in
      our official sales offices. Prospective buyers are encouraged to verify these details directly on
      the official RERA portal of the concerned State before committing to a purchase.
    </p>

    <h2>Disclaimer</h2>
    <p>
      All visualisations, walkthroughs, floor plans, amenities and specifications presented on this
      website are indicative and intended for representational purposes only. Actual delivered units
      may vary based on architectural revisions, statutory approvals, force majeure events, or
      site-specific conditions. Nothing on this website constitutes a binding offer, contract, or
      assurance of allotment unless explicitly stated in a duly executed Agreement for Sale.
    </p>

    <h2>Grievance Redressal</h2>
    <p>
      For any legal, compliance or grievance-related queries, please write to us at{" "}
      <a href="mailto:legal@infinityinnovative.com" className="text-primary hover:underline">
        legal@infinityinnovative.com
      </a>{" "}
      or contact our Grievance Officer at our Hyderabad corporate office. We endeavour to acknowledge
      all communications within 7 working days and resolve them within 30 days.
    </p>
  </LegalLayout>
);

export default Legal;
