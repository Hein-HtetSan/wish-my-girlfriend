import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

// Anniversary and birthday dates
const anniversaryDate = new Date('2024-08-23');
const birthdayDate = new Date('2004-01-04');
const today = new Date();

function getDaysSinceAnniversary() {
  const diff = today.getTime() - anniversaryDate.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getAge() {
  let age = today.getFullYear() - birthdayDate.getFullYear();
  const m = today.getMonth() - birthdayDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdayDate.getDate())) {
    age--;
  }
  return age;
}

const timelineItems = [
  {
    icon: Star,
    title: "The Day We Met",
    description: `
      We met for the first time at the Computer Training Center in October 2023. I was the quiet, introverted guy with a mask on my face, trying to blend into the background. She, with her brave and playful spirit, tried to catch a glimpse of my face and gently encouraged me to open up. That day, behind my mask, I found someone who truly saw me. It was the start of something special—two lives crossing paths in a classroom, not knowing how much we would come to mean to each other.
    `,
    date: "Dec 2023"
  },
  {
    icon: Heart,
    title: "When I Knew",
    description: `
      As we spent more time together at the training center in 2024, sharing meals, laughter, and dreams, I realized how much she meant to me. Her bravery, fun spirit, and lovely smile brightened every day. Somewhere between teaching, learning, and growing together, my heart found its home. We made promises, and every moment since has been a beautiful chapter in our story.
    `,
    date: "2024"
  },
  {
    icon: Sparkles,
    title: "Our Journey",
    description: `
      Our journey together has been filled with laughter, learning, and love. From the first day we met at the computer training center, to sharing meals, late-night talks, and making promises for the future, every moment has been a new adventure. We’ve supported each other’s dreams, grown through challenges, and created memories that make every ordinary day extraordinary. With you, every step feels lighter, every joy is doubled, and every challenge is easier to face. Our story is just beginning, and I can’t wait to see where our journey takes us next.
    `,
    date: "23 Aug 2024"
  }
];

export default function StoryTimeline(): JSX.Element  {
  return (
    <section className="py-32 px-6 relative">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24 max-w-2xl mx-auto"
      >
        <span className="text-rose-400/60 tracking-[0.3em] text-xs uppercase">Our Story</span>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-4 mb-6">
          The Chapters of Us
        </h2>
        <p className="text-stone-500 font-light leading-relaxed">
          Every love story is beautiful, but ours is my favorite.
          Here are the moments that made us, us.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-rose-200 to-transparent hidden md:block" />

        {timelineItems.map((item, index) => {
          const Icon = item.icon;
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-24 last:mb-0 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Content */}
              <div className={`flex-1 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} text-center`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl shadow-rose-100/50 border border-rose-100/50"
                >
                  <span className="text-rose-300 text-sm tracking-widest">{item.date}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-stone-800 mt-2 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center shadow-lg shadow-rose-200/50 my-8 md:my-0 z-10"
              >
                <Icon className="w-6 h-6 text-rose-500" />
              </motion.div>

              {/* Empty space for other side */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}