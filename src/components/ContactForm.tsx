import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'sneakers',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Contact Data:", formData);
  };

  return (
    <section className="py-24 px-6 bg-black text-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div className="border-l-4 border-brand-neon pl-6">
              <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter">
                Inner <br />
                <span className="text-brand-neon">Circle</span> <br />
                Access
              </h2>
            </div>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md">
              Bạn muốn là người đầu tiên sở hữu những phiên bản giới hạn? Đăng ký thông tin để đội ngũ hỗ trợ của VANTA liên hệ trực tiếp.
            </p>
            
            <div className="grid grid-cols-1 gap-6 pt-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 border-2 border-white/20 flex items-center justify-center group-hover:border-brand-neon transition-colors">
                   <Phone size={20} className="group-hover:text-brand-neon" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Hotline 24/7</p>
                  <p className="text-xl font-bold font-mono tracking-tighter italic">+84 (0) 900 123 456</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 border-2 border-white/20 flex items-center justify-center group-hover:border-brand-neon transition-colors">
                   <Mail size={20} className="group-hover:text-brand-neon" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Support</p>
                  <p className="text-xl font-bold font-mono tracking-tighter italic">HQ@VANTA.SYSTEM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-black p-8 md:p-12 brutal-border shadow-[12px_12px_0px_rgba(204,255,0,1)]">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                    <div className="relative border-b-2 border-black pb-2">
                      <input 
                        type="text" 
                        required
                        placeholder="NGUYEN VAN A"
                        className="w-full bg-transparent outline-none font-bold uppercase tracking-widest text-sm"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Phone Number</label>
                    <div className="relative border-b-2 border-black pb-2">
                      <input 
                        type="tel" 
                        required
                        placeholder="090 123 4567"
                        className="w-full bg-transparent outline-none font-bold tracking-widest text-sm"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Email Protocol</label>
                  <div className="relative border-b-2 border-black pb-2">
                    <input 
                      type="email" 
                      required
                      placeholder="YOU@STREET.NET"
                      className="w-full bg-transparent outline-none font-bold uppercase tracking-widest text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Interest / Segment</label>
                  <select 
                    className="w-full border-2 border-black p-3 font-bold uppercase tracking-widest text-xs focus:bg-brand-neon transition-colors cursor-pointer"
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option value="sneakers">Sneaker Drop (Limited)</option>
                    <option value="apparel">Urban Apparel</option>
                    <option value="event">Community Events</option>
                    <option value="partnership">B2B / Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Mission Notes (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us what you are looking for..."
                    className="w-full border-2 border-black p-4 font-bold tracking-tight text-sm resize-none focus:bg-gray-50 transition-colors"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-black text-white font-black uppercase italic tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-brand-neon hover:text-black transition-all"
                >
                  <Send size={18} />
                  Initiate Request
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 flex flex-col items-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-brand-neon rounded-full flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                   <CheckCircle2 size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-2">Request Processed</h3>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                    Our lab technicians will review your request <br />
                    and contact you via the provided secure lines.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 border-2 border-black font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-colors"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
