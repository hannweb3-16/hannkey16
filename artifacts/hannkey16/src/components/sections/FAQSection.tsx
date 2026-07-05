import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: "How much does a website cost?", a: "Pricing varies depending on complexity, features, and scale. We offer customized packages tailored to your specific needs, ensuring high ROI. Contact us for a precise quote." },
  { q: "How long does development take?", a: "A standard landing page takes 1-2 weeks, while complex e-commerce or SaaS platforms can take 4-12 weeks. We establish clear timelines during the planning phase." },
  { q: "Do you offer revisions?", a: "Yes. We believe in collaboration. Each phase of our process includes structured revision cycles to ensure the final product perfectly aligns with your vision." },
  { q: "Do you provide hosting and domains?", a: "We can handle end-to-end setup, including premium hosting, domain registration, and SSL certificates, or we can deploy to your existing infrastructure." },
  { q: "What about ongoing maintenance?", a: "We offer comprehensive monthly maintenance packages that include security updates, performance monitoring, content updates, and priority support." },
  { q: "Are your websites SEO optimized?", a: "Absolutely. Technical SEO is built into our core process. We ensure proper tagging, structured data, fast load times, and mobile responsiveness." },
  { q: "Can you integrate AI into my site?", a: "Yes, we specialize in AI integrations—from intelligent chatbots to automated content workflows and smart recommendation engines." }
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Questions & Answers</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            Common Inquiries.
          </h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="border border-white/10 rounded-xl bg-card overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-white text-lg pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
