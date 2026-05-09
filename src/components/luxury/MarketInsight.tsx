import { motion } from "framer-motion";
import { TrendingUp, Building, Route, LineChart } from "lucide-react";
import insightImg from "@/assets/about-community.jpg";

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const points = [
  { icon: TrendingUp, title: "Hyderabad's Growth Story", desc: "Among India's fastest-growing real-estate markets with double-digit annual price growth in core micro-markets." },
  { icon: Building, title: "Infrastructure Boom", desc: "Metro Phase II, ORR expansion, Regional Ring Road and IT-park densification are reshaping liveability and connectivity." },
  { icon: Route, title: "Emerging Corridors", desc: "Kokapet, Narsingi, Tellapur and Shamshabad are quietly maturing into the city's next premium addresses." },
  { icon: LineChart, title: "Long-Term Value", desc: "Strong end-user demand from a young IT workforce keeps absorption rates and rental yields healthy." },
];

export const MarketInsight = () => (
  <section className="section-padding bg-muted/40">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: cubicEase }}
        className="rounded-2xl overflow-hidden shadow-xl border border-border order-last lg:order-first"
      >
        <img
          src={insightImg}
          alt="Hyderabad skyline and emerging real-estate corridors"
          className="w-full h-full object-cover aspect-[5/4]"
          loading="lazy"
        />
      </motion.div>

      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: cubicEase }}
          className="text-primary font-mono text-xs tracking-widest uppercase mb-4"
        >
          Market Insight
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: cubicEase }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-foreground mb-5"
        >
          Hyderabad: India's Next-Decade Real-Estate Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: cubicEase }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
        >
          Hyderabad has emerged as one of India's most resilient property markets — backed by
          a thriving technology ecosystem, world-class infrastructure investment and a steady
          influx of professionals seeking quality housing. For buyers and investors, the
          window to participate in the city's next growth wave is now.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: cubicEase }}
              className="glass-card rounded-xl p-5 flex gap-4 items-start"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <p.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm mb-1 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
