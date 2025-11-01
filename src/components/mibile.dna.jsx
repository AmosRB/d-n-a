// src/components/mibile.dna.jsx

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // --- 1. הוספנו ייבוא ל-Link ---

export default function MobileApp() {
  const router = useRouter(); // router נשאר, למקרה שנצטרך אותו בעתיד
  
  const sections = [
    {
      title: "אתרי רשת חכמים",
      text: [
        "תכנון, עיצוב והקמת אתרי רשת מתוחכמים מותאמים לכל סוגי המכשירים.",
        "תכנון והטמעת פונקציות יעודיות לפי דרישה.",
        "ניהול מאגרי מידע וממשקי ניהול פנימיים."
      ]
    },
    {
      title: "אפליקציות לטלפון", // זהו אינדקס 1
      text: [
        "אפליקציה לטלפון התפורה לעסק או לחיי היומיום שלכם.",
        "הוספת אפליקציה שתתחבר עם ממשקי הניהול שלכם.",
        "לאוטומאציה ונגישות מכל מכשיר."
      ]
    },
    {
      title: "אפליקציות לניהול ושליטה",
      text: [
        "אפליקציות לייעול, שמירה וארגון מידע בסביבה מקומית או בענן.",
        "אפליקציות לניהול מלאי, משימות ולוחות זמנים.",
        "מערכות מעקב על ביצוע וממשקי שליטה תפורים לצרכיך לפי מידה."
      ]
    },
    {
      title: "פיצ'רים חכמים",
      text: [
        "הוספת ממשקי ניהול לאפליקציות קיימות.",
        "שילוב אפליקציות ניהול ושליטה חכמות.",
        "תוספים לדפדפנים בהתאמה אישית.",
        "כרטיסי ביקור דיגיטליים ועוד."
      ]
    },
    {
      title: "AI מנועי",
      text: [
        "סוכני בינה מלאכותית לומדים.",
        "בוטים בהתאמה אישית שיעבדו בשבילך מסביב לשעון."
      ]
    },
    {
      title: "פיתוחים מבוססי בלוקצ'יין",
      text: [
        " אפליקציות תקשורת בלתי חדירות מאובטחות בלוקצ'יין.",
        "אפליקציות לניהול ושמירת מידע עם אבטחת בלוקצ'יין.",
        "עוד פיתוחים שמנצלים את היתרונות הרבים של הבלוקצ'יין."
      ]
    },
  ];

  const buttonStyles = [
    { from: "#001060", to: "#0208f3", innerFrom: "#302fff", innerTo: "#02045b" },
    { from: "#460151", to: "#cc00eb", innerFrom: "#79028b", innerTo: "#4d0159" },
    { from: "#013c63", to: "#0393f2", innerFrom: "#0087be", innerTo: "#04446f" },
    { from: "#843d00", to: "#f67200", innerFrom: "#d46300", innerTo: "#7c3a01" },
    { from: "#600307", to: "#d60008", innerFrom: "#b20202", innerTo: "#650101" },
    { from: "#165002", to: "#37d900", innerFrom: "#289f00", innerTo: "#134702" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionHeight = window.innerHeight;
      const numSections = sections.length; 

      const newOpacity = scrollTop === 0 ? 1 : 0.2;
      setHeroOpacity(newOpacity);

      let newActiveIndex;
      if (scrollTop === 0) {
        newActiveIndex = null;
      } else {
        let baseIndex = Math.floor((scrollTop + sectionHeight / 2) / sectionHeight);

        if (baseIndex >= numSections) {
            newActiveIndex = 0; 
        } else if (baseIndex < 0) {
            newActiveIndex = numSections - 1; 
        } else {
            newActiveIndex = baseIndex;
        }
      }
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);

    const initialScroll = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setActiveIndex(null);
    };
    window.addEventListener('load', initialScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('load', initialScroll);
    };
  }, [sections.length]);

  return (
    <main className="bg-black text-white overflow-x-hidden relative" style={{ minHeight: `${sections.length * 100}vh` }}>
      {/* רקע */}
      <div
        className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none transition-opacity duration-700"
        style={{ opacity: heroOpacity }}
      >
        <Image
          src={isMobile ? "/DNA3-mobile.png" : "/DNA3.png"}
          alt="DNA Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-[3000] bg-transparent backdrop-blur-sm flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_#00f0ff] w-fit mx-auto">
          D&amp;A code design
        </h1>
      </div>

      {/* כותרת מתחת ל-NAVBAR */}
        <div className="fixed top-0 left-0 w-full z-[3000] bg-transparent backdrop-blur-sm flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_#00f0ff] w-fit mx-auto">
          D&amp;A code design
        </h1>

        <div className="fixed top-16 sm:top-24 left-1/2 transform -translate-x-1/2 z-[1001] text-center">
          <h1 className="text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-[0_0_15px_#00f0ff] typewriter w-fit mx-auto">
            Coding a new world of possibilities
          </h1>
        </div>
      <button
        onClick={() => {
          setActiveIndex(null); // מסתיר את הסקשנים
          setHeroOpacity(1);    // רקע שקוף לגמרי
          window.scrollTo({ top: 0, behavior: "smooth" }); // גלילה לראש הדף
        }}
        className="text-slate-500 text-xl sm:text-4xl md:text-4xl focus:outline-none"
        style={{ fontWeight: 'bold' }}
      >
        ☰
      </button>

      </div>

      {/* כפתורי ניווט (צד ימין) */}
      <div className="fixed z-[1001] flex flex-col items-center gap-4 sm:gap-[1.75rem]" style={{ top: "18vh", right: "8px" }}>
        {sections.map((section, idx) => {
          const style = buttonStyles[idx];
          const isActive = activeIndex === idx;
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
              // --- 2. כאן התיקון בלוגיקת הלחיצה של הכפתור הצידי ---
              onClick={() => {
                // הסרנו את התנאי המיוחד. כל הכפתורים פועלים אותו דבר:
                // פותחים את החלון המרחף וגוללים אליו.
                setActiveIndex(idx);
                window.scrollTo({
                  top: idx * window.innerHeight,
                  behavior: "smooth"
                });
              }}
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
                <p className="text-[#fffde6] text-[0.55rem] sm:text-[0.75rem] font-bold leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-center whitespace-normal">
                  {section.title === "מנועי AI" ? "AI" : section.title.replace(" ", "\n")}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- 3. כאן התיקון העיקרי בסקשנים הסטטיים --- */}
      <div
        className="fixed top-0 left-0 w-full h-screen z-10 flex items-center justify-center"
        style={{ transform: 'translateX(-34px)' }} 
      >
        {sections.map((item, index) => {
          // זיהוי הסקשן הספציפי
          const isPhoneAppsSection = item.title === "אפליקציות לטלפון";

          // זה הסגנון של החלון המרחף עצמו
          const modalStyle = {
            width: "70vw",
            maxWidth: "90vw",
            maxHeight: "80vh",
            transition: "opacity 1s ease, box-shadow 0.6s ease",
            opacity: activeIndex === index ? 1 : 0,
            pointerEvents: activeIndex === index ? "auto" : "none",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(15, 23, 42, 1)",
            border: "4px solid #f97316",
            borderRadius: "1rem",
            padding: "1.5rem",
            boxShadow: activeIndex === index
              ? "0 0 120px rgba(255, 223, 150, 0.9), 0 0 40px rgba(255, 163, 50, 0.8)"
              : "none",
          };

          // זה התוכן הפנימי של החלון המרחף
          const modalContent = (
            <>
              <h2 className="text-center text-3xl font-bold mb-4">{item.title}</h2>
              <div
                dir="rtl"
                className="text-right text-base leading-relaxed overflow-y-auto"
                style={{
                  lineHeight: "1.75",
                  maxHeight: "calc(80vh - 6rem)",
                  width: "100%",
                }}
              >
                {item.text.map((sentence, sIdx) => (
                  <div key={sIdx} className="flex items-start mb-2 last:mb-0">
                    <span
                      className="w-2 h-2 rounded-full inline-block mt-[0.65rem] flex-shrink-0"
                      style={{
                        backgroundColor: '#00bcd4',
                        marginLeft: '0.5rem' 
                      }}
                    />
                    <span style={{ display: 'block', flexGrow: 1 }}>{sentence}</span> 
                  </div>
                ))}
              </div>
            </>
          );

          // עוטפים את החלון ב-Link אם זה הסקשן הנכון (בדיוק כמו בקובץ הדסקטופ)
          return isPhoneAppsSection ? (
            <Link
              key={index}
              href="/phone-apps"
              style={modalStyle}
              className="cursor-pointer" // נוסיף cursor-pointer כדי שירגיש לחיץ
            >
              {modalContent}
            </Link>
          ) : (
            <div key={index} style={modalStyle}>
              {modalContent}
            </div>
          );
        })}
      </div>

      {/* פוטר */}
      <footer className="fixed bottom-0 left-0 w-full h-36 z-[2000]">
        <div className="h-1/2 w-full bg-transparent" />
        <div className="relative h-1/2 w-full bg-gradient-to-b from-gray-800 to-black text-white text-center text-sm flex justify-center items-center">
          <p className="w-full text-lg flex justify-center items-center gap-2">
            amosbahar@gmail.com
            <span className="w-2 h-2 rounded-full bg-gradient-to-b from-yellow-300 to-orange-500 inline-block" />
            054-3385089
          </p>

          <a
            href="https://wa.me/972543385089?text=שלום עמוס, ראיתי את האתר ורציתי ליצור קשר"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute flex items-center gap-2"
            style={{
              right: isMobile ? '90px' : '25%',
              top: 10,
              transform: 'translateY(-100%)',
              background: 'linear-gradient(to bottom,rgb(145, 76, 206),rgb(37, 8, 37))',
              color: '#f97316',
              fontWeight: 'bold',
              padding: isMobile ? '0.25rem 0.5rem' : '0.5rem 1.25rem',
              fontSize: isMobile ? '0.75rem' : '1rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 14px rgba(5, 0, 9, 0.4), 0 6px 20px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            <Image src="/whatsapp.png" alt="WhatsApp Icon" width={30} height={30} style={{ opacity: 0.85, transform: 'translateY(-4px)' }} />
          </a>

          <a
            href="mailto:amosbahar@gmail.com"
            className="absolute flex items-center gap-2"
            style={{
              left: isMobile ? '10px' : '25%',
              top: 10,
              transform: 'translateY(-100%)',
              background: 'linear-gradient(to bottom, rgb(17, 81, 177), rgb(15, 22, 54))',
              color: '#f97316',
              fontWeight: 'bold',
              padding: isMobile ? '0.25rem 0.5rem' : '0.5rem 1.25rem',
              fontSize: isMobile ? '0.75rem' : '1rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 14px rgba(4, 7, 11, 0.4), 0 6px 20px rgba(22, 9, 9, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            <Image src="/Gmail_Icon.png" alt="Mail Icon" width={30} height={30} style={{ opacity: 0.9, transform: 'translateY(-4px)', zIndex: 50, pointerEvents: 'none' }} />
          </a>
        </div>
      </footer>
    </main>
  );
}