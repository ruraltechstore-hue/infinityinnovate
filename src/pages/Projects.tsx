import { motion } from "framer-motion";
import { Briefcase, GraduationCap, HeartPulse, Train, Sparkles, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";
import { FeaturedProperties } from "@/components/luxury/FeaturedProperties";
import { CTASection } from "@/components/luxury/CTASection";

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const philosophyPoints = [
  { title: "Land First, Always", desc: "Every project begins with months of land due-diligence — title verification, soil reports, master-plan zoning and neighbourhood study." },
  { title: "Architecture That Ages Well", desc: "We commission timeless, contemporary architecture — never trend-driven facades that look dated within a decade." },
  { title: "Master-Planned Communities", desc: "Open spaces, walkable layouts, dedicated kids' zones and amenities sized for actual community use, not brochure photos." },
  { title: "Quality That Outlasts Possession", desc: "We pick specifications and brand partners knowing our buyers will live with these surfaces, fittings and finishes for decades." },
];

const locationFactors = [
  { icon: Train, title: "Connectivity", desc: "Every project is within easy reach of the metro, ORR and Hyderabad's primary arterial roads." },
  { icon: Briefcase, title: "Employment Hubs", desc: "Minutes from Hitech City, Gachibowli Financial District and emerging IT-park clusters." },
  { icon: GraduationCap, title: "Top Schools", desc: "Surrounded by leading international and CBSE/ICSE schools — making daily routines effortless for families." },
  { icon: HeartPulse, title: "Healthcare Access", desc: "Proximity to multi-speciality hospitals such as AIG, Continental, KIMS and Care." },
  { icon: Sparkles, title: "Lifestyle Convenience", desc: "Premium retail, dining, gourmet supermarkets and entertainment within a short drive." },
  { icon: TrendingUp, title: "Investment Growth", desc: "Micro-markets with sustained price appreciation, healthy rental demand and strong resale liquidity." },
];

const ProjectsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Banner */}
    <section className="pt-36 pb-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: cubicEase }} className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
          Our Portfolio
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: cubicEase }} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-6">
          Premium Projects Across India
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: cubicEase }} className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          From sky-residences in Hyderabad to gated villa communities in Hitech City, every
          InfinityInnovative project is built in a prime location with strong appreciation potential —
          designed for both end-users and long-term investors.
        </motion.p>
      </div>
    </section>

    {/* Intro paragraph */}
    <section className="max-w-4xl mx-auto px-6 pb-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: cubicEase }} className="text-muted-foreground leading-relaxed text-base md:text-lg space-y-4 text-center">
        <p>
          Our developments span premium apartments, luxury villas and Grade-A commercial spaces —
          each thoughtfully crafted around its neighbourhood and the lifestyle it serves. Whether
          you are searching for a first home, an upgrade or a long-term investment, our portfolio
          offers a configuration and address that fits.
        </p>
      </motion.div>
    </section>

    <FeaturedProperties />

    {/* Project Philosophy */}
    <section className="section-padding bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Our Project Philosophy</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-foreground mb-4">
            How We Build, Why It Matters
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Every InfinityInnovative project is shaped by four non-negotiable principles. They guide where we
            build, how we design and what we deliver — long after the brochure stops being relevant.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {philosophyPoints.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: cubicEase }}
              className="glass-card rounded-xl p-6 md:p-8"
            >
              <p className="font-mono text-xs text-primary mb-3 tracking-widest">0{i + 1}</p>
              <h3 className="font-display font-semibold text-xl mb-3 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why these locations matter */}
    <section className="section-padding max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Why These Locations Matter</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-foreground mb-5">
          Where You Live Shapes How You Live
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          We believe an address is more than a postal code. It determines your daily commute, your
          children's schooling, your access to healthcare and ultimately the long-term value of your
          investment. Our locations are chosen with all of this in mind.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locationFactors.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: cubicEase }}
            className="glass-card rounded-xl p-6"
          >
            <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <f.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Investment value block */}
    <section className="max-w-5xl mx-auto px-6 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: cubicEase }}
        className="glass-card rounded-2xl p-8 md:p-10 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground">
          Investment You Can Live In
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Every InfinityInnovative address is hand-picked for its location strength — proximity to tech
          corridors, top schools, healthcare and connectivity. Our buyers consistently see strong
          rental yields and long-term capital appreciation, supported by RERA-compliant
          documentation and on-time handovers.
        </p>
      </motion.div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default ProjectsPage;
