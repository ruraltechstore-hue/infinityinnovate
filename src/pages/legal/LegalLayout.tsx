import { ReactNode } from "react";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  updated?: string;
  children: ReactNode;
}

export const LegalLayout = ({ title, subtitle, updated = "January 2026", children }: LegalLayoutProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <header className="mb-12 border-b border-border pb-8">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">
            InfinityInnovative Properties
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{subtitle}</p>
          )}
          <p className="text-muted-foreground text-xs mt-4">Last updated: {updated}</p>
        </header>
        <article className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-base [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-base">
          {children}
        </article>
      </div>
    </main>
    <Footer />
  </div>
);
