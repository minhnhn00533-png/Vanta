import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden bg-white">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-black">
        
        {/* Left Col: Brand Hero */}
        <div className="lg:col-span-5 brutal-border-r p-10 flex flex-col justify-between bg-white relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mb-2 underline underline-offset-4">EST. 2024 / SEOUL</div>
            <h1 className="text-6xl md:text-7xl font-black italic uppercase leading-[0.85] tracking-tighter">
              Move<br />Your Way<br />With<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Vanta</span>
            </h1>
            <p className="max-w-xs text-sm font-medium leading-tight text-gray-600">
              Engineered for the streets. Designed for the individual. Join the movement of fearless exploration.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-brand-neon hover:text-black transition-colors">
                Read More
              </button>
              <button className="px-10 py-5 border-2 border-black font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-colors">
                Explore Now
              </button>
            </div>
          </motion.div>
          
          {/* Story Preview */}
          <motion.div 
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-brand-neon p-6 border-2 border-black mt-12 lg:mt-0"
          >
            <p className="text-xs font-black uppercase tracking-tighter mb-1">Brand Philosophy</p>
            <p className="text-[11px] leading-tight font-medium">Vanta is more than footwear. It's a statement of inclusivity and raw energy. We believe every stride should feel like a revolution.</p>
          </motion.div>
        </div>

        {/* Right Side: Visual & Interactive area */}
        <div className="lg:col-span-7 flex flex-col h-full bg-black">
          <div className="h-full relative overflow-hidden group">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1200" 
              alt="VANTA Hero" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Tech Labels */}
            <div className="absolute top-1/4 right-8 bg-brand-neon text-black px-4 py-2 brutal-border font-black text-xs uppercase italic tracking-tighter">
              AEROFLUX™ TECHNOLOGY
            </div>
            <div className="absolute bottom-1/4 left-8 bg-black text-white px-4 py-2 border border-white/20 font-black text-xs uppercase italic tracking-tighter">
              URBAN STEALTH SYSTEM
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bar Simulation */}
      <div className="h-10 border-b-2 border-black flex items-center justify-between px-8 bg-white overflow-hidden">
        <div className="text-[9px] font-bold uppercase tracking-widest opacity-50 flex gap-12">
          <span>VANTA LABORATORY</span>
          <span className="hidden md:inline">SYSTEM: ACTIVE</span>
          <span className="hidden md:inline">COORD: 37.5665° N, 126.9780° E</span>
        </div>
        <div className="flex space-x-6 text-[9px] font-black uppercase italic animate-pulse text-brand-neon bg-black px-2">
          NEW DROP: X-PRO LITE
        </div>
      </div>
    </section>
  );
}
