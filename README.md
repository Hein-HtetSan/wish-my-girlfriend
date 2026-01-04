# Wish My Girlfriend React Project

This is a React project set up to create a personalized website for wishing your girlfriend.

## Project Structure

```
wish-my-girlfriend
├── public
│   ├── index.html
│   └── images/
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── birthday/
│   │   │   ├── BirthdayWishes.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── LoveLetter.tsx
│   │   │   ├── MusicPlayer.tsx
│   │   │   ├── PhotoGallery.tsx
│   │   │   ├── QualitiesSection.tsx
│   │   │   └── StoryTimeline.tsx
│   │   └── ui/
│   │       └── button.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── hooks
│   │   └── useFetch.ts
│   ├── styles
│   │   └── globals.css
│   ├── utils
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   └── assets
│       └── fonts/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
└── README.md
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd wish-my-girlfriend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Add your images and music:**
   - Place images in `public/images/` and reference them as `/images/your-image.jpg` in your components.
   - Place music files in `public/` and reference them as `/your-music.mp3` in your music player.

## Features

- Custom hooks for data fetching
- Modular components for better maintainability
- Global styles with Tailwind CSS for consistent design
- TypeScript for type safety
- Music player with playlist and autoplay
- Photo gallery and hero section with image support

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see.

## License

This project is licensed under the MIT License.