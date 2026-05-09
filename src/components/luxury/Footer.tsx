import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#properties" },
  { label: "Enquire", href: "#enquire" },
];

export const Footer = () => (
  <footer className="border-t border-border bg-muted/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <p className="font-display text-lg font-bold tracking-tight mb-4 text-foreground">
            InfinityInnovate<span className="text-primary"> Properties</span>
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium apartments, villas and commercial spaces crafted for modern Indian living.
          </p>
        </div>

        <div>
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Quick Links</p>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Contact</p>
          <ul className="space-y-3">
            <li>
              <a href="mailto:support@infinityinnovative.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
                <Mail size={14} className="text-primary" /> support@infinityinnovative.com
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
                <Phone size={14} className="text-primary" /> +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={14} className="text-primary" /> Hyderabad, India
            </li>
          </ul>
        </div>

        <div>
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Legal</p>
          <ul className="space-y-3">
            <li><a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Cookies</a></li>
            <li><a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} InfinityInnovate Properties. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
