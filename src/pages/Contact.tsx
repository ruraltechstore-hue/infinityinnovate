import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";
import { EnquiryForm } from "@/components/luxury/EnquiryForm";

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const contactCards = [
  { icon: Phone, title: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, title: "Email Us", value: "support@infinityinnovative.com", href: "mailto:support@infinityinnovative.com" },
  { icon: MapPin, title: "Visit Office", value: "Hyderabad, Telangana, India", href: undefined },
];

const Contact = () => (
  <div className="min-h-screen bg-[#0F172A]">
    <Navbar />

    <section className="pt-36 pb-10 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: cubicEase }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-5"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: cubicEase }}
          className="text-[#94A3B8] text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Ready to find your next home or investment? Send us a message and our team will get back to you shortly.
        </motion.p>
      </div>
    </section>

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
              {c.href ? <a href={c.href} className="block">{inner}</a> : inner}
            </motion.div>
          );
        })}
      </div>
    </section>

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

    <Footer />
  </div>
);

export default Contact;
