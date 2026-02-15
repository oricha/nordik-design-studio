import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Nordi<span className="text-accent">K</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Premium Scandinavian wood-frame houses engineered for sustainability, comfort, and modern living. Building the future with nature.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a href="#projects" className="hover:text-primary-foreground transition-colors">Our Projects</a>
              <a href="#services" className="hover:text-primary-foreground transition-colors">Construction Options</a>
              <a href="#why" className="hover:text-primary-foreground transition-colors">Why NordiK</a>
              <a href="#gallery" className="hover:text-primary-foreground transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Helsinki, Finland</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +358 40 123 4567</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@nordik.fi</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
          © 2026 NordiK. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
