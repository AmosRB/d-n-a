"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const sections = [
    { title: "אתרים רספונסיביים", text: "עיצוב והקמת אתרי רשת מותאמים לכל סוגי המסכים" },
    { title: "אפליקציות לטלפון", text: "תמיד חלמת על אפליקציה משלך - אנחנו נגשים לך את החלום" },
    { title: "אפליקציות לניהול וייעול העסק", text: "ארגון מידע, ניהול מאגרי מידע בענן, אפליקציות להזנת מידע ושליטה תפורים לצרכיך לפי מידה" },
    { title: "פיצ'רים חכמים", text: "הוספת ממשקים ואפליקציות חכמות באתרים קיימים" },
    { title: "AI מנועי", text: "סוכני בינה מלאכותית לומדים בהתאמה אישית שיעבדו בשבילך מסביב לשעון" },
    { title: "תוספים לדפדפנים", text: "תוספת ידידותית לאוטומציה של פעולות חוזרות בהתאמה אישית לצרכיך" },
  ];

  const [ready, setReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const smoothScrollY = useRef(0);
  const [visibleButtons, setVisibleButtons] = useState([]);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const update = () => {
      smoothScrollY.current += (window.scrollY - smoothScrollY.current) * 0.1;
      setScrollY(smoothScrollY.current);

      const sectionHeight = window.innerHeight * 2;
      const newVisible = [];
      const allSections = [...sections, ...sections, ...sections];

      allSections.forEach((_, index) => {
        const sectionOffset = index * sectionHeight;
        const relativeY = smoothScrollY.current - sectionOffset + sectionHeight / 2;
        const progress = relativeY / sectionHeight;
        if (progress >= 0.85 && progress < 0.95) {
          newVisible.push(index % sections.length);
        }
      });

      setVisibleButtons((prev) => {
        const combined = Array.from(new Set([...prev, ...newVisible]));
        return combined.filter((idx) => {
          const sectionOffset = idx * sectionHeight;
          const relativeY = smoothScrollY.current - sectionOffset + sectionHeight / 2;
          const progress = relativeY / sectionHeight;
          return progress >= 0.5;
        });
      });

      requestAnimationFrame(update);
    };

    update();
  }, [ready]);

  if (!ready) return null;

  const sectionHeight = window.innerHeight * 2;
  const allSections = [...sections, ...sections, ...sections];
  const fullHeight = allSections.length * sectionHeight;

  const buttonStyles = [
    {
      from: "#001060",
      to: "#001f9a",
      innerFrom: "#302fff",
      innerTo: "#101043",
    },
    {
      from: "#86198f",
      to: "#4a044e",
      innerFrom: "#f472b6",
      innerTo: "#86198f",
    },
    {
      from: "#155e75",
      to: "#164e63",
      innerFrom: "#67e8f9",
      innerTo: "#155e75",
    },
    {
      from: "#78350f",
      to: "#451a03",
      innerFrom: "#fde68a",
      innerTo: "#78350f",
    },
    {
      from: "#be123c",
      to: "#881337",
      innerFrom: "#fda4af",
      innerTo: "#be123c",
    },
    {
      from: "#4d7c0f",
      to: "#365314",
      innerFrom: "#d9f99d",
      innerTo: "#4d7c0f",
    },
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden relative" style={{ height: `${fullHeight}px` }}>
      <div className="fixed top-20 right-[40vw] z-[1001] text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_#00f0ff] typewriter w-fit mx-auto">
          D&amp;A code design
        </h1>
      </div>

      {/* כפתורים דינאמיים עם עיצוב מקורי */}
      <div className="fixed right-20 z-[1001] flex flex-col items-center gap-[1.75rem] mt-40">
        {visibleButtons.map((idx) => {
          const style = buttonStyles[idx];
          return (
            <div key={idx} className={`w-24 h-24 rounded-[20%] bg-gradient-to-br from-[${style.from}] to-[${style.to}] shadow-[0_0_30px_rgba(255,180,100,0.35)] hover:shadow-[0_0_45px_rgba(255,180,100,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center`}>
              <div className={`w-[80%] h-[80%] rounded-[20%] bg-gradient-to-br from-[${style.innerFrom}] to-[${style.innerTo}] flex items-center justify-center text-center p-2`} style={{ boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.6), inset 0 -3px 5px rgba(255,255,255,0.08)' }}>
                <p className="text-[#fffde6] text-[0.75rem] font-bold leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] whitespace-pre-line">
                  {sections[idx].title.replace(" ", "\n")}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* שאר הקוד נשאר ללא שינוי */}



      {allSections.map((item, index) => {
        const sectionOffset = index * sectionHeight;
        const relativeY = scrollY - sectionOffset + sectionHeight / 2;
        const progress = relativeY / sectionHeight;

        let scale = 0.05;
        let opacity = 0;
        let borderColor = "white";

        if (scrollY > 50) {
          if (progress < 0.85) {
            scale = 0.05 + progress * 1.1176;
            opacity = Math.max(progress * 1.2, 0.05);
          } else if (progress < 0.95) {
            scale = 1;
            opacity = 1;
            borderColor = "#f97316";
          } else {
            const exitProgress = (progress - 0.95) / 0.3;
            scale = 1 + exitProgress * 2;
            opacity = 1 - exitProgress;
          }
        }

        return (
          
          <div
            key={index}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              zIndex: 999 - index,
              borderColor,
            }}
            className="transition-all duration-300 ease-out border-4 w-[44.8vw] h-[36vh] rounded-2xl flex items-center justify-center text-center bg-slate-900 text-white"
          >
     <div className="p-6">
  <h2 className="text-3xl font-bold mb-4 break-words whitespace-normal text-center">{item.title}</h2>
  <p className="text-lg break-words whitespace-normal leading-relaxed text-center">{item.text}</p>
</div>
          </div>
          
        );
      })}
      
      <footer className="fixed bottom-0 left-0 w-full h-36 z-[2000]">
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
