import { motion } from "framer-motion";
import { MapPin, ShieldCheck, TrendingUp } from "lucide-react";

const items = [
  { icon: MapPin, title: "Prime Locations", desc: "Strategically chosen addresses across India's growth corridors." },
  { icon: ShieldCheck, title: "RERA Compliant Projects", desc: "Every project registered, transparent and legally secure." },
  { icon: TrendingUp, title: "Trusted Investment", desc: "Strong appreciation and long-term value for your portfolio." },
];

export const FeatureStrip = () => (
  <section className="px-6 md:px-12 lg:px-20 -mt-10 relative z-20">
    <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-5">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-2xl p-6 flex items-start gap-4"
        >
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <it.icon size={22} className="text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground text-base mb-1">{it.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
