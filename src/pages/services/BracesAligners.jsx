import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function BracesAligners({ onOpenModal }) {
  return (
    <div className="pt-24 text-on-surface">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden py-20 bg-surface">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-left">
            <motion.span variants={fadeUp} className="inline-block py-1 px-4 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest mb-6">AURA DENTAL COLLECTIVE</motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-8">
              Modern Orthodontics: <span className="text-primary">Braces & Clear Aligners</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-on-surface-variant leading-relaxed max-w-xl mb-10">
              Experience a new standard of orthodontic care. Our discreet straightening solutions for adults and teens combine clinical precision with the comfort of a sanctuary environment.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <button 
                onClick={() => onOpenModal('Orthodontics treatments')}
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 md:px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all"
              >
                Explore Treatments
              </button>
              <button className="bg-surface-container-high text-on-secondary-container px-6 md:px-8 py-4 rounded-full font-bold hover:bg-surface-container-highest transition-all">
                View Results
              </button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="Clear aligners" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-xl max-w-[240px]">
              <div className="flex items-center gap-4 mb-3">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-sm font-bold">Elite Provider</span>
              </div>
              <p className="text-xs text-on-surface-variant">Top-tier certification for Invisalign and advanced orthodontic procedures.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatments Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Precision Treatment Options</h2>
            <p className="text-on-surface-variant">Tailored solutions for every unique smile architecture.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Invisalign/Clear Aligners */}
            <motion.div variants={fadeUp} className="md:col-span-8 group relative bg-surface-container-lowest rounded-[2rem] p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Invisalign & Clear Aligners</h3>
                  <p className="text-on-surface-variant max-w-md mb-6 leading-relaxed">
                    The ultimate discreet orthodontic choice. Removable, comfortable, and nearly invisible—designed to fit seamlessly into your professional and social life.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm font-medium text-on-surface">
                      <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> No dietary restrictions
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-on-surface">
                      <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Precise 3D tracking
                    </li>
                  </ul>
                </div>
                <button onClick={() => onOpenModal('Invisalign & Clear Aligners')} className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all w-fit">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-20 group-hover:opacity-40 transition-opacity">
                <img className="w-full h-full object-cover" alt="Clear aligners macro" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" />
              </div>
            </motion.div>

            {/* Ceramic Braces */}
            <motion.div variants={fadeUp} className="md:col-span-4 bg-primary text-on-primary rounded-[2rem] p-10 flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white">brightness_high</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Ceramic Braces</h3>
                <p className="text-on-primary-container/80 text-sm leading-relaxed mb-6">
                  Tooth-colored brackets that blend with your natural enamel for a low-profile aesthetic without compromising on structural correction power.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <span className="text-xs uppercase tracking-widest font-bold opacity-70">Best for complex alignments</span>
              </div>
            </motion.div>

            {/* Traditional Braces */}
            <motion.div variants={fadeUp} className="md:col-span-12 bg-surface-container-lowest rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 aspect-video rounded-2xl overflow-hidden">
                <img className="w-full h-full object-cover" alt="Traditional braces" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Traditional Braces</h3>
                <p className="text-on-surface-variant mb-6">The gold standard for comprehensive orthodontic correction. Modern metal braces are smaller, more comfortable, and more efficient than ever before.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface p-4 rounded-xl">
                    <h4 className="font-bold text-primary mb-1">Durability</h4>
                    <p className="text-xs text-on-surface-variant">Built for consistent results over time.</p>
                  </div>
                  <div className="bg-surface p-4 rounded-xl">
                    <h4 className="font-bold text-primary mb-1">Efficiency</h4>
                    <p className="text-xs text-on-surface-variant">Ideal for severe overcrowding or bite issues.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Process Vertical Path */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">The Journey to Your Best Smile</h2>
            <p className="text-on-surface-variant">A streamlined, stress-free path through our clinical sanctuary.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-secondary-fixed-dim/30"></div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeUp} className="relative pl-20 mb-20">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-secondary-fixed-dim border-4 border-surface z-10 flex items-center justify-center">
                  <span className="text-on-secondary-fixed font-bold">01</span>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Digital Scanning</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    No messy putty impressions. We use state-of-the-art iTero® scanners to create a high-definition 3D map of your teeth in minutes.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="relative pl-20 mb-20">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-secondary-fixed-dim border-4 border-surface z-10 flex items-center justify-center">
                  <span className="text-on-secondary-fixed font-bold">02</span>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Custom Treatment Plan</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our specialists design your smile trajectory tooth-by-tooth, showing you a digital preview of your final results before we even begin.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="relative pl-20">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-secondary-fixed-dim border-4 border-surface z-10 flex items-center justify-center">
                  <span className="text-on-secondary-fixed font-bold">03</span>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Regular Refinement</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Periodic check-ins and adjustments ensure your progress stays on track, conducted in our calming, private treatment suites.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img className="w-full h-full object-cover" alt="Eating with aligners" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1000" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg mt-12">
                  <img className="w-full h-full object-cover" alt="Hygiene" src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&q=80&w=1000" />
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 lg:order-2">
              <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6">Designed for Your Lifestyle</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                Treatment shouldn't stop your life. Our modern approaches prioritize ease of use and hygiene, making your transformation a seamless part of your daily routine.
              </motion.p>
              <div className="space-y-8">
                <motion.div variants={fadeUp} className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-secondary">restaurant</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Dietary Freedom</h4>
                    <p className="text-sm text-on-surface-variant">With removable aligners, you can enjoy all your favorite foods without worry of damage or trapped debris.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-secondary">health_and_safety</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Simple Hygiene</h4>
                    <p className="text-sm text-on-surface-variant">Maintenance is straightforward. Just remove your aligners to brush and floss as normal, keeping your smile healthy throughout the process.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-primary-container rounded-[3rem] p-16 text-center text-on-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Start Your Smile Transformation</h2>
              <p className="text-lg text-on-primary-container/80 mb-12 max-w-2xl mx-auto">
                Join the thousands of patients who have rediscovered their confidence through Aura Dental Collective's sanctuary-led orthodontics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onOpenModal('Orthodontics Scan')}
                  className="bg-white text-primary px-10 py-5 rounded-full font-extrabold shadow-xl hover:scale-105 transition-transform"
                >
                  Book Your Scan
                </button>
                <button className="bg-primary/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-extrabold hover:bg-white/10 transition-all">
                  Cost Calculator
                </button>
              </div>
              <p className="mt-8 text-xs font-medium text-white/60 tracking-widest uppercase">Consultations are complimentary</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
