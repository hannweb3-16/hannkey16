import { motion } from 'framer-motion';
import { 
  Laptop, 
  Building2, 
  ShoppingCart, 
  AppWindow, 
  PenTool, 
  Search, 
  Cpu, 
  Zap, 
  Wrench,
  Globe
} from 'lucide-react';

const SERVICES = [
  { icon: Globe, title: 'Professional Web Dev', desc: 'Custom tailored websites engineered for your specific business goals.' },
  { icon: Laptop, title: 'Business Landing Pages', desc: 'High-converting pages designed to capture leads and drive sales.' },
  { icon: Building2, title: 'Company Profiles', desc: 'Establish digital authority with premium corporate identity sites.' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Robust, secure online stores optimized for maximum conversion.' },
  { icon: AppWindow, title: 'Custom Web Apps', desc: 'Complex workflows simplified into elegant, scalable web applications.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'User-centric interfaces that are intuitive, accessible, and stunning.' },
  { icon: Search, title: 'SEO Optimization', desc: 'Data-driven strategies to dominate search rankings and organic traffic.' },
  { icon: Cpu, title: 'AI Integration', desc: 'Automate processes and enhance user experiences with smart AI tools.' },
  { icon: Zap, title: 'Speed Optimization', desc: 'Lightning-fast load times for better retention and search visibility.' },
  { icon: Wrench, title: 'Maintenance & Support', desc: 'Ongoing technical support to keep your site secure and up-to-date.' },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Comprehensive Digital Solutions
          </h3>
          <p className="text-white/60 text-lg">
            From visionary design to robust engineering, we deliver end-to-end digital services that elevate your brand and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-card border border-white/5 rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] hover:border-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>
              
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors relative z-10">
                <service.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3 relative z-10">{service.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed relative z-10">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
