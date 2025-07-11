// desktop.dna.jsx
"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HomePage() {
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
      title: "אפליקציות לטלפון",
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
        "אפליקציות תקשורת בלתי חדירות מאובטחות בלוקצ'יין.",
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

  const [ready, setReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const smoothScrollY = useRef(0);
  const lastScrollY = useRef(0);
  const freezeRef = useRef(false);
  const freezeTimeout = useRef(null);
  const [showButtons, setShowButtons] = useState(true);
  const [heroOpacity, setHeroOpacity] = useState(1);
   const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
  if (typeof window !== "undefined") {
    setSectionHeight(window.innerHeight * 2);
  }
}, []);


  useEffect(() => setReady(true), []);

  useEffect(() => {
    if (!ready) return;

    const update = () => {
      const currentY = window.scrollY;
      const directionDown = currentY > lastScrollY.current;
    
      const progress = (smoothScrollY.current % sectionHeight) / sectionHeight;
      const freezeZone = progress > 1.25 && progress < 1.33;

      if (freezeZone && directionDown && !freezeRef.current) {
        freezeRef.current = true;
        freezeTimeout.current = setTimeout(() => {
          freezeRef.current = false;
        }, 1200);
      }

      if (!freezeRef.current) {
        smoothScrollY.current += (window.scrollY - smoothScrollY.current) * 0.1;
        setScrollY(smoothScrollY.current);

        const newIndex = Math.floor(smoothScrollY.current / sectionHeight);
        setActiveIndex(newIndex % sections.length);

        lastScrollY.current = currentY;
      }

      // לוגיקה לשינוי שקיפות הרקע
      if (currentY <= 50) {
        const opacityProgress = currentY / 50;
        setHeroOpacity(1 - (0.8 * opacityProgress));
      } else {
        setHeroOpacity(0.2);
      }


      requestAnimationFrame(update);
    };

    update();
    return () => clearTimeout(freezeTimeout.current);
  }, [ready]);


  const allSections = [...sections, ...sections, ...sections];
  const fullHeight = allSections.length * sectionHeight;
  if (!ready || sectionHeight === 0) return null;




 const scrollToSection = (idx) => {
  const targetProgress = 1.3;
  const offsetY = idx * sectionHeight + sectionHeight * (targetProgress - 0.5);
  window.scrollTo({ top: offsetY, behavior: "smooth" });
};


  const offset = showButtons ? 0 : (activeIndex !== null ? -(activeIndex * 7.5) + 21 : 0);

  return (
    <main className="bg-black text-white overflow-x-hidden relative" style={{ height: `${fullHeight}px` }}>
      {/* תמונת רקע */}
      <div
        className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none transition-opacity duration-700"
        style={{ opacity: heroOpacity }}
      >
        <Image
          src="/DNA3.png" // הנתיב לתמונה שלך
          alt="DNA Background"
          fill // ממלא את כל הדיב
          style={{ objectFit: "cover" }} // מכסה את כל השטח בלי לעוות
          priority // טוען את התמונה בעדיפות גבוהה
        />
      </div>

      {/* NAVBAR שקוף */}
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
    window.scrollTo({ top: 0, behavior: "smooth" }); // גלילה לראש הדף
    setActiveIndex(null);                            // ביטול סקשן פעיל
    setHeroOpacity(1);                               // תמונת רקע במלוא השקיפות
  }}
  className="text-slate-500 text-xl sm:text-3xl md:text-4xl focus:outline-none"
  style={{ fontWeight: 'bold' }}
>
  ☰
</button>

      </div>

      <div
        className="fixed z-[1001] flex flex-col items-center gap-4 sm:gap-[1.75rem] transition-transform duration-500"
        style={{ top: '18vh', right: '5vw', transform: `translateY(${offset}em)` }}
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
                <p className="text-[#fffde6] text-[0.55rem] sm:text-[0.75rem] font-bold leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-center whitespace-normal">
                  {section.title === "מנועי AI"
                    ? "AI"
                    : section.title.replace(" ", "\n")}
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
        let borderColor = "rgba(0, 169, 253, 0)";
        let backgroundColor = "rgba(15, 23, 42, 0)";
        let textOpacity = 0;
        let glow = "";
        let blackBorderOpacity = 0;

        if (scrollY > 50) {
          if (progress < 0.75) {
            scale = 0.05 + progress * 1.1176;
            opacity = Math.max(progress * 1.2, 0.05);
          } else if (progress < 1.35) {
            // שלב 2
            scale = progress >= 1.25 && progress < 1.4 ? 1.1 : 1; // עצירה קלה לקראת הסוף
            opacity = 1;

            // הילה חזקה לרגע קצר בתחילת שלב 2
            if (progress > 0.84 && progress < 0.90) {
              glow = `0 0 120px rgba(255, 200, 50, 1), 0 0 60px rgba(255, 200, 50, 0.85)`;
            } else if (progress >= 0.75 && progress < 1.35) {
              glow = `0 0 60px rgba(255, 240, 150, 0.5)`;
            }

            // מסגרת כתומה הדרגתית
            if (progress < 0.95) {
              const bProgress = (progress - 0.75) / 0.25;
              borderColor = `rgba(249, 115, 22, ${bProgress.toFixed(2)})`;
            } else {
              borderColor = "#f97316";
            }

            // רקע עולה
            if (progress < 1.0) {
              backgroundColor = "rgba(15, 23, 42, 0)";
            } else if (progress < 1.15) {
              const bgProgress = (progress - 1.0) / 0.15;
              backgroundColor = `rgba(15, 23, 42, ${bgProgress.toFixed(2)})`;
            } else {
              backgroundColor = "rgba(15, 23, 42, 1)";
            }

            // טקסט
            if (progress < 1.15) {
              textOpacity = 0;
            } else if (progress < 1.3) {
              const tProgress = (progress - 1.15) / 0.15;
              textOpacity = tProgress;
            } else {
              textOpacity = 1;
            }

            // מסגרת שחורה - לפני ואחרי כתום
            if (progress >= 0.65 && progress <= 1.5) {
              const peak = 1.0;
              blackBorderOpacity = 1 - Math.abs(progress - peak) * 2.3;
              blackBorderOpacity = Math.max(0, Math.min(1, blackBorderOpacity));
            }
          } else {
            const exitProgress = (progress - 1.4) / 0.3;
            scale = 1 + exitProgress * 2;
            opacity = 1 - exitProgress;

            // דעיכת מסגרת
            const borderFade = Math.max(0, 1 - exitProgress * 2);
            borderColor = `rgba(249, 115, 22, ${borderFade.toFixed(2)})`;

            // דעיכת רקע
            const bgFade = Math.max(0, 1 - exitProgress * 1.5);
            backgroundColor = `rgba(15, 23, 42, ${bgFade.toFixed(2)})`;

            // דעיכת טקסט
            textOpacity = Math.max(0, 1 - exitProgress * 2);
          }
        }

        return (
          <div
            key={index}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: `translate(calc(-60% - 0px), -50%) scale(${scale})`,
              opacity,
              zIndex: 999 - index,
            }}
            className="transition-all duration-300 ease-out w-[62vw] max-w-[90vw] sm:w-[44.8vw] h-auto max-h-[80vh] sm:h-[36vh] rounded-2xl flex items-center justify-center text-center p-4 overflow-visible relative"
          >
            {/* ללא מסגרת שחורה */}

            {/* תוכן עם מסגרת כתומה */}
            <div
              style={{
                borderColor,
                backgroundColor,
                boxShadow: glow,
                position: "relative",
                zIndex: 2,
              }}
              className="w-full h-full border-4 rounded-2xl flex items-center justify-center text-white"
            >
              <div className="p-6">
                <h2 className="text-xl sm:text-3xl font-bold mb-4 break-words whitespace-normal text-center">
                  {item.title}
                </h2>
                <p
                  className="text-xs sm:text-base whitespace-pre-line leading-relaxed text-center px-2 sm:px-4"
                  style={{ opacity: textOpacity, direction: 'rtl' }} // הוספת direction: rtl
                >
                  {/* לולאה על המערך text וחלוקה לשורות */}
                  {item.text.map((line, lineIdx) => (
                    <span key={lineIdx} className="flex items-start justify-center">
                      <span
                        className="w-2 h-2 rounded-full inline-block mt-[0.65rem] flex-shrink-0"
                        style={{
                          backgroundColor: '#00bcd4',
                          marginLeft: '0.5rem' // שינוי ל-marginLeft כדי שיופיע מימין לכדור בגלל direction: rtl
                        }}
                      />
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* פוטר קבוע */}
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
              right: '25%',
              top: 10,
              transform: 'translateY(-100%)',
              background: 'linear-gradient(to bottom,rgb(145, 76, 206),rgb(37, 8, 37))',
              color: '#f97316',
              fontWeight: 'bold',
              padding: '0.5rem 1.25rem',
              fontSize: '1rem',
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
            <Image src="/whatsapp.png" alt="WhatsApp Icon" width={30} height={30} style={{ opacity: 0.85, transform: 'translateY(-4px)' }} />
          </a>

          <a
            href="mailto:amosbahar@gmail.com"
            className="absolute flex items-center gap-2"
            style={{
              left: '25%',
              top: 10,
              transform: 'translateY(-100%)',
              background: 'linear-gradient(to bottom, rgb(17, 81, 177), rgb(15, 22, 54))',
              color: '#f97316',
              fontWeight: 'bold',
              padding: '0.5rem 1.25rem',
              fontSize: '1rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 14px rgba(4, 7, 11, 0.4), 0 6px 20px rgba(22, 9, 9, 0.3)',
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
            <Image src="/Gmail_Icon.png" alt="Mail Icon" width={30} height={30} style={{ opacity: 0.9, transform: 'translateY(-4px)', zIndex: 50, pointerEvents: 'none' }} />
          </a>
        </div>
      </footer>
    </main>
  );
}