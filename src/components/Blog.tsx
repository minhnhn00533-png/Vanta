import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    category: 'Design',
    title: 'The Blueprint of Absolute Presence',
    image: 'https://images.unsplash.com/photo-1460353581641-37badd4524c6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    category: 'Lifestyle',
    title: 'Exploring the Neon Noir Suburbs',
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    category: 'Engineering',
    title: 'The Science of Aeroflux™ Sole Tech',
    image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&q=80&w=600'
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 px-6 bg-white border-t-2 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
              Lifestyle <br />
              <span className="text-brand-neon" style={{ WebkitTextStroke: '2px black' }}>Logs</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.4em] hover:text-brand-neon border-b-2 border-black pb-2 transition-colors">
            View All Archives
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white brutal-border p-6 hover:bg-black hover:text-white transition-all"
            >
              <div className="h-48 mb-6 overflow-hidden brutal-border grayscale transition-all duration-700 group-hover:grayscale-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-1 bg-brand-neon group-hover:bg-brand-neon"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  {post.category} / 0{post.id}
                </span>
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none mb-6">
                {post.title}
              </h3>
              <div className="flex justify-end">
                <div className="w-10 h-10 bg-brand-neon text-black flex items-center justify-center brutal-border group-hover:bg-white group-hover:border-white transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
