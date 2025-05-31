"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const sections = [
    { title: "אתרי רשת חכמים", text: "תכנון, עיצוב והקמת אתרי רשת מתוחכמים מותאמים לכל סוגי המסכים (רספונסיביים), עם יכולת הטמעת פונקציותת מתקדמות, ניהול מאגרי מידע וממשקי ניהול פנימיים." },
    { title: "אפליקציות לטלפון", text: "ביחד אתכם נתכנן ונבנה אפליקציה לטלפון התפורה למידותיכם - אוטומאציה ונגישות מכל מכשיר לניהול העסק או לשיפור בחיי היום יום" },
    { title: "אפליקציות לניהול וייעול", text: "אפליקציות לייעול, שמירה וארגון מידע בסביבה מקומית או בענן. אפליקציות לניהול מלאי, משימות, לוחות זמנים, מעקב ביצוע ושליטה תפורים לצרכיך לפי מידה" },
    { title: "פיצ'רים חכמים", text: "הוספת ממשקי ניהול, אפליקציות חכמות, תוספים לדפדפנים בהתאמה אישית, כרטיסי ביקור דיגיטליים ועוד" },
    { title: "AI מנועי", text: "סוכני בינה מלאכותית לומדים בהתאמה אישית שיעבדו בשבילך מסביב לשעון" },
    { title: "פיתוחים מבוססי בלוקצ'יין", text: "אפליקציות תקשורת בלתי חדירות מאובטחות בלוקצ'יין. אפליקציות לניהול ושמירת מידע עם אבטחת בלוקצ'יין ועוד פיתוחים שמנצלים את היתרונות הרבים של הבלוקצ'יין" },
  ];

  const buttonStyles = [
    { from: "#001060", to: "#0208f3", innerFrom: "#302fff", innerTo: "#02045b" },
    { from: "#460151", to: "#cc00eb", innerFrom: "#79028b", innerTo: "#4d0159" },
    { from: "#013c63", to: "#0393f2", innerFrom: "#0087be", innerTo: "#04446f" },
    { from: "#843d00", to: "#f67200", innerFrom: "#d46300", innerTo: "#7c3a01" },
    { from: "#600307", to: "#d60008", innerFrom: "#b20202", innerTo: "#650101" },
    { from: "#165002", to: "#37d900", innerFrom: "#289f00", innerTo: "#134702" },
  ];

  const [ready, setReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const smoothScrollY = useRef(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  useEffect(() => setReady(true), []);

  useEffect(() => {
    if (!ready) return;
    const update = () => {
      smoothScrollY.current += (window.scrollY - smoothScrollY.current) * 0.1;
      setScrollY(smoothScrollY.current);
      const sectionHeight = window.innerHeight * 2;
      const newIndex = Math.floor((smoothScrollY.current + sectionHeight / 2) / sectionHeight) % sections.length;
      setActiveIndex(newIndex);
      requestAnimationFrame(update);
    };
    update();
  }, [ready]);

  if (!ready) return null;

  const sectionHeight = window.innerHeight * 2;
  const allSections = [...sections, ...sections, ...sections];
  const fullHeight = allSections.length * sectionHeight;

  const scrollToSection = (idx) => {
    const sectionOffset = idx * sectionHeight + sectionHeight * 1.5;
    window.scrollTo({ top: sectionOffset, behavior: "smooth" });
  };

  const offset = isMobile ? 0 : (activeIndex !== null ? -(activeIndex * 7.5) + 21 : 0);

  return (
    <main className="bg-black text-white overflow-x-hidden relative" style={{ height: `${fullHeight}px` }}>
      <div className="fixed top-20 right-[40vw] z-[1001] text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_#00f0ff] typewriter w-fit mx-auto">
          D&amp;A code design
        </h1>
      </div>

      <div
        className="fixed right-2 sm:right-20 z-[1001] flex flex-col items-center gap-4 sm:gap-[1.75rem] mt-20 sm:mt-40 transition-transform duration-500"
        style={{ transform: `translateY(${offset}em)` }}
      >
        {sections.map((section, idx) => {
          const style = buttonStyles[idx];
          const isActive = scrollY > 50 && activeIndex === idx;
          const isHovered = hoveredIdx === idx;

          const outerGradient = isActive || isHovered
            ? `linear-gradient(to bottom right, ${style.from}, ${style.to})`
            : `linear-gradient(to bottom right, rgb(0, 0, 0), rgb(61, 61, 61))`;

          const innerGradient = isActive || isHovered
            ? `linear-gradient(to bottom right, ${style.innerFrom}, ${style.innerTo})`
            : `linear-gradient(to bottom right, #2a2a2a, rgb(0, 0, 0))`;

          return (
            <div
              key={idx}
              onClick={() => scrollToSection(idx)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-[20%] flex items-center justify-center transition-all duration-300 cursor-pointer border-2"
              style={{
                backgroundImage: outerGradient,
                borderColor: isActive || isHovered ? "rgba(80, 52, 23, 0.73)" : "#313130",
                boxShadow: isActive || isHovered ? "0 0 45px rgba(255,180,100,0.6)" : "none",
                transform: isActive || isHovered ? "scale(1.05)" : "scale(1)"
              }}
            >
              <div
                className="w-[80%] h-[80%] rounded-[20%] flex items-center justify-center text-center p-2 transition-all duration-300 border-2"
                style={{
                  backgroundImage: innerGradient,
                  borderColor: isActive || isHovered ? "rgba(163, 107, 16, 0.6)" : style.to,
                  boxShadow: isActive || isHovered
                    ? "inset 0 4px 6px rgba(0,0,0,0.6), inset 0 -3px 5px rgba(255,255,255,0.08)"
                    : "inset 0 0 2px rgba(255,255,255,0.05)"
                }}
              >
                <p className="text-[#fffde6] text-[0.55rem] sm:text-[0.75rem] font-bold leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] whitespace-pre-line">
                  {section.title.replace(" ", "\n")}
                </p>
              </div>
            </div>
          );
        })}
      </div>


      {/* סקשנים */}
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

    {/* פוטר קבוע */}
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
    right: isMobile ? '10px' : '25%',
    top: 10,
    transform: 'translateY(-100%)',
    background: 'linear-gradient(to bottom,rgb(145, 76, 206),rgb(37, 8, 37))',
    color: '#f97316',
    fontWeight: 'bold',
    padding: isMobile ? '0.25rem 0.5rem' : '0.5rem 1.25rem',
    fontSize: isMobile ? '0.75rem' : '1rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 14px rgba(5, 0, 9, 0.4), 0 6px 20px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
  }}
  onMouseEnter={(e) => {
    if (!isMobile) {
      e.currentTarget.style.boxShadow = '0 6px 20px rgba(128,0,255,0.6)';
      e.currentTarget.style.transform = 'translateY(-110%)';
    }
  }}
  onMouseLeave={(e) => {
    if (!isMobile) {
      e.currentTarget.style.boxShadow = '0 4px 14px rgba(128,0,255,0.4), 0 6px 20px rgba(0,0,0,0.3)';
      e.currentTarget.style.transform = 'translateY(-100%)';
    }
  }}
>
  צור קשר
  <Image src="/whatsapp.png" alt="WhatsApp Icon" width={30} height={30} style={{ opacity: 0.85, transform: 'translateY(-4px)' }} />
</a>


          <a
            href="mailto:amosbahar@gmail.com"
            className="absolute flex items-center gap-2"
            style={{
              left: isMobile ? '10px' : '10%',
              top: 10,
              transform: 'translateY(-100%)',
              background: 'linear-gradient(to bottom, rgb(17, 81, 177), rgb(15, 22, 54))',
              color: '#f97316',
              fontWeight: 'bold',
              padding: isMobile ? '0.25rem 0.5rem' : '0.5rem 1.25rem',
              fontSize: isMobile ? '0.75rem' : '1rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 14px rgba(4, 7, 11, 0.4), 0 6px 20px rgba(22, 9, 9, 0.3)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => {
    if (!isMobile) {
      e.currentTarget.style.boxShadow = '0 6px 20px rgba(128,0,255,0.6)';
      e.currentTarget.style.transform = 'translateY(-110%)';
    }
  }}
  onMouseLeave={(e) => {
    if (!isMobile) {
      e.currentTarget.style.boxShadow = '0 4px 14px rgba(128,0,255,0.4), 0 6px 20px rgba(0,0,0,0.3)';
      e.currentTarget.style.transform = 'translateY(-100%)';
    }
     }}
          >
            שלח מייל
            <Image src="/Gmail_Icon.png" alt="Mail Icon" width={30} height={30} style={{ opacity: 0.9, transform: 'translateY(-4px)', zIndex: 50, pointerEvents: 'none' }} />
          </a>
        </div>
      </footer>
    </main>
  );
}
