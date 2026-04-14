import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

export default function Home({ onOpenModal }) {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-headline font-bold text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              The Clinical Sanctuary
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
              Confident Smiles <br/><span className="text-primary">Start Here</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Advanced dental care with modern technology and personalized treatment in a calming atmosphere.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <button 
                onClick={() => onOpenModal('General Consultation')}
                className="hero-gradient text-on-primary px-6 md:px-8 py-4 rounded-full font-headline font-bold text-base clinical-shadow hover:opacity-95 transition-all active:scale-95"
              >
                Book Appointment
              </button>
              <a href="tel:+1234567890" className="bg-surface-container-high text-on-surface-variant px-6 md:px-8 py-4 rounded-full font-headline font-bold text-base hover:bg-surface-container-highest transition-all active:scale-95 inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">call</span>
                Call Now
              </a>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <span className="font-headline font-bold text-on-surface">5★ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">medical_services</span>
                <span className="font-headline font-bold text-on-surface">Certified Dentists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">history</span>
                <span className="font-headline font-bold text-on-surface">10+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[40px] -rotate-3"></div>
            <img alt="Professional Dentist" className="relative w-full aspect-[4/5] object-cover rounded-[40px] clinical-shadow" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface-container-low" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">Elite Dental Services</h2>
            <p className="text-on-surface-variant">We provide a comprehensive range of treatments using the latest clinical advancements.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <Link to="/services/teeth-cleaning" className="block focus:outline-none">
              <motion.div variants={fadeUp} className="bg-surface-container-lowest p-8 rounded-3xl clinical-shadow group hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">clean_hands</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">Teeth Cleaning</h3>
                <p className="text-on-surface-variant leading-relaxed">Professional scaling and polishing to keep your gums healthy and breath fresh.</p>
              </motion.div>
            </Link>

            <Link to="/services/root-canal" className="block focus:outline-none">
              <motion.div variants={fadeUp} className="bg-surface-container-lowest p-8 rounded-3xl clinical-shadow group hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">dentistry</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">Root Canal</h3>
                <p className="text-on-surface-variant leading-relaxed">Painless endodontic therapy to save your natural teeth from deep infections.</p>
              </motion.div>
            </Link>

            <Link to="/services/dental-implants" className="block focus:outline-none">
              <motion.div variants={fadeUp} className="bg-surface-container-lowest p-8 rounded-3xl clinical-shadow group hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">vital_signs</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">Dental Implants</h3>
                <p className="text-on-surface-variant leading-relaxed">Permanent, natural-looking tooth replacements with titanium-grade precision.</p>
              </motion.div>
            </Link>

            <Link to="/services/teeth-whitening" className="block focus:outline-none">
              <motion.div variants={fadeUp} className="bg-surface-container-lowest p-8 rounded-3xl clinical-shadow group hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">Teeth Whitening</h3>
                <p className="text-on-surface-variant leading-relaxed">Instant brightening for a radiant smile using safe, medical-grade gel.</p>
              </motion.div>
            </Link>

            <Link to="/services/braces-aligners" className="block focus:outline-none">
              <motion.div variants={fadeUp} className="bg-surface-container-lowest p-8 rounded-3xl clinical-shadow group hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">grid_view</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">Braces / Aligners</h3>
                <p className="text-on-surface-variant leading-relaxed">Modern orthodontics including invisible aligners for a perfectly aligned bite.</p>
              </motion.div>
            </Link>

            {/* Interactive Card */}
            <motion.div variants={fadeUp} className="bg-primary p-8 rounded-3xl clinical-shadow flex flex-col justify-center hero-gradient text-on-primary group">
              <h3 className="text-2xl font-headline font-bold mb-4">View All Treatments</h3>
              <p className="text-primary-fixed/80 mb-6">Explore our full catalog of dental healthcare solutions.</p>
              <button 
                onClick={() => onOpenModal('Dental Treatments Options')}
                className="w-fit flex items-center gap-2 font-headline font-bold"
              >
                Let's Talk 
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface overflow-hidden" id="why-us">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-6 leading-tight">Patient-First Care <br/>Driven by Technology</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">We've reimagined the dental experience to ensure every visit is comfortable, transparent, and effective.</p>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <motion.div variants={fadeUp} className="md:col-span-2 bg-surface-container-low p-10 rounded-3xl">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-4xl">psychology</span></div>
              <h4 className="text-xl font-headline font-bold mb-3">Experienced Dentists</h4>
              <p className="text-on-surface-variant">Our team brings decades of collective expertise in complex oral surgeries and aesthetics.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="md:col-span-3 bg-surface-container-high p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
              <div>
                <div className="text-primary mb-6"><span className="material-symbols-outlined text-4xl">precision_manufacturing</span></div>
                <h4 className="text-xl font-headline font-bold mb-3">Latest Equipment</h4>
                <p className="text-on-surface-variant">From 3D digital scanning to laser dentistry, we use the most advanced tech available.</p>
              </div>
              <img alt="Dental Equipment" className="w-full md:w-48 aspect-square object-cover rounded-2xl" src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000" />
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-3 bg-secondary text-on-secondary p-10 rounded-3xl">
              <div className="mb-6"><span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span></div>
              <h4 className="text-xl font-headline font-bold mb-3">Pain-Free Treatment</h4>
              <p className="opacity-80">Our specialized sedation and micro-invasive techniques guarantee a virtually painless experience.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="md:col-span-2 bg-surface-container-low p-10 rounded-3xl">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-4xl">payments</span></div>
              <h4 className="text-xl font-headline font-bold mb-3">Affordable Pricing</h4>
              <p className="text-on-surface-variant">Transparent cost structures and flexible payment plans for all major procedures.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-24 bg-surface-container-low" id="doctors">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-surface-container-lowest rounded-[40px] overflow-hidden clinical-shadow grid lg:grid-cols-2"
          >
            <div className="relative min-h-[400px]">
              <img alt="Dr. Sarah Mitchell" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" />
            </div>
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <div className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4">Lead Surgeon & Founder</div>
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">Dr. Sarah Mitchell</h2>
              <div className="flex gap-4 mb-8">
                <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold">BDS, MDS</span>
                <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold">10+ Years Exp</span>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8 italic">
                "I believe every patient deserves a smile that reflects their true personality. Our mission is to combine the warmth of personalized care with the precision of modern clinical technology."
              </p>
              <p className="text-on-surface-variant mb-8">
                Dr. Mitchell specializes in restorative and cosmetic dentistry. She has completed over 2,500 successful procedures and is a fellow of the International Congress of Oral Implantologists.
              </p>
              <button 
                onClick={() => onOpenModal('Consultation with Dr. Sarah Mitchell')}
                className="w-fit text-primary font-headline font-bold flex items-center gap-2 group"
              >
                Meet the Full Team 
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">Transforming Lives</h2>
            <p className="text-on-surface-variant">Experience the difference with our signature cosmetic smile makeovers.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-[32px] overflow-hidden clinical-shadow max-w-4xl mx-auto aspect-[16/9]">
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="relative">
                <img alt="Before Treatment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" />
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white font-headline font-bold text-sm">BEFORE</div>
              </div>
              <div className="relative">
                <img alt="After Treatment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" />
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-primary/80 backdrop-blur-md rounded-full text-white font-headline font-bold text-sm">AFTER</div>
              </div>
            </div>
            <div className="absolute inset-y-0 left-1/2 w-1 bg-white clinical-shadow flex items-center justify-center -translate-x-1/2">
              <div className="w-12 h-12 bg-white rounded-full clinical-shadow flex items-center justify-center text-primary cursor-pointer">
                <span className="material-symbols-outlined">unfold_more</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container-low" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-headline font-bold text-on-surface text-center mb-16">
            Patient Stories
          </motion.h2>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-surface-container-lowest p-10 rounded-[32px] clinical-shadow">
              <div className="flex text-primary mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8 italic">"The most relaxed I've ever felt in a dentist's chair. Dr. Sarah explained everything so clearly, and the results are amazing."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img alt="Patient Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1000" />
                </div>
                <div>
                  <div className="font-headline font-bold text-on-surface">Emily Roberts</div>
                  <div className="text-sm text-on-surface-variant">Cosmetic Patient</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-surface-container-lowest p-10 rounded-[32px] clinical-shadow">
              <div className="flex text-primary mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8 italic">"Incredible technology. I had a dental implant procedure and it was virtually painless. Highly recommend Aura Dental."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img alt="Patient Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&q=80&w=1000" />
                </div>
                <div>
                  <div className="font-headline font-bold text-on-surface">James Wilson</div>
                  <div className="text-sm text-on-surface-variant">Implant Patient</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-surface-container-lowest p-10 rounded-[32px] clinical-shadow">
              <div className="flex text-primary mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8 italic">"The hygiene standards here are top-notch. It feels more like a spa than a clinic. My whole family now comes here."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img alt="Patient Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000" />
                </div>
                <div>
                  <div className="font-headline font-bold text-on-surface">Linda Thompson</div>
                  <div className="text-sm text-on-surface-variant">Family Dentistry</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-12 px-6 md:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-7xl mx-auto hero-gradient rounded-[40px] p-12 lg:p-24 text-center text-on-primary"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Book Your Appointment Today</h2>
          <p className="text-primary-fixed/80 text-xl max-w-2xl mx-auto mb-12">Start your journey to a healthier, brighter smile. We offer convenient hours and same-day emergency appointments.</p>
          <button 
            onClick={() => onOpenModal('General Appointment')}
            className="bg-surface-container-lowest text-primary px-10 py-5 rounded-full font-headline font-extrabold text-lg clinical-shadow hover:bg-surface transition-all active:scale-95"
          >
            Schedule My Visit
          </button>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-surface" id="contact">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-4xl font-headline font-bold text-on-surface mb-8">Get In Touch</motion.h2>
              <motion.p variants={fadeUp} className="text-on-surface-variant text-lg mb-12">Have questions or ready to schedule? Contact our friendly concierge team.</motion.p>
              
              <div className="space-y-8 mb-12">
                <motion.div variants={fadeUp} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Phone</h4>
                    <a href="tel:+1234567890" className="text-on-surface-variant hover:text-primary transition-colors">+1 (234) 567-890</a>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeUp} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Address</h4>
                    <p className="text-on-surface-variant">123 Clinical Way, Sanctuary District, Beverly Hills, CA 90210</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeUp} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">Hours</h4>
                    <p className="text-on-surface-variant">Mon-Fri: 9AM - 7PM | Sat: 10AM - 3PM</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden clinical-shadow h-64 grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-on-surface-variant/20">map</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-surface-container-low p-10 rounded-[40px]"
            >
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onOpenModal('General Message Form'); }}>
                <div>
                  <label className="block font-headline font-bold text-sm text-on-surface-variant mb-2">Full Name</label>
                  <input type="text" className="w-full bg-surface-container-lowest border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block font-headline font-bold text-sm text-on-surface-variant mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-surface-container-lowest border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="+1 (000) 000-0000" />
                </div>
                <div>
                  <label className="block font-headline font-bold text-sm text-on-surface-variant mb-2">How can we help?</label>
                  <textarea rows="4" className="w-full bg-surface-container-lowest border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Briefly describe your dental needs..."></textarea>
                </div>
                <button type="submit" className="w-full hero-gradient text-on-primary py-5 rounded-full font-headline font-bold text-lg active:scale-[0.98] transition-all clinical-shadow">
                  Send Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center clinical-shadow hover:scale-110 active:scale-90 transition-all z-40">
        <svg fill="currentColor" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.52c1.54.914 3.12 1.395 4.709 1.396 5.403 0 9.799-4.396 9.802-9.799 0-2.617-1.02-5.076-2.871-6.928-1.851-1.852-4.31-2.871-6.927-2.871-5.404 0-9.8 4.397-9.802 9.8 0 1.756.463 3.472 1.34 4.982l-1.003 3.664 3.754-.984zm11.367-10.125c-.252-.127-1.491-.736-1.722-.821-.232-.085-.4-.127-.568.127-.168.252-.649.821-.796.99-.147.168-.294.19-.546.063-.252-.127-1.066-.393-2.03-1.254-.75-.669-1.257-1.495-1.404-1.747-.147-.252-.016-.388.11-.513.113-.113.252-.294.378-.442.127-.147.169-.252.252-.421s.042-.316-.021-.442c-.063-.127-.568-1.37-.779-1.876-.205-.494-.413-.427-.568-.435-.147-.006-.316-.008-.483-.008-.168 0-.442.063-.673.316s-.884.863-.884 2.103c0 1.24.904 2.44 1.03 2.61.127.168 1.779 2.716 4.31 3.805.602.259 1.072.414 1.439.531.605.192 1.156.165 1.591.1.485-.072 1.491-.61 1.701-1.2s.211-1.094.147-1.2c-.063-.105-.232-.168-.483-.295z"></path>
        </svg>
      </a>
    </div>
  );
}
