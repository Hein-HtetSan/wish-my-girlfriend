import React, { useRef, useEffect, useState } from 'react';
import { Music } from 'lucide-react';

const playlist = [
  // "/Perfect-Ed-Sheeran.m4a",
  // "/All-of-Me.m4a",
  "/in-your-arm.mp3",
];

export default function MusicPlayer(): JSX.Element {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Start as playing
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay on mount and when song changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false)); // Autoplay might be blocked
      }
    }
  }, [currentIndex]);

  // Try to autoplay on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    if (playlist.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % playlist.length);
    } else {
      // If only one song, loop it
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={playlist[currentIndex]}
        autoPlay
        onEnded={handleEnded}
        loop={playlist.length === 1}
      />
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 shadow-xl shadow-rose-300/50 flex items-center justify-center"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <Music className="w-6 h-6 text-white" />
      </button>
    </>
  );
}