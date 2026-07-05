import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white font-manrope relative z-50">
          HANNKEY<span className="text-primary">16</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white relative z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-background/98 backdrop-blur-xl border-t border-white/10 flex flex-col p-6 shadow-2xl md:hidden z-40 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 px-4 text-xl font-bold text-white/90 border-b border-white/5 active:bg-white/5 rounded-lg transition-colors font-manrope"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 w-full text-center py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
