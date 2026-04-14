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

export default function RootCanal({ onOpenModal }) {
  return (
    <div className="pt-20 bg-surface text-on-surface">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-low -z-10"></div>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">Root Canal Therapy</motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-on-surface mb-6 max-w-4xl tracking-tight leading-tight">
            Gentle Root Canal Therapy: <span className="text-primary">Save Your Natural Tooth</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            Experience a new standard of dental care. Our advanced, pain-free procedures focus on restorative excellence, saving your teeth from extraction while ensuring absolute comfort.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onOpenModal('Root Canal Therapy')}
              className="bg-primary text-white px-6 md:px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Start Your Recovery
            </button>
            <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-4 text-primary font-bold">
              <span className="material-symbols-outlined">play_circle</span>
              Watch the Experience
            </button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="mt-20 max-w-6xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px] md:h-[600px]">
            <img alt="Modern Dental Clinic" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </motion.div>
      </header>

      {/* Indications Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">When You Need It</motion.h2>
              <motion.p variants={fadeUp} className="text-on-surface-variant mb-12 text-lg">Dental pain shouldn't be ignored. Identifying these symptoms early can be the difference between saving your tooth and requiring an extraction.</motion.p>
              <div className="space-y-8">
                <motion.div variants={fadeUp} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">medical_services</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Persistent Pain</h3>
                    <p className="text-on-surface-variant leading-relaxed">Deep, throbbing pain that persists through daily activities or wakes you at night.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">thermostat</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Temperature Sensitivity</h3>
                    <p className="text-on-surface-variant leading-relaxed">Sharp discomfort when consuming hot or cold foods that lingers long after contact.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">emergency</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Swollen Gums</h3>
                    <p className="text-on-surface-variant leading-relaxed">Localized swelling or tenderness near the affected tooth, often indicating an infection.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
                <img alt="Dentist Examining Patient" className="rounded-2xl w-full object-cover aspect-square mb-6" src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000" />
                <div className="flex justify-between items-center px-2">
                  <div>
                    <p className="text-sm font-semibold text-primary">Diagnostic Excellence</p>
                    <p className="text-xs text-on-surface-variant">Precision imaging and expert care</p>
                  </div>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">A Sanctuary of Comfort</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-on-surface-variant max-w-2xl mx-auto text-lg">We've reimagined the dental experience to eliminate anxiety through technology and empathy.</motion.p>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          <motion.div variants={fadeUp} className="bg-surface-container-lowest p-10 rounded-[2rem] shadow-sm hover:translate-y-[-8px] transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">spa</span>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Focused Calm</h3>
            <p className="text-on-surface-variant leading-relaxed">Quiet treatment rooms with noise-canceling headsets and guided relaxation techniques.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-surface-container-lowest p-10 rounded-[2rem] shadow-sm hover:translate-y-[-8px] transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">biotech</span>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Advanced Anesthesia</h3>
            <p className="text-on-surface-variant leading-relaxed">Precision delivery systems for complete numbness without the traditional "sting" of needles.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-surface-container-lowest p-10 rounded-[2rem] shadow-sm hover:translate-y-[-8px] transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">magnification_small</span>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Modern Techniques</h3>
            <p className="text-on-surface-variant leading-relaxed">Microscopic endodontics allow for faster recovery and exceptionally high success rates.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/3">
              <div className="relative lg:sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Step-by-Step Journey</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">Transparency is key to trust. Here is how we restore your tooth's health through our specialized three-phase approach.</p>
                <div className="mt-12 hidden lg:block">
                  <div className="p-6 bg-primary/5 rounded-2xl border-l-4 border-primary">
                    <p className="font-bold text-primary italic mb-2">"Modern root canals are as routine and painless as a standard filling."</p>
                    <p className="text-sm font-semibold">— Dr. Elena Vance, Senior Endodontist</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="lg:w-2/3">
              <div className="relative space-y-20">
                <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-secondary-fixed-dim/30 -z-0"></div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-20">
                  <motion.div variants={fadeUp} className="relative flex gap-10 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md z-10 ring-8 ring-surface-container-low group-hover:scale-110 transition-transform">
                      <span className="text-primary font-bold">01</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl font-bold mb-3">Cleaning the Canal</h3>
                      <p className="text-on-surface-variant leading-relaxed mb-6">The infected pulp is carefully removed using specialized instruments. This eliminates the source of infection and instantly relieves pressure.</p>
                      <img alt="Cleaning Tool" className="w-full h-64 object-cover rounded-2xl shadow-sm" src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000" />
                    </div>
                  </motion.div>
                  <motion.div variants={fadeUp} className="relative flex gap-10 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md z-10 ring-8 ring-surface-container-low group-hover:scale-110 transition-transform">
                      <span className="text-primary font-bold">02</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl font-bold mb-3">Filling & Sealing</h3>
                      <p className="text-on-surface-variant leading-relaxed mb-6">The empty canal is thoroughly disinfected and filled with a biocompatible material called gutta-percha, preventing future bacterial intrusion.</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-32 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                        </div>
                        <div className="h-32 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-3xl">health_metrics</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeUp} className="relative flex gap-10 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md z-10 ring-8 ring-surface-container-low group-hover:scale-110 transition-transform">
                      <span className="text-primary font-bold">03</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl font-bold mb-3">Restorative Crowning</h3>
                      <p className="text-on-surface-variant leading-relaxed mb-6">To ensure long-term durability, the tooth is protected with a custom-crafted porcelain crown that matches your natural smile perfectly.</p>
                      <img alt="Restorative Crowning" className="w-full h-64 object-cover rounded-2xl shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden bg-primary text-white text-center shadow-2xl">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-container rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to Find Relief?</h2>
              <p className="text-xl text-primary-fixed-dim max-w-2xl mx-auto mb-12 font-medium">Don't wait for the pain to worsen. Secure your tooth's future with our specialist-led care today.</p>
              <button 
                onClick={() => onOpenModal('Root Canal Therapy')}
                className="bg-white text-primary px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                Book a Pain-Free Consultation
              </button>
              <p className="mt-8 text-sm text-primary-fixed-dim/80">Available for Emergency Walk-ins & Scheduled Appointments</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
