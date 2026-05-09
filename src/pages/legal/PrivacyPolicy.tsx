import { LegalLayout } from "./LegalLayout";

const PrivacyPolicy = () => (
  <LegalLayout
    title="Privacy Policy"
    subtitle="Your privacy is fundamental to the trust you place in InfinityInnovate Properties. This policy explains how we collect, use, store and protect your personal information."
  >
    <h2>1. Introduction</h2>
    <p>
      InfinityInnovate Properties Pvt. Ltd. ("InfinityInnovate", "we", "us", or "our") respects the
      privacy of every visitor, prospective buyer, investor, channel partner, and customer who
      interacts with our website, sales offices, project sites and marketing channels. This Privacy
      Policy is published in accordance with the Information Technology Act, 2000, the Information
      Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or
      Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023.
    </p>

    <h2>2. Information We Collect</h2>
    <p>When you engage with us, we may collect the following categories of personal information:</p>
    <ul>
      <li>Identity data: full name, date of birth, PAN, Aadhaar (only when statutorily required for booking).</li>
      <li>Contact data: mobile number, email address, residential address, city of residence.</li>
      <li>Enquiry data: project of interest, configuration preferences, budget range, timeline to purchase.</li>
      <li>Financial data: source of funds declaration, home loan partner preferences, payment receipts.</li>
      <li>Technical data: IP address, browser type, device identifiers, pages visited, and referral source.</li>
    </ul>

    <h2>3. How We Use Your Information</h2>
    <p>Information collected is used strictly for legitimate business purposes, including:</p>
    <ul>
      <li>Responding to enquiries and scheduling site visits.</li>
      <li>Sharing project brochures, price lists, payment plans and unit availability.</li>
      <li>Processing bookings, allotments and registration of sale deeds.</li>
      <li>Complying with RERA, KYC, AML and tax obligations under Indian law.</li>
      <li>Improving our website, services and customer experience through analytics.</li>
    </ul>

    <h2>4. Sharing of Information</h2>
    <p>
      We do not sell or rent your personal information. We may share limited information with our
      authorised channel partners, empanelled banks and housing finance companies, legal advisors,
      registration authorities, and statutory bodies, only to the extent necessary to fulfil your
      transaction or comply with applicable law.
    </p>

    <h2>5. Data Retention</h2>
    <p>
      Enquiry data is retained for a period of up to 36 months from the date of last interaction.
      Booking and transactional data is retained for a minimum of 8 years from the date of conveyance,
      in accordance with statutory record-keeping obligations.
    </p>

    <h2>6. Your Rights</h2>
    <p>
      Subject to the DPDP Act, 2023, you have the right to access, correct, update or request erasure
      of your personal data, withdraw consent for marketing communications, and nominate a person to
      exercise your rights in the event of incapacity. To exercise any of these rights, please write
      to our Data Protection Officer.
    </p>

    <h2>7. Security Measures</h2>
    <p>
      We implement industry-standard administrative, technical and physical safeguards including
      TLS-encrypted data transmission, restricted role-based access, secure data centres, periodic
      vulnerability assessments and staff training on data confidentiality.
    </p>

    <h2>8. Contact Us</h2>
    <p>
      Data Protection Officer, InfinityInnovate Properties Pvt. Ltd., Hyderabad, India.<br />
      Email:{" "}
      <a href="mailto:privacy@infinityinnovative.com" className="text-primary hover:underline">
        privacy@infinityinnovative.com
      </a>
    </p>
  </LegalLayout>
);

export default PrivacyPolicy;
