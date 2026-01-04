import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cake, Gift, PartyPopper, Stars, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const wishes = [
  "May all your dreams come true",
  "May this year bring you endless joy",
  "May love surround you always",
  "May every day be as beautiful as you",
  "May happiness follow you everywhere",
];


export default function BirthdayWishes(): JSX.Element {
  const [currentWish, setCurrentWish] = useState(0);
  // Always cycle wishes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWish((prev) => (prev + 1) % wishes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Celebration particles - always animate */}
      <>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: 0, 
              x: Math.random() * window.innerWidth,
              scale: 0
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [0, -400 - Math.random() * 400],
              rotate: Math.random() * 720,
              scale: [0, 1, 1, 0.5]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="fixed pointer-events-none z-50"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="text-rose-400 fill-rose-400" style={{ width: 12 + Math.random() * 16 }} />
            ) : i % 3 === 1 ? (
              <Stars className="text-amber-400" style={{ width: 12 + Math.random() * 16 }} />
            ) : (
              <Sparkles className="text-rose-300" style={{ width: 12 + Math.random() * 16 }} />
            )}
          </motion.div>
        ))}
      </>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-rose-100/50 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <Cake className="w-16 h-16 md:w-20 md:h-20 text-rose-400 mx-auto" />
          </motion.div>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-800 mb-4">
            Happy Birthday!
          </h2>

          <p className="text-stone-500 text-lg md:text-xl font-light max-w-xl mx-auto mb-12">
            On this beautiful day, the whole universe celebrates you.
            Make a wish, blow the candles, and let the magic begin!
          </p>
        </motion.div>

        {/* Wish display */}
        {/* Wish display - always show */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWish}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="font-serif text-2xl md:text-3xl text-rose-400 italic">
              "{wishes[currentWish]}"
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Next Wish button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button
            onClick={() => setCurrentWish((prev) => (prev + 1) % wishes.length)}
            className="group relative px-12 py-8 text-lg rounded-full font-light tracking-wider transition-all duration-500 overflow-hidden bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white shadow-xl shadow-rose-200"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Gift className="w-5 h-5" />
              Next Wish
            </span>
            {/* Button glow effect */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white/20 rounded-full blur-xl"
            />
          </Button>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20"
        >
          <p className="text-stone-400 font-light">
            Here's to another year of making beautiful memories together.
          </p>
          <p className="font-serif text-2xl text-rose-400 mt-4">
            I love you more than words can say ♥
          </p>
        </motion.div>
      </div>
    </section>
  );
}