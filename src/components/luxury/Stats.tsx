import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 35, suffix: "+", label: "Projects Delivered" },
  { value: 500, suffix: "+", label: "Happy Families" },
  { value: 20, suffix: "+", label: "Prime Locations" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
};

export const Stats = () => (
  <section className="section-padding bg-secondary text-secondary-foreground">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="font-display font-bold text-4xl md:text-6xl text-primary-foreground">
            <Counter to={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-xs md:text-sm tracking-widest uppercase text-primary-foreground/70 font-mono">
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);
