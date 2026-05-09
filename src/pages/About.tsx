import { motion } from "framer-motion";
import { Hammer, Users2, ShieldCheck, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";
import { About as AboutSection } from "@/components/luxury/About";
import { Stats } from "@/components/luxury/Stats";
import { WhyChooseUs } from "@/components/luxury/WhyChooseUs";
import aboutImg from "@/assets/about-community.jpg";
import insightImg from "@/assets/property-2.jpg";

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const trustPoints = [
  { icon: Hammer, title: "Construction Quality", desc: "Premium materials, IS-code compliant structural design and third-party quality audits at every stage." },
  { icon: Users2, title: "Customer-Centric", desc: "A dedicated relationship manager from booking to handover and a structured post-possession service desk." },
  { icon: ShieldCheck, title: "Transparent Paperwork", desc: "RERA-compliant documentation, clear title, full disclosure of carpet area and approved sanction plans." },
  { icon: TrendingUp, title: "Long-Term Value", desc: "Locations chosen for appreciation, designs built to age gracefully and amenities that future-proof your investment." },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Banner */}
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
          India — delivering homes, villas and commercial spaces that combine architectural
          excellence, lasting value and the trust of hundreds of families.
        </motion.p>
      </div>
    </section>

    {/* Company Overview */}
    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: cubicEase }}
          className="rounded-2xl overflow-hidden shadow-xl border border-border"
        >
          <img src={aboutImg} alt="InfinityInnovate Properties residential community" className="w-full h-full object-cover aspect-[4/5]" loading="lazy" />
        </motion.div>
        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: cubicEase }} className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
            Company Overview
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05, ease: cubicEase }} className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-foreground mb-6">
            A Decade of Building Confidence
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: cubicEase }} className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Founded with a single ambition — to raise the bar for residential development in India —
              InfinityInnovate Properties has grown into one of Hyderabad's most respected real-estate
              brands. From boutique gated communities to landmark high-rises, every project is the
              result of careful land selection, considered design and uncompromising construction.
            </p>
            <p>
              Our portfolio today spans premium apartments, luxury villas and Grade-A commercial
              developments across Hyderabad's most sought-after neighbourhoods — Gachibowli, Kondapur,
              Hitech City, Kukatpally and the emerging western corridor.
            </p>
            <p>
              What unites them is a single promise: that an Infinity address is a home you can trust,
              today and decades from now.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    <AboutSection />

    {/* Mission & Vision */}
    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: cubicEase }} className="glass-card rounded-2xl p-8">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Our Mission</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground">Building Homes That Earn Trust</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            To create homes and commercial spaces that stand for quality, transparency and timely
            delivery — empowering Indian families and businesses with addresses they can rely on for
            generations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We measure our success not by units sold, but by the families who refer us to their
            friends, the investors who return for their second purchase and the communities that
            mature into thriving neighbourhoods.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: cubicEase }} className="glass-card rounded-2xl p-8">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Our Vision</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground">Shaping the Skylines of Tomorrow</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            To be India's most respected real-estate developer — recognised for design innovation,
            sustainable communities and a legacy of long-term relationships with every customer who
            chooses an Infinity address.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our roadmap takes us beyond Hyderabad — into India's next-generation growth cities,
            carrying the same values of trust, transparency and craftsmanship.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Why Homebuyers Trust Us */}
    <section className="section-padding max-w-7xl mx-auto">
      <div className="max-w-2xl mb-12">
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Why Homebuyers Trust Us</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-foreground mb-4">
          Earned Over a Decade, One Family at a Time
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Trust isn't claimed — it's built. Through every brick laid, every milestone met and every
          promise kept, InfinityInnovate has become the developer of choice for discerning Indian
          homebuyers and investors.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustPoints.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: cubicEase }}
            className="glass-card rounded-xl p-6"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <p.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Construction Quality + image */}
    <section className="section-padding bg-muted/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Construction Quality Standards</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-foreground mb-5">
            Engineered for Generations
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every Infinity project follows a strict construction protocol — from RCC mix design and
              MIVAN shuttering to seismic-zone compliant structural detailing. Materials are sourced
              from leading Indian and international brands and are subject to incoming-quality checks
              before being released to site.
            </p>
            <p>
              Our project sites operate with dedicated quality, safety and environmental teams.
              Independent third-party inspections are conducted at foundation, structural and
              finishing milestones — and detailed quality reports are maintained for every unit.
            </p>
            <p>
              The result is a home that doesn't just look beautiful on day one, but continues to
              perform — structurally and aesthetically — for decades.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: cubicEase }}
          className="rounded-2xl overflow-hidden shadow-xl border border-border"
        >
          <img src={insightImg} alt="Premium construction and architecture" className="w-full h-full object-cover aspect-[4/5]" loading="lazy" />
        </motion.div>
      </div>
    </section>

    {/* Customer-centric + Long-term value */}
    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: cubicEase }} className="glass-card rounded-2xl p-8">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Customer-Centric Approach</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground">A Single Point of Contact, Always</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            From your first enquiry to your handover and beyond, you're supported by a dedicated
            relationship manager who knows your file, your unit and your priorities — no
            re-explaining, no transferred calls.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our post-possession desk continues to assist with snag closures, society formation and
            interior coordination, well after the keys are handed over.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: cubicEase }} className="glass-card rounded-2xl p-8">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Long-Term Investment Value</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground">Designed to Appreciate</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            We choose locations that age well — areas backed by infrastructure investment, employment
            density and steady end-user demand. The result is consistent rental yields and strong
            resale value across our portfolio.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our buyers consistently report capital appreciation that has outpaced the city average
            within the first five years of possession.
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
