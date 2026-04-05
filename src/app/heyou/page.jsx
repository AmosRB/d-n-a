// src/app/heyou/page.jsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// מערך צילומי המסך של HeYou מתוך תיקיית public/HeYou
const screenshots = [
  { src: 'Screenshot_20260302_193627.jpg', alt: 'HeYou - סריקת רדאר' },
  { src: 'Screenshot_20260302_194327.jpg', alt: 'HeYou - משתמשים בסביבה' },
  { src: 'Screenshot_20260302_193616.jpg', alt: 'HeYou - זירת עסק' },
  { src: 'Screenshot_20260302_194359.jpg', alt: 'HeYou - בקשת צ\'אט' },
  { src: 'Screenshot_20260302_194250.jpg', alt: 'HeYou - צ\'אט פעיל' },
];

export default function HeYouAppPage() {
  return (
    <div className="bg-[#0C0C27] text-white min-h-screen font-sans antialiased" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ----- Header Section ----- */}
        <header className="text-center py-10 sm:py-16">
          <div className="flex justify-center items-center mb-8 relative">
            {/* אפקט הילה מאחורי הלוגו */}
            <div className="absolute w-40 h-40 bg-orange-500 rounded-full blur-[80px] opacity-30"></div>
            <div className="absolute w-40 h-40 bg-purple-600 rounded-full blur-[80px] opacity-30 translate-x-10"></div>
            
            <Image
              src="/HeYou/logo.png"
              alt="HeYou App Logo"
              width={180}
              height={180}
              className="rounded-3xl shadow-2xl shadow-orange-500/20 border-2 border-white/10 relative z-10"
              priority
            />
          </div>
          
          <div className="flex flex-col items-center justify-center mt-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 pb-2">
              HeYou
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mt-4 max-w-2xl font-light">
              הרדאר החברתי שלך. תגלה מי נמצא סביבך ברגע זה, תתחבר לעסקים מקומיים ותתחיל לשוחח בלייב.
            </p>
          </div>
        </header>

        {/* ----- Main Content Section ----- */}
        <main className="max-w-4xl mx-auto py-10">
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-orange-400 border-b-2 border-orange-800/50 pb-2">
              מה זה בעצם HeYou?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              האפליקציה שמשנה את הדרך שבה אנחנו מכירים אנשים במרחב הפיזי. 
              במקום להחליק ימינה או שמאלה על פרופילים רחוקים, HeYou מאפשרת לך לראות מי נמצא ממש עכשיו סביבך - בבר, בכנס, או באוניברסיטה.
              בעזרת טכנולוגיית בלוטות' מתקדמת וסריקת QR של זירות עסקיות, נוצרת רשת מקומית שמחברת אותך לכאן ולעכשיו.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-purple-400 border-b-2 border-purple-800/50 pb-2">
              איך זה עובד?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center font-bold text-xl ml-4 shadow-lg">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-300">הפעל את הרדאר</h3>
                  <p className="text-lg text-gray-300 mt-2">
                    הגדר כמה זמן תרצה להיות גלוי, הפעל את הרדאר ומיד תוכל לראות על גבי המסך בועות של משתמשים אחרים שנמצאים במרחק מטרים ספורים ממך.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center font-bold text-xl ml-4 shadow-lg">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-300">היכנס לזירת עסק</h3>
                  <p className="text-lg text-gray-300 mt-2">
                    הגעת למסעדה או למסיבה? סרוק את ה-QR של המקום והיכנס אוטומטית למפה הווירטואלית של כל הנוכחים בעסק.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center font-bold text-xl ml-4 shadow-lg">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">שלח HeYou והתחל צ'אט</h3>
                  <p className="text-lg text-gray-300 mt-2">
                    ראית מישהו מעניין? לחץ על הבועה שלו ושלח לו בקשת "HeYou". אם הוא מאשר - נפתח חדר צ'אט מיידי. ברגע שהסשן מסתיים או כשאתם מתרחקים, הצ'אט נמחק לחלוטין לשמירה על פרטיות מקסימלית.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ----- Test QR Section (New) ----- */}
          <section className="mt-16 py-12 px-6 bg-white/5 rounded-3xl border border-cyan-500/30 text-center relative overflow-hidden shadow-2xl shadow-cyan-900/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <h2 className="text-3xl font-semibold mb-4 text-cyan-400">
              מתחם התנסות (Test Venue)
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              כבר הורדתם את האפליקציה? סרקו את הקוד הזה ישירות ממסך המחשב כדי להיכנס לזירה הווירטואלית שלנו ולהתנסות באפליקציה מיד!
              <br/><span className="text-sm text-gray-400 mt-2 block">(מיועד גם לבדיקות של צוותי Apple ו-Google Play)</span>
            </p>
            <div className="flex justify-center">
              <div className="p-4 bg-white rounded-2xl shadow-2xl shadow-cyan-500/40 inline-block relative group">
                <div className="absolute inset-0 border-4 border-cyan-400 rounded-2xl animate-pulse opacity-50"></div>
                <Image
                  src="/dna-qr.jpeg"
                  alt="HeYou Test QR Code"
                  width={250}
                  height={250}
                  className="rounded-xl relative z-10"
                />
              </div>
            </div>
            <p className="text-cyan-300 mt-6 font-medium tracking-wide">
              פתחו את HeYou במכשיר הנייד ולחצו על כפתור הסריקה המרכזי
            </p>
          </section>

        </main>

        {/* ----- Screenshots Section ----- */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-10 text-orange-400">
            הצצה לאפליקציה
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-xl shadow-black/50 border border-white/5 transition-transform hover:scale-105">
                <Image
                  src={`/HeYou/${screenshot.src}`}
                  alt={screenshot.alt}
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ----- Footer & Legal ----- */}
        <footer className="text-center py-10 mt-10 border-t border-gray-800">
          <div className="mb-6 flex justify-center items-center">
            <Link 
              href="https://play.google.com/store/apps/details?id=com.dna.heyou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-purple-500/30 transition-all inline-block"
            >
              הורד עכשיו מ-Google Play
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-6">
            <Link href="/privacy-policy-heyou" className="text-gray-400 hover:text-orange-400 transition-colors underline underline-offset-4">
              מדיניות פרטיות (Privacy Policy)
            </Link>
            <Link href="/terms-of-service-heyou" className="text-gray-400 hover:text-orange-400 transition-colors underline underline-offset-4">
              תנאי שימוש (Terms of Service)
            </Link>
          </div>
          
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} D&A Code Design. כל הזכויות שמורות.
          </p>
        </footer>
        
      </div>
    </div>
  );
}