import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from '@/components/birthday/HeroSection';
import StoryTimeline from '@/components/birthday/StoryTimeline';
import PhotoGallery from '@/components/birthday/PhotoGallery';
import QualitiesSection from '@/components/birthday/QualitiesSection';
import LoveLetter from '@/components/birthday/LoveLetter';
import BirthdayWishes from '@/components/birthday/BirthdayWishes';
import MusicPlayer from '@/components/birthday/MusicPlayer';
import PasscodePage from './Passcode';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [loaded, setLoaded] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-[#FFFBF7] min-h-screen overflow-x-hidden">
      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-rose-100/40 to-transparent blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-5 w-40 h-40 rounded-full bg-gradient-to-br from-amber-100/30 to-transparent blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-rose-200/30 to-transparent blur-2xl"
        />
      </div>

      <main className="relative z-10">
        <HeroSection />
        <StoryTimeline />
        <PhotoGallery />
        <QualitiesSection />
        <LoveLetter />
        <BirthdayWishes />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-rose-300 text-sm tracking-widest"
        >
          Made with endless love ♥
        </motion.div>
      </footer>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
}