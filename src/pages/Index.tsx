import { Navbar } from "@/components/luxury/Navbar";
import { Hero } from "@/components/luxury/Hero";
import { FeatureStrip } from "@/components/luxury/FeatureStrip";
import { About } from "@/components/luxury/About";
import { Stats } from "@/components/luxury/Stats";
import { FeaturedProperties } from "@/components/luxury/FeaturedProperties";
import { CTASection } from "@/components/luxury/CTASection";
import { Footer } from "@/components/luxury/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <FeatureStrip />
    <About />
    <Stats />
    <FeaturedProperties />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
