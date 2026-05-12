import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Users2, Building2 } from "lucide-react";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";
import { EnquiryForm } from "@/components/luxury/EnquiryForm";

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const contactCards = [
  { icon: Phone, title: "Call Us", value: "+91 98765 43210", href: "tel:+919390168733" },
  {
    icon: Mail,
    title: "Email Us",
    value: "support@infinityinnovative.com",
    href: "mailto:support@infinityinnovative.com",
  },
  {
    icon: MapPin,
    title: "Visit Office",
    value:
      "Sai Silicon Heights, 3-118, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081, India",
    href: undefined,
  },
];

const whyContact = [
  {
    icon: ShieldCheck,
    title: "Verified Project Information",
    desc: "Receive RERA numbers, sanction plans, carpet area details and current pricing — direct from the developer.",
  },
  {
    icon: Users2,
    title: "Dedicated Relationship Manager",
    desc: "A single point of contact for site visits, brochures, payment plans and home-loan coordination.",
  },
  {
    icon: Building2,
    title: "Site Visits On Your Schedule",
    desc: "Weekday or weekend, virtual or in-person — we make it easy for you to experience our projects firsthand.",
  },
];

const audienceNotes = [
  {
    tag: "For Investors",
    desc: "Detailed unit-level appreciation history, rental benchmark data and exit-strategy guidance for HNI and NRI buyers.",
  },
  {
    tag: "For Homebuyers",
    desc: "End-to-end support from shortlisting and configuration selection to home-loan tie-ups and registration.",
  },
  {
    tag: "For Families",
    desc: "Personalised walkthroughs focused on schooling, safety, community amenities and long-term liveability.",
  },
];

const Contact = () => (
  <div className="min-h-screen bg-[#0F172A]">
    <Navbar />

    {/* Banner */}
    <section className="pt-36 pb-10 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: cubicEase }}
          className="text-primary font-mono text-xs tracking-widest uppercase mb-4"
        >
          Get In Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: cubicEase }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-5"
        >
          We'd Love to Hear From You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: cubicEase }}
          className="text-[#94A3B8] text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Whether you're shortlisting your next home, exploring an investment, or simply want honest advice about
          Hyderabad's property market — our team is here to help.
        </motion.p>
      </div>
    </section>

    {/* Contact cards */}
    <section className="max-w-5xl mx-auto px-6 pb-6">
      <div className="grid sm:grid-cols-3 gap-5">
        {contactCards.map((c, i) => {
          const inner = (
            <div className="bg-[#1E293B]/70 backdrop-blur-md border border-[#334155]/60 rounded-xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.18)]">
              <div className="h-11 w-11 rounded-lg bg-primary/15 flex items-center justify-center">
                <c.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-white text-sm">{c.title}</h3>
              <p className="text-[#94A3B8] text-xs leading-relaxed">{c.value}</p>
            </div>
          );
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.5, ease: cubicEase }}
            >
              {c.href ? (
                <a href={c.href} className="block">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Enquiry form */}
    <section className="max-w-3xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: cubicEase }}
      >
        <EnquiryForm variant="dark" />
      </motion.div>
    </section>

    {/* Why contact us */}
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Why Contact Us</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-4">
          Honest Answers, Direct From the Developer
        </h2>
        <p className="text-[#94A3B8] text-base leading-relaxed">
          We believe property decisions deserve clarity. When you reach out, you speak with our in-house team — never a
          routed call centre.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {whyContact.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: cubicEase }}
            className="bg-[#1E293B]/60 border border-[#334155]/60 rounded-xl p-6"
          >
            <div className="h-11 w-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
              <w.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-white text-base mb-2">{w.title}</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">{w.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Response assurance */}
    <section className="max-w-4xl mx-auto px-6 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: cubicEase }}
        className="bg-[#1E293B]/60 border border-[#334155]/60 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start"
      >
        <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
          <Clock size={22} className="text-primary" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-white text-xl md:text-2xl mb-3">
            We respond within 24 business hours
          </h3>
          <p className="text-[#94A3B8] leading-relaxed">
            Every enquiry is reviewed by a senior consultant and answered with project-specific information, current
            availability and the next-step that's right for you. For urgent site-visit requests, simply mention your
            preferred date in the enquiry form and we'll confirm the slot the same day.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Audience notes */}
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="grid md:grid-cols-3 gap-5">
        {audienceNotes.map((a, i) => (
          <motion.div
            key={a.tag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: cubicEase }}
            className="bg-[#1E293B]/40 border border-[#334155]/40 rounded-xl p-6"
          >
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">{a.tag}</p>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
