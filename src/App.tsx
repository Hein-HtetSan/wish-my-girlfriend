import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import PasscodePage from './pages/Passcode';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            unlocked
              ? <Navigate to="/main" replace />
              : <PasscodePage onSuccess={() => setUnlocked(true)} />
          }
        />
        <Route
          path="/main"
          element={
            unlocked
              ? <Home />
              : <Navigate to="/" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}