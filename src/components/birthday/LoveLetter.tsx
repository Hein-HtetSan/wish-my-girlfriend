import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Heart } from 'lucide-react';

export default function LoveLetter(): JSX.Element  {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-rose-50/30" />
      
      {/* Floating hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            x: [0, 10, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className="absolute pointer-events-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
        >
          <Heart 
            className="text-rose-200/30" 
            style={{ 
              width: 12 + i * 4, 
              height: 12 + i * 4,
              fill: 'currentColor'
            }} 
          />
        </motion.div>
      ))}

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Feather className="w-8 h-8 text-rose-300 mx-auto mb-4" />
          <span className="text-rose-400/60 tracking-[0.3em] text-xs uppercase">From My Heart</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4">
            A Letter For You
          </h2>
        </motion.div>

        {/* Letter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Paper effect */}
          <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl shadow-rose-200/30 transform rotate-1" />
          <div className="absolute inset-0 bg-white rounded-3xl shadow-xl shadow-rose-100/20 transform -rotate-1" />
          
          {/* Letter content */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg border border-rose-100/30">
            {/* Decorative corner */}
            <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-rose-100 rounded-tr-2xl" />
            <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-rose-100 rounded-bl-2xl" />

            <div className="space-y-6 text-stone-600 font-light leading-loose">
              <p className="font-serif text-xl text-rose-400 italic">
                My Dearest,
              </p>
              
              <p>
                From the moment our paths crossed, my world has been brighter, my heart lighter,
                and my dreams so much sweeter. Every day with you is a new adventure - filled with
                laughter, warmth, and the kind of happiness I never knew was possible.
              </p>
              
              <p>
                You are brave, fun, and your smile lights up even the cloudiest days. 
                I cherish every memory we’ve made, from our first meeting at the 
                computer center to every promise, every meal, every quiet moment 
                we’ve shared. You inspire me to be my best self, and I am endlessly 
                grateful for your love and support.
              </p>
              
              <p>
                Thank you for being my partner, my confidant, and my best friend. 
                I look forward to a lifetime of making memories with you, 
                growing together, and loving you more deeply with each passing day.
              </p>
              
              <p>
                Every moment with you is a gift. Every smile you share with me is a treasure.
                Today and always, I celebrate you.
              </p>

              <div className="pt-8 text-right">
                <p className="font-serif text-xl text-stone-700 italic">
                  Forever & Always Yours,
                </p>
                <p className="font-serif text-2xl text-rose-400 mt-2">
                  Your Name ♥
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}