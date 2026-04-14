import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenModal }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    setIsMobileMenuOpen(false); // Close menu if open
    if (isHome) {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Services', path: '/#services' },
    { name: 'Why Choose Us', path: '/#why-us' },
    { name: 'Doctors', path: '/#doctors' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-header shadow-sm shadow-primary/5">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-headline font-extrabold tracking-tight text-primary">
          Aura Dental Collective
        </Link>
        
        {/* Desktop Navbar (hidden on tablet/mobile) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              onClick={(e) => handleNavClick(e, link.path.substring(1))}
              className="text-on-surface-variant font-medium font-headline hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button 
          onClick={onOpenModal}
          className="hidden lg:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-headline font-semibold text-sm hover:opacity-90 transition-all active:scale-95 hero-gradient">
          Book Appointment
        </button>

        {/* Mobile/Tablet Hamburger Toggle */}
        <button 
          className="lg:hidden text-primary p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Slider/Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-surface-container-lowest shadow-2xl border-t border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={(e) => handleNavClick(e, link.path.substring(1))}
                  className="text-xl text-on-surface font-headline font-bold hover:text-primary transition-colors px-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-outline-variant/10">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenModal('General Consultation');
                  }}
                  className="w-full bg-primary text-on-primary px-6 py-4 rounded-xl font-headline font-semibold text-lg hover:opacity-90 transition-all active:scale-95 hero-gradient">
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
