import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
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
                <Link to={link.to} className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
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
              <a href="tel:+919390168733" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
                <Phone size={14} className="text-primary shrink-0" /> +91 93901 68733
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground text-sm">
              <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
              <span>Sai Silicon Heights, 3-118, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081, India</span>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/legal" className="text-primary font-mono text-xs tracking-widest uppercase mb-4 inline-block hover:opacity-80 transition-opacity">Legal</Link>
          <ul className="space-y-3">
            <li><Link to="/privacy-policy" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Cookies</Link></li>
            <li><Link to="/terms" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Terms</Link></li>
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
