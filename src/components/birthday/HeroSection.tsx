import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';

export default function HeroSection(): JSX.Element  {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 text-rose-300">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-rose-300" />
            <Heart className="w-4 h-4 fill-current" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-rose-300" />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-rose-400/80 tracking-[0.3em] text-xs md:text-sm uppercase mb-6"
        >
          A celebration of you
        </motion.p>

        {/* Main title - Her name placeholder */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-800 mb-4 leading-tight"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-rose-400 italic mb-8"
        >
          My Love
        </motion.h2>

        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="relative mx-auto mb-12 group"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-rose-200/50 bg-gradient-to-br from-rose-50 to-amber-50">
            {/* Replace this with her photo */}
            <div className="w-full h-full flex items-center justify-center text-rose-300">
              <div className="text-center p-8">
                {/* <Heart className="w-12 h-12 mx-auto mb-3 fill-current opacity-50" />
                <p className="text-sm tracking-wide">Add her photo here</p> */}
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-rose-200/50 bg-gradient-to-br from-rose-50 to-amber-50 flex items-center justify-center">
                  <img
                    src="/images/hero.JPG"
                    alt="Her"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative ring */}
          <div className="absolute inset-0 -m-4 rounded-full border border-rose-200/50 animate-pulse" />
          <div className="absolute inset-0 -m-8 rounded-full border border-rose-100/30" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-stone-500 text-lg md:text-xl font-light max-w-lg mx-auto leading-relaxed"
        >
          Today, the world celebrates the day you came into it.
          <br />
          <span className="text-rose-400">But I celebrate you every single day.</span>
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 md:bottom-[-20px] left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-rose-300"
        >
          <span className="text-xs tracking-[0.2em] uppercase mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}