import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    author: 'Leo K.',
    role: 'Urban Runner',
    rating: 5,
    text: "VANTA is the first brand that actually gets the 'all-day' requirement. I wear them to the office and then hit the pavement without missing a beat."
  },
  {
    id: 2,
    author: 'Sarah M.',
    role: 'Creative Director',
    rating: 5,
    text: "The aesthetic is unmatched. It's rare to see such high-performance tech wrapped in such a minimal, beautiful silhouette."
  },
  {
    id: 3,
    author: 'Jax T.',
    role: 'Tech Enthusiast',
    rating: 4,
    text: "The AeroFlux sole is a game changer. It feels like walking on air with the stability of a military boot."
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-24 px-6 bg-gray-50 border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-center md:text-left">
            Verified <span className="text-brand-neon bg-black px-4 not-italic font-black">Members</span>
          </h2>
          <div className="flex items-center gap-1 bg-black text-white px-8 py-4 brutal-border">
            <span className="font-black text-2xl italic tracking-tighter">4.9</span>
            <div className="flex ml-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} fill="#CCFF00" className="text-brand-neon" />
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest ml-6 opacity-40">System Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black bg-black">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`p-10 bg-white hover:bg-brand-neon group transition-colors ${idx !== testimonials.length - 1 ? 'md:border-r border-black' : ''}`}
            >
              <div className="border-l-4 border-black pl-4 mb-8 transition-colors group-hover:border-black">
                <p className="text-lg font-black italic uppercase tracking-tight leading-tight">
                  "{item.text}"
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="black" className="text-black" />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-black brutal-border overflow-hidden p-1">
                   <div className="w-full h-full bg-gray-200" />
                </div>
                <div>
                  <h4 className="font-black italic uppercase tracking-tighter text-sm">{item.author}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
