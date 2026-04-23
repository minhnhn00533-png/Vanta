/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import LeadCapture from './components/LeadCapture';
import Storytelling from './components/Storytelling';
import BlogSection from './components/Blog';
import TestimonialSection from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show lead capture popup after 5 seconds to intrigue first-time visitors
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('vanta_popup_seen');
      if (!hasSeenPopup) {
        setShowPopup(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('vanta_popup_seen', 'true');
  };

  return (
    <div className="relative selection:bg-brand-neon selection:text-brand-black">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Social Proof / Logo Bar */}
        <div className="py-12 border-y-2 border-black bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-100 grayscale contrast-125">
              {['VOGUE', 'HYPEBEAST', 'GQ', 'COMPLEX', 'HIGHSNOBIETY'].map((partner) => (
                <span key={partner} className="text-2xl font-black tracking-tighter uppercase italic text-black">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Storytelling />
        
        <ProductGrid />
        
        <LeadCapture />
        
        <BlogSection />
        
        <TestimonialSection />
      </main>

      <Footer />

      {/* Leads Generation Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="absolute inset-0 bg-white/20 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-black text-white brutal-border p-10 md:p-16 shadow-[20px_20px_0px_rgba(204,255,0,0.4)] overflow-hidden"
            >
              <button 
                onClick={closePopup}
                className="absolute top-6 right-6 text-brand-neon hover:text-white transition-colors"
              >
                <X size={32} strokeWidth={3} />
              </button>

              <div className="relative">
                <div className="inline-flex items-center gap-2 text-brand-neon font-black text-[10px] uppercase tracking-[0.4em] mb-8 border-b-2 border-brand-neon">
                  [ TRANSMISSION RECEIVED ]
                </div>
                
                <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-[0.8] mb-6">
                  Access the <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '2.5px #CCFF00' }}>Archive</span>
                </h2>
                
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed mb-10">
                  Get instant access to limited releases and obtain <span className="text-brand-neon font-black italic">20% OFF</span> your first acquisition.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="border-b-2 border-brand-neon pb-2">
                    <input 
                      type="email" 
                      placeholder="YOUR@DISTRICT.COM"
                      className="w-full bg-transparent text-sm font-black tracking-widest outline-none placeholder:text-gray-800 uppercase"
                    />
                  </div>
                  <button className="bg-brand-neon text-black w-full py-5 font-black uppercase tracking-widest hover:bg-white transition-all duration-300 border-2 border-black">
                    Join The Collective
                  </button>
                  <button 
                    onClick={closePopup}
                    className="text-[9px] text-gray-600 font-black uppercase tracking-[0.3em] hover:text-brand-neon transition-colors"
                  >
                    DISCONNECT PROTOCOL
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
