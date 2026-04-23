import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, MoveRight } from 'lucide-react';

const stories = [
  {
    id: 'origin',
    title: 'The Darkroom Origin',
    brief: 'Born in the shadows of the urban jungle, VANTA was created to redefine the boundary between performance and aesthetic.',
    content: 'We started in a small workshop with one goal: to create a shoe that feels invisible yet commands attention. Using proprietary light-absorbing materials, our first prototype set the standard for what we call "Absolute Presence". Our mission is to equip the modern restless soul with gear that moves as fast as their ambition.',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'philosophy',
    title: 'Kinetic Equilibrium',
    brief: 'Movement is not just physics; it is a philosophy. Our sneakers are engineered for constant transition.',
    content: 'The Vanta philosophy centers on the idea of kinetic equilibrium—the perfect balance between energy return and stability. Every stitch and structural element is stress-tested in simulated high-density urban environments to ensure that whether you are sprinting to a meeting or exploring a rooftop, your stride is effortless.',
    image: 'https://images.unsplash.com/photo-1515555233972-7cd73fe8af3a?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Storytelling() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 border-l-8 border-black pl-8">
          <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400 mb-2">FRAGMENT SELECTION</div>
          <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
            Our <span className="text-brand-neon" style={{ WebkitTextStroke: '2px black' }}>Story</span> <br />
            Fragment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-2 border-black overflow-hidden">
          {stories.map((story) => (
            <div key={story.id} className="group bg-white p-10 flex flex-col justify-between hover:bg-gray-50 transition-colors">
              <div>
                <div className="text-xs font-black text-brand-neon bg-black inline-block px-2 py-1 mb-6 italic">
                  FRAGMENT_0{stories.indexOf(story) + 1}
                </div>
                
                <h3 className="text-4xl font-black italic uppercase tracking-tight mb-4 leading-none">
                  {story.title}
                </h3>
                <p className="text-gray-500 uppercase text-[11px] font-bold tracking-widest leading-relaxed mb-8 max-w-md">
                  {story.brief}
                </p>
              </div>

              <div className="relative aspect-video overflow-hidden border-2 border-black mb-8">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <button 
                onClick={() => setExpandedId(expandedId === story.id ? null : story.id)}
                className="w-full py-4 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-brand-neon hover:text-black transition-colors"
              >
                {expandedId === story.id ? 'Collapse Fragment' : 'Expand Story'}
              </button>

              <AnimatePresence>
                {expandedId === story.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-8 text-black/70 text-sm leading-relaxed border-t border-black/5 mt-4 italic font-medium">
                      {story.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
