import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-surface-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-8 py-20 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-2xl font-headline font-extrabold text-primary">Aura Dental Collective</div>
          <p className="text-on-surface-variant leading-relaxed">
            Redefining modern dental excellence through clinical expertise and a sanctuary-inspired patient experience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-on-surface">Explore</h5>
            <ul className="space-y-2 text-on-surface-variant text-sm">
              <li><Link to="/#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/#why-us" className="hover:text-primary transition-colors">Before & After</Link></li>
              <li><Link to="/#doctors" className="hover:text-primary transition-colors">Meet Doctors</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-on-surface">Support</h5>
            <ul className="space-y-2 text-on-surface-variant text-sm">
              <li><Link to="/#" className="hover:text-primary transition-colors">Patient Portal</Link></li>
              <li><Link to="/#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <h5 className="font-headline font-bold text-on-surface">Newsletter</h5>
          <p className="text-on-surface-variant text-sm">Join our newsletter for oral health tips and clinic updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 bg-surface border-0 rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" 
            />
            <button className="bg-primary text-on-primary p-3 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-container py-8 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-headline font-medium text-on-surface-variant uppercase tracking-widest">
          <span>© 2024 Aura Dental Collective. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
