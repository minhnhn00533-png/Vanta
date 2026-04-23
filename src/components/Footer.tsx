import { Instagram, Twitter, Youtube, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-brand-black border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="text-4xl font-display font-bold tracking-tighter mb-8 italic">
              VAN<span className="text-brand-neon">TA</span>
            </div>
            <p className="text-brand-muted text-xs font-bold uppercase tracking-widest leading-loose mb-8">
              ENGINEERED FOR THE RESTLESS SOUL. DEFINED BY DISRUPTION. BASED IN THE SHADOWS.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, idx) => (
                <button key={idx} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-neon hover:text-black hover:border-brand-neon transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-brand-neon">Archive</h4>
            <ul className="space-y-4">
              {['Footwear', 'Lifestyle', 'Techwear', 'Limited Drops', 'Upcoming'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-brand-neon transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-brand-neon">Information</h4>
            <ul className="space-y-4">
              {['About VANTA', 'Privacy Policy', 'Shipping & Returns', 'Terms of Use', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-brand-neon transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-brand-neon">Stay In Echo</h4>
            <p className="text-xs text-brand-muted font-bold uppercase tracking-widest mb-6">Receive encrypted drops and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="bg-brand-gray border-b border-white/20 p-3 text-[10px] font-bold tracking-widest flex-1 focus:outline-none focus:border-brand-neon transition-colors uppercase"
              />
              <button className="bg-white text-black p-3 hover:bg-brand-neon transition-colors">
                <ArrowUp className="rotate-45" size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
          <p className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} VANTA FOOTWEAR CO. ALL RIGHTS DISRUPTED.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-brand-neon transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
