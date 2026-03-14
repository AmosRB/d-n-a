// src/app/privacy-policy-heyou/page.jsx
"use client";

import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicyHeYou() {
  return (
    <div className="bg-[#0C0C27] text-gray-300 min-h-screen font-sans antialiased" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* כפתור חזרה */}
        <div className="mb-8">
          <Link href="/heyou" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 w-fit transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            חזרה לעמוד האפליקציה
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-[#121212] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">מדיניות פרטיות</h1>
          <h2 className="text-xl text-orange-400 mb-8">אפליקציית HeYou</h2>
          <p className="text-sm text-gray-500 mb-8">עודכן לאחרונה: מרץ 2026</p>

          <div className="space-y-8 text-lg leading-relaxed">
            
            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">1. מבוא</h3>
              <p>
                ברוכים הבאים לאפליקציית HeYou (להלן: "האפליקציה"), המפותחת ומנוהלת על ידי D&A Code Design. 
                פרטיותכם חשובה לנו מאוד. מסמך זה מפרט איזה מידע אנו אוספים, כיצד אנו משתמשים בו, וכיצד אנו שומרים עליו מאובטח, בדגש על שימוש בשירותי מיקום ובלוטות'.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">2. איזה מידע אנו אוספים?</h3>
              <ul className="list-disc list-inside space-y-2 pr-4">
                <li><strong className="text-white">מידע אישי:</strong> מספר טלפון (לצורך אימות והתחברות בלבד), שם, כינוי, תמונת פרופיל ונתונים דמוגרפיים (גיל/מין) שאתם בוחרים להזין.</li>
                <li><strong className="text-white">מיקום (Location):</strong> האפליקציה דורשת גישה למיקום המכשיר (כולל ברקע) כדי לזהות קרבה למשתמשים אחרים ולבתי עסק (זירות).</li>
                <li><strong className="text-white">בלוטות' (Bluetooth & Nearby Devices):</strong> אנו משתמשים בטכנולוגיית Bluetooth Low Energy כדי לאפשר את ה"רדאר" המאתר משתמשים הנמצאים במרחק מטרים ספורים מכם.</li>
                <li><strong className="text-white">תוכן תקשורת:</strong> הודעות הנשלחות בצ'אטים הפנימיים נשמרות זמנית בענן ונמחקות אוטומטית בעת סיום הסשן או יציאה מבית העסק.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">3. שימוש במיקום ברקע (Background Location)</h3>
              <p>
                HeYou נועדה לאפשר לכם לגלות אנשים סביבכם גם כשהמכשיר בכיס. כדי שהרדאר יעבוד בצורה רציפה ולא יתנתק כשאתם עוברים לאפליקציה אחרת, האפליקציה אוספת נתוני מיקום ברקע ומשדרת אותות בלוטות'.
                <strong> נתונים אלו אינם משמשים למעקב היסטורי ואינם נמכרים לצדדים שלישיים.</strong> ניתן להפסיק את השידור בכל רגע על ידי כיבוי הרדאר באפליקציה.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">4. אבטחת מידע ופרטיות הצ'אט</h3>
              <p>
                אנו משתמשים בשירותי הענן המאובטחים של Google (Firebase) לשמירת הנתונים שלכם. 
                מערכת הצ'אט של HeYou מבוססת על עקרון "כאן ועכשיו" – ברגע שמשתמש יוצא מסשן, מתרחק פיזית מבית העסק, או שהרדאר שלו מסתיים, החדר ותוכן השיחה נמחקים מהשרתים שלנו לצמיתות.
              </p>
            </section>

            {/* 🔥 חסימת מחיקת חשבון - חובה לגוגל ואפל 🔥 */}
            <section className="mt-12 p-6 bg-red-950/30 border border-red-500/30 rounded-2xl">
              <h3 className="text-2xl font-bold text-red-400 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                מחיקת חשבון ונתונים אישיים
              </h3>
              <p className="text-gray-300 mb-4">
                זכותכם המלאה לדרוש את מחיקת החשבון שלכם וכל המידע האישי המקושר אליו (לרבות תמונות, מספרי טלפון, היסטוריית התחברויות ועוד) בכל עת.
              </p>
              <ul className="list-decimal list-inside space-y-2 mb-6 text-gray-400">
                <li><strong className="text-gray-200">מתוך האפליקציה:</strong> היכנסו ל"פרופיל שלי" &gt; "הגדרות" &gt; "מחיקת חשבון".</li>
                <li><strong className="text-gray-200">דרך האינטרנט:</strong> לחצו על הכפתור מטה או שלחו אלינו אימייל לכתובת amosbahar@gmail.com עם מספר הטלפון שלכם ובקשה למחיקת הנתונים. המידע יימחק לחלוטין משרתינו תוך 7 ימי עסקים.</li>
              </ul>
              
              <a 
                href="mailto:amosbahar@gmail.com?subject=Account%20Deletion%20Request%20-%20HeYou&body=שלום,%20אבקש%20למחוק%20את%20החשבון%20שלי%20באפליקציית%20HeYou.%0A%0Aמספר%20הטלפון%20שלי%20הוא:%20"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-red-900/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                בקשה למחיקת חשבון ונתונים
              </a>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} D&A Code Design. כל הזכויות שמורות.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}