import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-extrabold tracking-tighter text-white font-manrope mb-6 inline-block">
              HANNKEY<span className="text-primary">16</span>
            </a>
            <p className="text-white/60 text-lg max-w-md mb-8">
              Build Better Websites, Grow Bigger Business. <br />
              We engineer digital excellence for ambitious brands globally.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter / X" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all border border-white/10">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all border border-white/10">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all border border-white/10">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all border border-white/10">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/60 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-white/60 hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#process" className="text-white/60 hover:text-primary transition-colors">Our Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} HANNKEY16. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Engineered with absolute precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
