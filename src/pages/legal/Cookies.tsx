import { LegalLayout } from "./LegalLayout";

const Cookies = () => (
  <LegalLayout
    title="Cookie Policy"
    subtitle="This policy explains how InfinityInnovate Properties uses cookies and similar tracking technologies on our website to deliver a fast, secure and personalised experience."
  >
    <h2>1. What Are Cookies?</h2>
    <p>
      Cookies are small text files placed on your device when you visit a website. They allow the
      website to recognise your browser, remember your preferences, and provide functionality such as
      keeping you signed in, remembering your shortlist of properties, and measuring how our pages
      perform.
    </p>

    <h2>2. Categories of Cookies We Use</h2>
    <h3>Strictly Necessary Cookies</h3>
    <p>
      Required for the basic operation of the website, including page navigation, security, and form
      submission. The website cannot function correctly without these cookies.
    </p>
    <h3>Performance & Analytics Cookies</h3>
    <p>
      Help us understand how visitors discover and engage with our project listings. Tools such as
      Google Analytics aggregate anonymised data on page views, session duration, traffic sources and
      conversion paths so we can improve the relevance of our content.
    </p>
    <h3>Functional Cookies</h3>
    <p>
      Remember choices you make, such as your preferred city (Hyderabad, Bengaluru, Pune), language,
      and previously viewed projects, so we can present a more relevant experience on your next visit.
    </p>
    <h3>Marketing Cookies</h3>
    <p>
      Set by our advertising partners to build a profile of your interests and show you relevant
      InfinityInnovate Properties campaigns on other websites and social platforms. These cookies are
      enabled only with your explicit consent.
    </p>

    <h2>3. Third-Party Cookies</h2>
    <p>
      Certain pages may include embedded content from third parties such as Google Maps, YouTube and
      virtual-tour providers. These third parties may set their own cookies, which are governed by
      their respective privacy policies.
    </p>

    <h2>4. Managing Your Preferences</h2>
    <p>
      You can manage or disable cookies at any time through your browser settings. Most browsers allow
      you to refuse cookies, delete existing cookies, or be notified before a new cookie is stored.
      Please note that disabling certain cookies may affect the functionality of the website,
      including our enquiry forms and shortlisting features.
    </p>

    <h2>5. Updates to This Policy</h2>
    <p>
      We may update this Cookie Policy from time to time to reflect changes in technology, regulation,
      or our business practices. The latest version will always be available on this page with the
      revised "Last updated" date.
    </p>

    <h2>6. Contact</h2>
    <p>
      For any questions regarding our use of cookies, please contact us at{" "}
      <a href="mailto:privacy@infinityinnovative.com" className="text-primary hover:underline">
        privacy@infinityinnovative.com
      </a>
      .
    </p>
  </LegalLayout>
);

export default Cookies;
