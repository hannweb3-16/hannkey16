import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    text: 'HANNKEY16 delivered beyond our expectations. The new platform is blazing fast and has increased our conversion rate by 40%. Their attention to detail is unmatched.',
  },
  {
    name: 'Marcus Chen',
    role: 'Founder, Elevate Design',
    text: 'Working with this agency felt like an extension of our own team. They understood our brand immediately and translated it into a stunning digital experience.',
  },
  {
    name: 'Elena Rostova',
    role: 'Marketing Director, GlobalReach',
    text: 'The absolute best in the business. They handled our complex migration smoothly and the custom features they built are exactly what our users needed.',
  },
  {
    name: 'David O\'Connor',
    role: 'Managing Partner, O\'Connor Law',
    text: 'Professional, responsive, and incredibly talented. Our new website has elevated our firm\'s credibility tremendously. Highly recommend HANNKEY16.',
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Client Success</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Don't Just Take Our Word For It.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-card border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-primary/20 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 opacity-50 group-hover:text-primary/5 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-white">{testimonial.name}</h5>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
