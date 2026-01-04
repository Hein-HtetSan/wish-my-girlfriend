import React, { useState } from 'react';

// The correct passcode is the anniversary date: 2024-08-23
const CORRECT_PASSCODE = '2024-08-23';

export default function PasscodePage({ onSuccess }: { onSuccess: () => void }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === CORRECT_PASSCODE) {
      setError('');
      onSuccess();
    } else {
      setError('That date is not correct. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 via-amber-50 to-rose-200 px-4 relative overflow-hidden">
      {/* Decorative floating bubbles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-rose-200 rounded-full blur-2xl opacity-40 animate-pulse" style={{transform:'translateY(-50%)'}} />
      {/* Centered card */}
      <div className="bg-white/90 p-8 rounded-3xl shadow-2xl shadow-rose-200/40 max-w-sm w-full border border-rose-100/60 relative z-10 flex flex-col items-center">
        <h1 className="text-3xl font-serif font-bold text-center mb-2 text-rose-500 tracking-wide mb-4">Anniversary Passcode</h1>
        <p className="text-stone-500 text-center text-sm max-w-xs mb-4 font-light">Please enter our anniversary date to unlock this page.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <label className="text-stone-600 text-base font-serif font-medium" htmlFor="anniversary-date">Anniversary Date</label>
          <input
            id="anniversary-date"
            type="date"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="border border-rose-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white text-stone-700 shadow-sm transition-all font-serif text-lg"
            placeholder="YYYY-MM-DD"
            autoFocus
            max="2024-12-31"
          />
          {error && <div className="text-red-500 text-sm text-center font-serif">{error}</div>}
          <button
            type="submit"
            className="bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white rounded-full px-4 py-2 font-semibold transition shadow-lg shadow-rose-200/40 mt-2 font-serif text-lg"
          >
            Unlock
          </button>
        </form>
      </div>
      <style>{`
        .animate-float {
          animation: floatY 3.5s ease-in-out infinite;
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </div>
  );
}
