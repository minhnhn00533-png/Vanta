import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Play } from 'lucide-react';

export default function LeadCapture() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => console.log("Email captured:", email), 500);
    }
  };

  return (
    <section className="py-24 px-6 bg-white" id="lifestyle">
      <div className="max-w-7xl mx-auto">
        <div className="brutal-border grid grid-cols-1 md:grid-cols-2 bg-black text-white overflow-hidden">
          
          <div className="p-10 md:p-20 md:border-r-2 border-white/20 flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-6">
              Join the<br />
              <span className="text-brand-neon">Community</span>
            </h2>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-8 leading-relaxed max-w-sm">
              Subscribe for early access and get <span className="text-brand-neon font-black italic">20% OFF</span> your first acquisition.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex border-b-2 border-brand-neon pb-2 group">
                  <input 
                    type="email" 
                    required
                    placeholder="YOUR@EMAIL.COM"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent text-sm font-bold w-full outline-none placeholder:text-gray-600 tracking-widest uppercase"
                  />
                  <button type="submit" className="text-brand-neon font-black uppercase text-[10px] tracking-[0.3em] whitespace-nowrap hover:text-white transition-colors">
                    Claim Discount
                  </button>
                </div>
                
                <div className="flex items-center gap-2 text-[9px] text-gray-500 uppercase font-black">
                  <input type="checkbox" className="accent-brand-neon" id="terms" required />
                  <label htmlFor="terms">I ACCEPT THE SYSTEM TERMS AND PRIVACY PROTOCOLS</label>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-4 text-brand-neon"
              >
                <CheckCircle2 size={32} />
                <span className="text-xl font-black italic uppercase tracking-tighter">Transmission Successful</span>
              </motion.div>
            )}
          </div>

          <div className="p-10 md:p-20 flex flex-col justify-center items-center text-center bg-brand-gray/5 relative overflow-hidden">
            {/* Visual background element */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black italic uppercase text-white/10 select-none">FILM</div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 bg-brand-neon rounded-full flex items-center justify-center text-black mb-6 group cursor-pointer border-2 border-black shadow-[4px_4px_0px_rgba(255,255,255,0.1)]"
            >
               <Play className="w-10 h-10 transform group-hover:translate-x-1 transition-transform" fill="currentColor" />
            </motion.div>
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] mb-2">Watch Brand Story</span>
            <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest italic tracking-tighter">Curiosity driven film — 01:45</p>
          </div>
        </div>
      </div>
    </section>
  );
}
