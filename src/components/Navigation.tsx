import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-4 border-b-2 border-black ${
        isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter uppercase italic">
          VANTA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['COLLECTION', 'OUR STORY', 'COMMUNITY', 'ABOUT'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-xs font-bold uppercase tracking-widest hover:text-brand-black/60 transition-colors ${item === 'OUR STORY' ? 'border-b-2 border-black' : ''}`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="hover:text-brand-black/60 transition-colors"><Search size={20} strokeWidth={2.5} /></button>
          <button className="relative hover:text-brand-black/60 transition-colors">
            <ShoppingBag size={20} strokeWidth={2.5} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
          </button>
          <button 
            className="md:hidden hover:text-brand-black/60 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-black z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {['NEW ARRIVALS', 'FOOTWEAR', 'LIFESTYLE', 'ABOUT'].map((item) => (
                <a 
                  key={item} 
                  href="#"
                  className="text-4xl font-display font-bold tracking-tighter hover:text-brand-neon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
              <button className="w-full bg-white text-black py-4 font-bold tracking-widest uppercase">Cart (0)</button>
              <button className="w-full border border-white py-4 font-bold tracking-widest uppercase">Login</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
