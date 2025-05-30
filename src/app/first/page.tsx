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
      const opacity = Math.max(1 - scrollY / 300, 0.2);
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
    { title: "AI מנועי", text: "סוכני בינה מלאכותית לומדים בהתאמה אישית שיעבדו בשבילך מסביב לשעון" },
    { title: "תוספים לדפדפנים", text: "תוספת ידידותית לאוטומציה של פעולות חוזרות בהתאמה אישית לצרכיך" },
  ];

  return (
   <main className="bg-black text-white overflow-x-hidden relative">
  {/* תמונת רקע ראשית תקינה */}
  <div className="relative w-full h-screen overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full -z-0">
      <Image
        src="/DNA3.png"
        alt="DNA Image"
        fill
        style={{ objectFit: "cover", opacity: heroImageOpacity }}
      />
    </div>
  </div>

  {/* כותרת עליונה */}
  <section className="relative w-full h-screen">
    <div className="absolute bottom-12 right-[18vw] z-10 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_#00f0ff] typewriter w-fit mx-auto">
        D&amp;A code design
      </h1>
    </div>
  </section>


      <section className="flex flex-col items-center gap-12 px-6 py-16 relative z-10 pb-32 overflow-hidden">
        {sections.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="relative w-[95vw] max-w-4xl bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg backdrop-blur overflow-hidden"
          >
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
  width={300}
  height={250}
  style={{ objectFit: "contain", width: "100%", height: "auto" }}
/>

                </div>
              )}
            </div>

            {i === 0 && (
              <div className="absolute bottom-0 left-0 p-2">
                <div className="scale-[0.6] max-w-full overflow-hidden">
                  <ConstMetadata3DWord />
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <footer className="fixed bottom-0 left-0 w-full h-36 z-50">
        <div className="h-1/2 w-full bg-transparent" />

        <div className="relative h-1/2 w-full bg-gradient-to-b from-gray-800 to-black text-white text-center text-sm flex justify-center items-center">
          <p className="w-full">ליצירת קשר – 054-3385089 – amosbahar@gmail.com</p>

          <a
            href="https://wa.me/972543385089?text=שלום עמוס, ראיתי את האתר ורציתי ליצור קשר"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute flex items-center gap-2"
            style={{
              right: '25%',
              top: 10,
              transform: 'translateY(-100%)',
              background: 'linear-gradient(to bottom,rgb(145, 76, 206),rgb(37, 8, 37))',
              color: '#f97316',
              fontWeight: 'bold',
              padding: '0.5rem 1.25rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 14px rgba(5, 0, 9, 0.4), 0 6px 20px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(128,0,255,0.6)';
              e.currentTarget.style.transform = 'translateY(-110%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(128,0,255,0.4), 0 6px 20px rgba(0,0,0,0.3)';
              e.currentTarget.style.transform = 'translateY(-100%)';
            }}
          >
            צור קשר
            <Image
              src="/whatsapp.png"
              alt="WhatsApp Icon"
              width={30}
              height={30}
              style={{ opacity: 0.85, transform: 'translateY(-4px)' }}
            />
          </a>

          <a
            href="mailto:amosbahar@gmail.com"
            className="absolute flex items-center gap-2"
            style={{
              left: '10%',
              top: 10,
              transform: 'translateY(-100%)',
              background: 'linear-gradient(to bottom, rgb(17, 81, 177), rgb(15, 22, 54))',
              color: '#f97316',
              fontWeight: 'bold',
              padding: '0.5rem 1.25rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 14px rgba(4, 7, 11, 0.4), 0 6px 20px rgba(22, 9, 9, 0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(64,140,255,0.6)';
              e.currentTarget.style.transform = 'translateY(-110%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 38, 85, 0.4), 0 6px 20px rgba(0,0,0,0.3)';
              e.currentTarget.style.transform = 'translateY(-100%)';
            }}
          >
            שלח מייל
            <Image
              src="/Gmail_Icon.png"
              alt="Mail Icon"
              width={30}
              height={30}
              style={{ opacity: 0.9, transform: 'translateY(-4px)', zIndex: 50, pointerEvents: 'none' }}
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
