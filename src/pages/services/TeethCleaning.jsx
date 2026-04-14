import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function TeethCleaning({ onOpenModal }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="pt-24 bg-surface text-on-surface font-body">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-10">
            <motion.span variants={fadeUp} className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
              Hygiene & Prevention
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-headline text-6xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
              Professional <span className="text-primary">Dental Hygiene</span> & Deep Cleaning
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-on-surface-variant leading-relaxed max-w-xl mb-10 font-body">
              Elevate your routine with our sanctuary-grade cleaning process. Designed to prevent gum disease and maintain a luminous, healthy smile through advanced clinical precision.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => onOpenModal('Professional Dental Hygiene & Deep Cleaning')} className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-full font-headline font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                Schedule Your Cleaning
              </button>
              <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-4 text-primary font-headline font-semibold hover:bg-primary/5 rounded-full transition-colors">
                <span className="material-symbols-outlined">play_circle</span>
                Watch the Process
              </button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" alt="Dental hygiene tools" src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000" />
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <span className="font-headline font-bold text-on-surface">Precision Care</span>
              </div>
              <p className="text-sm text-on-surface-variant">Our guided biofilm therapy ensures 100% plaque removal with zero discomfort.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="font-headline text-4xl font-bold mb-4">The Aura Advantage</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Beyond just a clean feeling, professional hygiene is the foundation of long-term systemic health.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
            <motion.div variants={fadeUp} className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative">
              <div className="z-10">
                <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">sanitizer</span>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-4">Complete Plaque & Tartar Removal</h3>
                <p className="text-on-surface-variant text-lg max-w-md">Hardened tartar cannot be removed by brushing alone. Our ultrasonic technology gently dissolves deposits in minutes.</p>
              </div>
              <img className="absolute bottom-0 right-0 w-1/2 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" alt="Clean teeth base" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1000" />
            </motion.div>
            <motion.div variants={fadeUp} className="md:col-span-4 bg-primary text-white p-10 rounded-[2rem] flex flex-col justify-center">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">air</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Instantly Fresher Breath</h3>
              <p className="text-white/80">Eliminate the bacteria responsible for chronic bad breath at their source, deep within the periodontal pockets.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="md:col-span-4 bg-tertiary-container text-white p-10 rounded-[2rem]">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">biotech</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Early Detection</h3>
              <p className="text-white/80">Our specialists identify microscopic issues before they require invasive and expensive treatments.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="md:col-span-8 bg-white p-10 rounded-[2rem] border border-outline-variant/10 flex items-center gap-10">
              <div className="hidden lg:block w-1/3">
                <img className="rounded-2xl shadow-lg" alt="Dentist working" src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" />
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">Whole-Body Health</h3>
                <p className="text-on-surface-variant">Preventive hygiene reduces the risk of heart disease and diabetes by managing systemic inflammation levels.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Vertical Path */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative lg:sticky top-32">
              <h2 className="font-headline text-5xl font-extrabold mb-8 tracking-tight">The 4-Step <br/><span className="text-secondary">Sanctuary</span> Protocol</h2>
              <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">We've reimagined the dental cleaning as a restorative ritual. No scraping sounds, no discomfort—just pure clinical excellence.</p>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt="Clinic interior" src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000" />
              </div>
            </motion.div>
            <div className="space-y-16 py-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex gap-8 group">
                <motion.div variants={fadeUp} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-bold flex items-center justify-center shrink-0 z-10">1</div>
                  <div className="w-0.5 h-full bg-outline-variant/30 mt-4"></div>
                </motion.div>
                <div className="pb-8">
                  <h4 className="font-headline text-2xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">Comprehensive Examination</h4>
                  <p className="text-on-surface-variant text-lg">We begin with a high-definition digital scan and manual probe to map your gum health and identify any areas of concern.</p>
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex gap-8 group">
                <motion.div variants={fadeUp} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-bold flex items-center justify-center shrink-0 z-10">2</div>
                  <div className="w-0.5 h-full bg-outline-variant/30 mt-4"></div>
                </motion.div>
                <div className="pb-8">
                  <h4 className="font-headline text-2xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">Airflow & Ultrasonic Scaling</h4>
                  <p className="text-on-surface-variant text-lg">Using warm water and fine erythritol powder, we remove biofilm and stains gently. It's the most effective, painless cleaning technology available today.</p>
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex gap-8 group">
                <motion.div variants={fadeUp} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-bold flex items-center justify-center shrink-0 z-10">3</div>
                  <div className="w-0.5 h-full bg-outline-variant/30 mt-4"></div>
                </motion.div>
                <div className="pb-8">
                  <h4 className="font-headline text-2xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">Micro-Polishing</h4>
                  <p className="text-on-surface-variant text-lg">We use a gentle clinical-grade paste to smooth the tooth surface, making it harder for new plaque to adhere and giving you that signature "silk" feel.</p>
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex gap-8 group">
                <motion.div variants={fadeUp} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-bold flex items-center justify-center shrink-0 z-10">4</div>
                </motion.div>
                <div className="pb-8">
                  <h4 className="font-headline text-2xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">Fluoride Treatment</h4>
                  <p className="text-on-surface-variant text-lg">A final protective layer of concentrated fluoride or calcium phosphate is applied to remineralize your enamel and provide lasting protection.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-headline text-4xl font-bold text-center mb-16">Frequently Asked Questions</motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeUp} className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <button onClick={() => toggleFaq(0)} className="w-full flex justify-between items-center text-left focus:outline-none">
                <span className="font-headline text-xl font-bold">How often should I clean my teeth?</span>
                <motion.span animate={{ rotate: activeFaq === 0 ? 135 : 0 }} transition={{ duration: 0.3 }} className="material-symbols-outlined text-primary transform origin-center">add</motion.span>
              </button>
              <AnimatePresence>
                {activeFaq === 0 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-4 text-on-surface-variant leading-relaxed">For most patients, we recommend a professional cleaning every 6 months. However, for those with a history of gum disease or rapid tartar buildup, every 3-4 months may be advised to maintain optimal health.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <button onClick={() => toggleFaq(1)} className="w-full flex justify-between items-center text-left focus:outline-none">
                <span className="font-headline text-xl font-bold">Does it hurt?</span>
                <motion.span animate={{ rotate: activeFaq === 1 ? 135 : 0 }} transition={{ duration: 0.3 }} className="material-symbols-outlined text-primary transform origin-center">add</motion.span>
              </button>
              <AnimatePresence>
                {activeFaq === 1 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-4 text-on-surface-variant leading-relaxed">Not at Clinical Serenity. Our Airflow technology uses temperature-controlled water and ultra-fine particles, eliminating the "scraping" sensation associated with traditional dental cleanings.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-primary p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Your Journey to a <br/>Luminous Smile Begins Here</h2>
            <p className="text-white/80 text-xl max-w-2xl mb-12">Experience the difference of a sanctuary-grade cleaning. Appointments available as soon as this week.</p>
            <button onClick={() => onOpenModal('Professional Dental Hygiene & Deep Cleaning')} className="bg-white text-primary px-6 md:px-12 py-5 rounded-full font-headline font-extrabold text-xl hover:scale-105 transition-transform shadow-xl active:scale-95">
              Schedule Your Cleaning
            </button>
            <div className="mt-12 flex items-center gap-8 grayscale opacity-50 contrast-150">
              <span className="text-white font-bold tracking-widest text-sm uppercase">Trusted by 10k+ Patients</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
