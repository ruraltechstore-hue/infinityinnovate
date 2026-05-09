import { motion } from "framer-motion";
import { MapPinned, TrendingUp, ShieldCheck, Building2 } from "lucide-react";

const items = [
  {
    icon: MapPinned,
    title: "Prime Locations",
    desc: "Every Infinity address is selected after deep due diligence — proximity to tech corridors, schools, healthcare and arterial roads ensures lasting demand.",
  },
  {
    icon: TrendingUp,
    title: "Strong Appreciation Potential",
    desc: "Our projects sit in Hyderabad's fastest-growing micro-markets where land value, rental yields and resale demand have consistently outperformed the city average.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Development",
    desc: "RERA-registered projects, transparent paperwork and a decade-long track record of on-time handovers — your investment is protected at every stage.",
  },
  {
    icon: Building2,
    title: "Modern Living Standards",
    desc: "Contemporary architecture, premium specifications, resort-style amenities and thoughtful master-planning designed for the modern Indian family.",
  },
];

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const WhyInvest = () => (
  <section className="section-padding max-w-7xl mx-auto">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="max-w-2xl mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: cubicEase }}
          className="text-primary font-mono text-xs tracking-widest uppercase mb-4"
        >
          Why Invest With Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: cubicEase }}
          className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground mb-4"
        >
          Built for Long-Term Value
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: cubicEase }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          Beyond beautiful homes, we build long-term value. Every Infinity project is engineered
          to deliver enduring returns, lifestyle quality and the peace of mind that comes with
          a developer that has earned its reputation, one handover at a time.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: cubicEase }}
            className="glass-card rounded-xl p-6 hover:shadow-md transition-shadow duration-500"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <it.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{it.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
