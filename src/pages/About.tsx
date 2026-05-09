import { motion } from "framer-motion";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";
import { About as AboutSection } from "@/components/luxury/About";
import { Stats } from "@/components/luxury/Stats";
import { WhyChooseUs } from "@/components/luxury/WhyChooseUs";

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-36 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: cubicEase }}
          className="text-primary font-mono text-xs tracking-widest uppercase mb-4"
        >
          About InfinityInnovate
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: cubicEase }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-6"
        >
          Crafting India's Most Trusted Homes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: cubicEase }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          For more than a decade, InfinityInnovate Properties has been shaping skylines across
          India — delivering homes, villas, and commercial spaces that combine architectural
          excellence, lasting value, and the trust of hundreds of families.
        </motion.p>
      </div>
    </section>

    <AboutSection />

    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: cubicEase }}
          className="glass-card rounded-2xl p-8"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Our Mission</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground">
            Building Homes That Earn Trust
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            To create homes and commercial spaces that stand for quality, transparency, and
            timely delivery — empowering Indian families and businesses with addresses they
            can rely on for generations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: cubicEase }}
          className="glass-card rounded-2xl p-8"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Our Vision</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground">
            Shaping the Skylines of Tomorrow
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            To be India's most respected real-estate developer — recognised for design
            innovation, sustainable communities, and a legacy of long-term relationships with
            every customer who chooses an Infinity address.
          </p>
        </motion.div>
      </div>
    </section>

    <Stats />
    <WhyChooseUs />
    <Footer />
  </div>
);

export default AboutPage;
