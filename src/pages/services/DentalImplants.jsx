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

export default function DentalImplants({ onOpenModal }) {
  return (
    <div className="pt-20 bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden bg-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-10">
            <motion.span variants={fadeUp} className="text-primary font-headline font-bold tracking-widest uppercase text-xs mb-4 block">Advanced Restorative Care</motion.span>
            <motion.h1 variants={fadeUp} className="font-headline text-5xl lg:text-7xl font-extrabold text-on-surface tracking-tighter mb-6 leading-tight">
              Precision <span className="text-primary">Dental Implants</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Restore the natural function of your teeth and the brilliance of your smile with our biocompatible implant technology. A permanent solution designed for lifelong confidence.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <button 
                onClick={() => onOpenModal('Dental Implant Consultation')}
                className="primary-button-gradient text-on-primary px-6 md:px-8 py-4 rounded-full font-headline font-bold text-base shadow-lg hover:shadow-xl transition-all"
              >
                Book Your Implant Consultation
              </button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover" alt="Dental implant model" src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&q=80&w=1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-on-surface mb-6">The Gold Standard in Tooth Replacement</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Dental implants are sophisticated titanium posts that act as artificial tooth roots, providing a stable foundation for permanent replacement teeth.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Natural Look & Feel</h3>
              <p className="text-on-surface-variant leading-relaxed">Custom-crafted porcelain crowns match your natural teeth perfectly, restoring your smile's aesthetic and biting force.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">skeleton</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Prevents Bone Loss</h3>
              <p className="text-on-surface-variant leading-relaxed">Unlike bridges, implants stimulate the jawbone, preventing the facial sagging and bone deterioration that follows tooth loss.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">all_inclusive</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Lifetime Durability</h3>
              <p className="text-on-surface-variant leading-relaxed">With proper care, dental implants are a one-time investment designed to last for the rest of your life.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-headline text-3xl lg:text-4xl font-bold text-on-surface mb-16 text-center">Your Journey to a Renewed Smile</motion.h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2"></div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
              <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-headline font-bold text-xl mb-6 z-10 relative shadow-lg">01</div>
                <h4 className="font-headline font-bold text-lg mb-2">Consultation</h4>
                <p className="text-sm text-on-surface-variant px-4">3D imaging and personalized treatment planning with our oral surgeons.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-headline font-bold text-xl mb-6 z-10 relative shadow-lg">02</div>
                <h4 className="font-headline font-bold text-lg mb-2">Placement</h4>
                <p className="text-sm text-on-surface-variant px-4">Minimally invasive placement of the titanium implant post under local anesthesia.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-headline font-bold text-xl mb-6 z-10 relative shadow-lg">03</div>
                <h4 className="font-headline font-bold text-lg mb-2">Healing</h4>
                <p className="text-sm text-on-surface-variant px-4">Osseointegration period where the implant fuses with your jawbone over 3-6 months.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-headline font-bold text-xl mb-6 z-10 relative shadow-lg">04</div>
                <h4 className="font-headline font-bold text-lg mb-2">Final Crown</h4>
                <p className="text-sm text-on-surface-variant px-4">Placement of your custom porcelain crown to complete your permanent new smile.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 primary-button-gradient opacity-95"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-primary mb-6 tracking-tight">Ready to Reclaim Your Smile?</h2>
          <p className="text-on-primary/80 text-xl max-w-2xl mx-auto mb-10">Schedule a comprehensive implant consultation today and take the first step towards a lifetime of confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onOpenModal('Dental Implant Consultation')}
              className="bg-white text-primary px-10 py-4 rounded-full font-headline font-bold text-lg shadow-xl hover:bg-surface-container-low transition-all"
            >
              Book Your Implant Consultation
            </button>
            <a href="tel:5550123456" className="inline-flex items-center justify-center border-2 border-white/30 text-white px-10 py-4 rounded-full font-headline font-bold text-lg hover:bg-white/10 transition-all">
              Call Us: (555) 012-3456
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
