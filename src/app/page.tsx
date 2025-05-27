"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import ConstMetadata3DWord from './components/ConstMetadata3DWord';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [heroImageOpacity, setHeroImageOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 300, 0.2); // יורד עד 20% ונשאר שם
      setHeroImageOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { title: "אתרים רספונסיביים", text: "עיצוב והקמת אתרי רשת מותאמים לכל סוגי המסכים" },
    { title: "אפליקציות לטלפון", text: "תמיד חלמת על אפליקציה משלך - אנחנו נגשים לך את החלום" },
    { title: "אפליקציות לניהול וייעול העסק", text: "ארגון מידע, ניהול מאגרי מידע בענן, אפליקציות להזנת מידע ושליטה תפורים לצרכיל לפי מידה" },
    { title: "פיצ'רים חכמים לאתרים קיימים", text: "הוספת ממשקים ואפליקציות חכמות באתרים קיימים" },
    { title: "   AI מנועי ", text: "סוכני בינה מלאכותית לומדים בהתאמה אישית שיעבדו בשבילך מסביב לשעון" },
    { title: "תוספים לדפדפנים", text: " תוספת ידידותית לאוטומציה של פעולות תוספת ידידותית לאוטומציה של פעולות חוזרות בהתאמה אישית לצרכיך" },
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* תמונה עליונה עם שקיפות משתנה בגלילה */}
      <section className="relative w-full h-screen">
        <Image
          src="/DNA3.png"
          alt="DNA Image"
          fill
          style={{ objectFit: "cover", opacity: heroImageOpacity }}
          className="z-0 transition-opacity duration-300 pointer-events-none"
        />

        <div className="absolute bottom-12 right-[18vw] z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_#00f0ff] typewriter w-fit mx-auto">
            D&amp;A app design
          </h1>
        </div>
      </section>

      {/* תוכן מתגלגל */}
      <section className="flex flex-col items-center gap-12 px-6 py-16">
        {sections.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg backdrop-blur"
          >
            {i === 0 && (
              <div className="relative">
                <div className="absolute top-5 right-60 scale-50">
                  <ConstMetadata3DWord />
                </div>
              </div>
            )}

            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6">
              <div className="flex-1 text-right pr-4">
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>

              {i === 1 && (
                <div className="relative w-full md:w-1/3 h-48 sm:h-64 flex-shrink-0">
                  <Image
                    src="/art1.jpeg"
                    alt="אפליקציות לטלפון"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        <footer className="fixed bottom-0 left-0 w-full py-4 bg-gradient-to-b from-gray-800 to-black text-white text-center text-sm z-50">
          <div className="relative max-w-6xl mx-auto flex justify-center items-center">
            <p className="w-full text-center">ליצירת קשר – 054-3385089 – amosbahar@gmail.com</p>
            <a
              href="https://wa.me/972543385089?text=שלום עמוס,%20ראיתי%20את%20האתר%20ורציתי%20ליצור%20קשר"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-14 right-[18vw] transform translate-y-1/3 
                         bg-gradient-to-b from-purple-600 to-purple-800 
                         text-orange-400 font-bold py-2 px-5 rounded-xl 
                         shadow-[0_4px_14px_rgba(128,0,255,0.4),0_6px_20px_rgba(0,0,0,0.3)] 
                         hover:shadow-[0_6px_20px_rgba(128,0,255,0.6)] 
                         hover:-translate-y-1 transition-all duration-300"
            >
              צור קשר
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
