import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnquiryModal({ isOpen, onClose, context }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setMessage(`I am interested in learning more about ${context || 'your services'}. Please contact me to schedule a consultation.`);
    }
  }, [isOpen, context]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-surface-variant/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="relative w-full max-w-lg bg-surface-container-lowest rounded-3xl clinical-shadow overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-headline font-bold text-on-surface">
                  {isSuccess ? 'Request Sent' : 'Book Consultation'}
                </h3>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h4 className="text-xl font-headline font-bold text-on-surface mb-2">Thank you!</h4>
                  <p className="text-on-surface-variant">Our concierge team will contact you shortly to confirm your appointment.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-headline font-bold text-sm text-on-surface-variant mb-2">Full Name</label>
                    <input 
                      required
                      type="text"
                      className="w-full bg-surface border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all font-body text-on-surface"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-headline font-bold text-sm text-on-surface-variant mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel"
                      className="w-full bg-surface border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all font-body text-on-surface"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block font-headline font-bold text-sm text-on-surface-variant mb-2">Message Context</label>
                    <textarea 
                      required
                      rows="3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-surface border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all font-body text-on-surface resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full hero-gradient text-on-primary py-5 rounded-full font-headline font-bold text-lg active:scale-[0.98] transition-all clinical-shadow mt-2"
                  >
                    Confirm Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
