import { motion } from "framer-motion";
import { ShieldCheck, Clock, Hammer, Handshake } from "lucide-react";
import aboutImg from "@/assets/about-community.jpg";

const values = [
  { icon: ShieldCheck, title: "Transparent Dealings", desc: "Clear pricing, honest paperwork and full RERA compliance on every project." },
  { icon: Clock, title: "Timely Delivery", desc: "Disciplined project execution with on-time handovers our buyers can rely on." },
  { icon: Hammer, title: "Quality Construction", desc: "Premium materials, modern engineering and uncompromising build standards." },
  { icon: Handshake, title: "Long-Term Relationships", desc: "Trusted by hundreds of families well beyond the day they receive their keys." },
];

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: cubicEase },
  }),
};

export const About = () => (
  <section id="about" className="section-padding max-w-7xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
    >
      <motion.div variants={fadeUp} custom={0} className="rounded-2xl overflow-hidden shadow-xl border border-border">
        <img
          src={aboutImg}
          alt="Premium Indian residential community with landscaped gardens and pool"
          className="w-full h-full object-cover aspect-[4/5] md:aspect-[5/6]"
          loading="lazy"
        />
      </motion.div>

      <div>
        <motion.p variants={fadeUp} custom={1} className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
          About Us
        </motion.p>
        <motion.h2 variants={fadeUp} custom={2} className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6 text-foreground">
          Homes Built on Trust, <br /> Crafted for India.
        </motion.h2>
        <motion.p variants={fadeUp} custom={3} className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
          InfinityInnovative Properties is a premier Indian real-estate developer creating
          thoughtfully designed apartments, villas and commercial spaces. For over a decade,
          we've built our reputation on timely delivery, transparent dealings and lasting
          relationships with the families who call our buildings home.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              custom={i + 4}
              className="glass-card rounded-xl p-5 flex gap-4 items-start"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <v.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm mb-1 text-foreground">{v.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);
