import { motion } from 'motion/react';
import { Heart, Plus, Save, TrendingUp } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Stealth-X Gen 2',
    price: '$180',
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1549298913-7d9e02a1d744?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Vanta Runner 01',
    price: '$145',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Urban Glide High',
    price: '$210',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    name: 'Aero Flow Mesh',
    price: '$165',
    tag: 'Limited',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600'
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 px-6 bg-white border-y-2 border-black" id="footwear">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="border-l-4 border-brand-neon pl-6">
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400 mb-2">COLLECTION 24.1</div>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.85] tracking-tighter">
              Trending <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Highlights</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`group flex flex-col p-8 bg-white transition-colors hover:bg-gray-50 border-black ${idx !== products.length - 1 ? 'lg:border-r-2' : ''} ${idx < 2 ? 'md:border-b-2' : ''} ${idx >= 2 && idx < 4 ? 'lg:border-b-0' : ''} ${idx === 1 ? 'lg:border-r-2' : ''} ${idx === 2 ? 'lg:border-r-2' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                {product.tag ? (
                  <span className="bg-black text-brand-neon text-[9px] font-black px-2 py-1 uppercase italic">{product.tag}</span>
                ) : <span />}
                <div className="flex space-x-2">
                   <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                     <Heart size={16} fill="currentColor" className="opacity-20 hover:opacity-100" />
                   </button>
                </div>
              </div>

              <div className="relative aspect-square flex items-center justify-center mb-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="text-center py-4 mb-4">
                <div className="text-[10px] font-black uppercase text-gray-300 mb-1 tracking-widest">X-PRO LINE</div>
                <h3 className="text-xl font-black italic uppercase tracking-tighter">
                  {product.name}
                </h3>
              </div>
              
              <div className="mt-auto flex justify-between items-center pt-6 border-t border-gray-100">
                <span className="text-lg font-black tracking-tight font-mono text-gray-400">{product.price}.00</span>
                <button className="px-5 py-2 bg-black text-brand-neon text-[10px] font-black uppercase hover:bg-brand-neon hover:text-black transition-colors">
                  Quick Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
