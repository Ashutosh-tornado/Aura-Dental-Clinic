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

export default function TeethWhitening({ onOpenModal }) {
  return (
    <div className="pt-24 bg-surface text-on-surface font-body">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center justify-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-20 scale-105" alt="Bright dental studio" src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000" />
        </div>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-bold tracking-widest uppercase">Clinical Excellence</motion.span>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
            Professional Teeth Whitening for a <span className="text-primary italic">Brighter</span>, Confident Smile
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of aesthetic dental care. Our advanced whitening systems deliver transformative results while prioritizing the health of your enamel.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onOpenModal('Professional Teeth Whitening')} className="bg-primary text-on-primary px-6 md:px-8 py-4 rounded-full font-headline font-bold text-lg shadow-[0_8px_24px_-4px_rgba(0,104,93,0.3)] hover:-translate-y-1 transition-transform">
              Book Your Brightening
            </button>
            <button onClick={() => document.getElementById('before-after').scrollIntoView({ behavior: 'smooth' })} className="bg-surface-container-high text-on-surface px-6 md:px-8 py-4 rounded-full font-headline font-bold text-lg hover:bg-surface-container-highest transition-colors">
              View Before & After
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-32 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <img className="rounded-[2rem] shadow-2xl relative z-10" alt="Dental equipment" src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000" />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-[240px]">
              <p className="font-headline font-bold text-primary text-3xl">98%</p>
              <p className="text-sm text-on-surface-variant">Patient satisfaction with our laser whitening protocols.</p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="text-4xl font-headline font-bold mb-12 text-on-surface">The Science of a Sanctuary Smile</motion.h2>
            <div className="space-y-12">
              <motion.div variants={fadeUp} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold mb-2">Fast, Dramatic Results</h3>
                  <p className="text-on-surface-variant leading-relaxed">Achieve up to 8 shades whiter in a single hour session. Perfect for upcoming weddings, interviews, or special events.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold mb-2">Safe for Your Enamel</h3>
                  <p className="text-on-surface-variant leading-relaxed">Our clinical-grade gels are pH-balanced and formulated with desensitizing agents to protect your natural tooth structure.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold mb-2">Long-lasting Brightness</h3>
                  <p className="text-on-surface-variant leading-relaxed">Utilizing professional sealing techniques, we ensure your new glow resists staining long after you leave our sanctuary.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Whitening Options */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl font-headline font-bold mb-4">Choose Your Path to Radiance</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Tailored treatments designed to fit your lifestyle and aesthetic goals.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto lg:h-[600px]">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-7 group relative overflow-hidden rounded-[2.5rem] bg-primary text-white p-12 flex flex-col justify-end transition-all duration-500 hover:shadow-2xl">
              <img className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-110 transition-transform duration-700" alt="In-office whitening" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 mb-6 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest">Immediate Results</span>
                <h3 className="text-4xl font-headline font-extrabold mb-4">In-Office Laser Whitening</h3>
                <p className="text-white/80 text-lg mb-8 max-w-lg">The gold standard. A single 60-minute appointment utilizing professional-grade blue-light technology for maximum lift.</p>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">check_circle</span> 6-10 shades whiter</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">check_circle</span> Clinically supervised</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">check_circle</span> Minimal sensitivity</li>
                </ul>
                <button onClick={() => onOpenModal('In-Office Laser Whitening')} className="bg-white text-primary px-6 md:px-8 py-3 rounded-full font-headline font-bold hover:bg-surface transition-colors">Book In-Office</button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="md:col-span-5 group relative overflow-hidden rounded-[2.5rem] bg-secondary-container p-12 flex flex-col justify-end transition-all duration-500 hover:shadow-2xl">
              <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-20 group-hover:scale-110 transition-transform duration-700" alt="Take-home kit" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 mb-6 rounded-full border border-on-secondary-container/20 text-on-secondary-container text-xs font-bold uppercase tracking-widest">Flexible Care</span>
                <h3 className="text-3xl font-headline font-extrabold text-on-secondary-container mb-4">Professional At-Home Kits</h3>
                <p className="text-on-secondary-container/80 mb-8">Custom-molded trays paired with boutique whitening gels for professional results on your schedule.</p>
                <button onClick={() => onOpenModal('Professional At-Home Whitening Kits')} className="bg-secondary text-white px-6 md:px-8 py-3 rounded-full font-headline font-bold hover:opacity-90 transition-opacity">Explore Kits</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After Visual Section */}
      <section id="before-after" className="py-32 px-6 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <h2 className="text-4xl font-headline font-bold mb-6">Real Results. Real Patients.</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                A picture is worth a thousand smiles. Our gallery showcases the actual transformations achieved through our clinical whitening protocols. No filters, just science and care.
              </p>
              <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/10">
                <p className="italic text-on-surface mb-6">"I never realized how much my coffee habit was hiding my smile. One hour at Aura and I feel like a new person. The process was completely painless."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-tertiary-fixed overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Sarah J." src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1000" />
                  </div>
                  <div>
                    <p className="font-headline font-bold">Sarah J.</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">In-Office Patient</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 relative group">
                  <img className="w-full h-full object-cover grayscale brightness-90" alt="Before whitening" src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&q=80&w=1000" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-headline font-bold">BEFORE</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur px-3 py-1 rounded text-[10px] text-white font-bold">CASE 1042</div>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg h-48 relative group">
                  <img className="w-full h-full object-cover" alt="After whitening" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000" />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-headline font-bold">AFTER</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg h-48 relative group">
                  <img className="w-full h-full object-cover grayscale brightness-90" alt="Before cleaning" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-headline font-bold">BEFORE</span>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 relative group">
                  <img className="w-full h-full object-cover" alt="After treatment" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-headline font-bold">AFTER</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur px-3 py-1 rounded text-[10px] text-white font-bold">+8 SHADES</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary to-primary-container p-16 text-center text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            <h2 className="text-5xl font-headline font-extrabold mb-8 relative z-10">Brighten Your Smile Today</h2>
            <p className="text-xl text-on-primary-container max-w-2xl mx-auto mb-12 relative z-10 opacity-90">
              Join hundreds of patients who have discovered the confidence of a clinically whitened smile. Book your consultation and start your journey to a brighter you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <button onClick={() => onOpenModal('Professional Teeth Whitening')} className="bg-white text-primary px-10 py-5 rounded-full font-headline font-bold text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Book Appointment
              </button>
              <a href="tel:5550123456" className="inline-block bg-primary-container text-white border border-white/30 px-10 py-5 rounded-full font-headline font-bold text-xl hover:bg-white/10 transition-all">
                Call (555) 012-3456
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
