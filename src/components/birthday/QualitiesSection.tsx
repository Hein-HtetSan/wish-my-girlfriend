import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Sun, Moon, Flower2, Music } from 'lucide-react';

const qualities = [
  {
    icon: Sun,
    title: "Your Light",
    description: `
      The way you illuminate every room you enter, bringing warmth to the coldest days.
    `
  },
  {
    icon: Heart,
    title: `Your Heart`,
    description: `
      So full of love, compassion, and kindness. You make the world a better place.
    `
  },
  {
    icon: Sparkles,
    title: `Your Magic`,
    description: `
    That special something that makes you absolutely irreplaceable and uniquely you.
    `
  },
  {
    icon: Music,
    title: `Your Laugh`,
    description: `
      The most beautiful melody. It echoes in my heart long after you've smiled.
    `
  },
  {
    icon: Moon,
    title: `Your Peace`,
    description: `
      In your arms, I find the calmest silence. You are my home.
    `
  },
  {
    icon: Flower2,
    title: `Your Growth`,
    description: `
      Watching you bloom has been the greatest privilege of my life.
    `
  }
];

export default function QualitiesSection(): JSX.Element  {
  return (
    <section className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-rose-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-100/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 max-w-2xl mx-auto relative z-10"
      >
        <span className="text-rose-400/60 tracking-[0.3em] text-xs uppercase">What I Love</span>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
          Everything About You
        </h2>
        <p className="text-stone-500 font-light leading-relaxed">
          If I had to list every reason I love you, 
          I'd run out of stars to count. But here are just a few...
        </p>
      </motion.div>

      {/* Qualities grid */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {qualities.map((quality, index) => {
            const Icon = quality.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-rose-100/50 shadow-xl shadow-rose-100/20 text-center group"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rose-100 to-amber-50 flex items-center justify-center shadow-inner"
                  >
                    <Icon className="w-7 h-7 text-rose-400 group-hover:text-rose-500 transition-colors" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-serif text-xl text-stone-800 mb-3">
                    {quality.title}
                  </h3>
                  <p className="text-stone-500 font-light leading-relaxed text-sm">
                    {quality.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}