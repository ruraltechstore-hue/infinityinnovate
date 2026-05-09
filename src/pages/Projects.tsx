import { motion } from "framer-motion";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";
import { FeaturedProperties } from "@/components/luxury/FeaturedProperties";
import { CTASection } from "@/components/luxury/CTASection";

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ProjectsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-36 pb-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: cubicEase }}
          className="text-primary font-mono text-xs tracking-widest uppercase mb-4"
        >
          Our Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: cubicEase }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-6"
        >
          Premium Projects Across India
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: cubicEase }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          From sky-residences in Hyderabad to gated villa communities in Hitech City, every
          InfinityInnovate project is built in a prime location with strong appreciation
          potential — designed for both end-users and long-term investors.
        </motion.p>
      </div>
    </section>

    <FeaturedProperties />

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
          Every Infinity address is hand-picked for its location strength — proximity to
          tech corridors, top schools, healthcare, and connectivity. Our buyers consistently
          see strong rental yields and long-term capital appreciation, supported by
          RERA-compliant documentation and on-time handovers.
        </p>
      </motion.div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default ProjectsPage;
