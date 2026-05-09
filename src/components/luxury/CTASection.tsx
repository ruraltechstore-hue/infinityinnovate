import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";

export const CTASection = () => (
  <section id="enquire" className="section-padding bg-muted/40">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Enquire Now</p>
        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6 text-foreground">
          Find a Home That <br /> <span className="text-primary">Truly Fits You</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md">
          Share a few details and our property consultant will get in touch with curated
          options matching your requirements.
        </p>
        <a
          href="mailto:support@infinityinnovative.com"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm"
        >
          <Mail size={16} className="text-primary" /> support@infinityinnovative.com
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <EnquiryForm />
      </motion.div>
    </div>
  </section>
);
