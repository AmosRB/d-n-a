// app/page.js
"use client";

import { useState, useEffect } from 'react';
import MobileApp from '../components/mibile.dna'; // וודא שהנתיב נכון
import HomePage from '../components/desktop.dna'; // וודא שהנתיב נכון

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
      setLoading(false); // ברגע שבודקים בפעם הראשונה, מפסיקים את מצב הטעינה
    };

    // בדיקה ראשונית בעת טעינת הקומפוננטה
    checkMobile();

    // הוספת Event Listener לשינויי גודל חלון
    window.addEventListener('resize', checkMobile);

    // ניקוי Event Listener בעת הסרת הקומפוננטה
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // הצג מצב טעינה כלשהו, או תוכנה שמונעת הבהוב, עד לזיהוי המצב
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '2rem'
      }}>
        Loading...
      </div>
    );
  }

  // ניתוב מותנה בהתאם למצב הנייד
  return isMobile ? <MobileApp /> : <HomePage />;
}