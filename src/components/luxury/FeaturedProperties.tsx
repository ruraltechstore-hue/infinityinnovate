import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const projects = [
  { image: property1, title: "Infinity Heights", location: "Hyderabad", desc: "Premium 3 & 4 BHK sky-residences with panoramic city views." },
  { image: property2, title: "Skyline Residency", location: "Hyderabad", desc: "Contemporary apartments built around lush central courtyards." },
  { image: property3, title: "Urban Vista", location: "Gachibowli", desc: "Modern living minutes from the city's tech and business hubs." },
  { image: property4, title: "Emerald Towers", location: "Kondapur", desc: "Architectural twin-towers with resort-style amenities." },
  { image: property5, title: "Royal Enclave", location: "Kukatpally", desc: "Gated villa community with private gardens and clubhouse." },
  { image: property6, title: "Horizon Grand", location: "Hitech City", desc: "Landmark high-rise designed for modern Indian families." },
];

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: cubicEase },
  }),
};

export const FeaturedProperties = () => (
  <section id="properties" className="section-padding max-w-7xl mx-auto">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
      <motion.p variants={fadeUp} custom={0} className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
        Portfolio
      </motion.p>
      <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-12 text-foreground">
        Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            custom={i + 2}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: cubicEase }}
            className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={p.image}
                alt={`${p.title} — ${p.location}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 p-6 w-full">
              <div className="flex justify-between items-end gap-3">
                <div>
                  <p className="text-primary font-mono text-[10px] mb-2 tracking-widest uppercase">
                    Featured Project
                  </p>
                  <h3 className="text-xl font-display font-semibold tracking-tight text-white">{p.title}</h3>
                  <div className="flex items-center gap-1 text-white/70 mt-1 text-sm">
                    <MapPin size={14} />
                    <span>{p.location}</span>
                  </div>
                  <p className="text-white/60 text-xs mt-2 leading-relaxed max-w-[240px]">{p.desc}</p>
                </div>
                <button
                  aria-label={`View ${p.title}`}
                  className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary flex-shrink-0"
                >
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
