import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { MapPin, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";
import { getFeaturedProjectBySlug } from "@/data/featuredProjects";
import NotFound from "./NotFound";

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getFeaturedProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-28 md:pt-32 pb-0">
        <div className="relative h-[45vh] min-h-[280px] max-h-[520px] w-full overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} — ${project.location}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/55 to-secondary/30" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10 max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: cubicEase }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-white/85 hover:text-white text-sm font-medium mb-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
              >
                <ArrowLeft size={16} aria-hidden />
                Portfolio
              </Link>
              <p className="text-primary font-mono text-[10px] md:text-xs tracking-widest uppercase mb-3">
                Featured project
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-4">
                {project.title}
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-display font-medium max-w-2xl mb-4">
                {project.tagline}
              </p>
              <div className="flex items-center gap-2 text-white/75 text-sm md:text-base">
                <MapPin size={18} className="flex-shrink-0" aria-hidden />
                <span>{project.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: cubicEase }}
          className="max-w-3xl mb-14"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Overview</p>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            {project.overview.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: cubicEase }}
          >
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Highlights</p>
            <ul className="space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-foreground/90 text-sm md:text-base leading-relaxed">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, ease: cubicEase }}
          >
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Specifications</p>
            <div className="glass-card rounded-xl divide-y divide-border/80 overflow-hidden">
              {project.specs.map((row) => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-5 py-4">
                  <span className="text-muted-foreground text-sm font-medium sm:w-44 flex-shrink-0">{row.label}</span>
                  <span className="text-foreground text-sm leading-relaxed">{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: cubicEase }}
          className="mb-14"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Amenities</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.amenities.map((a) => (
              <div key={a} className="glass-card rounded-lg px-5 py-4 text-sm md:text-base text-foreground/90 leading-relaxed">
                {a}
              </div>
            ))}
          </div>
        </motion.div>

        {project.reraNote ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: cubicEase }}
            className="text-muted-foreground text-sm leading-relaxed border border-border rounded-xl px-6 py-5 bg-muted/30 max-w-4xl mb-14"
          >
            <span className="font-semibold text-foreground">Compliance note: </span>
            {project.reraNote}
          </motion.p>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: cubicEase }}
          className="glass-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-2">
              Schedule a walk-through
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
              Speak with our team for inventory, pricing bands and RERA documentation specific to {project.title}.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:brightness-110 active:scale-[0.98] shadow-lg shadow-primary/20 flex-shrink-0"
          >
            Contact us
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
