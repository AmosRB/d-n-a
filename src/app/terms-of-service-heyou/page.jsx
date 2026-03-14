// src/app/terms-of-service-heyou/page.jsx
"use client";

import Link from 'next/link';
import React from 'react';

export default function TermsOfServiceHeYou() {
  const effectiveDate = new Date().toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
          <header className="text-center mb-10 border-b border-gray-800 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-4">
              תנאי שימוש (Terms of Service)
            </h1>
            <h2 className="text-2xl text-orange-400">אפליקציית HeYou</h2>
            <p className="text-gray-500 mt-4">תאריך עדכון אחרון: {effectiveDate}</p>
          </header>

          <main className="space-y-8 text-lg leading-relaxed">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
              <p><strong>בעלות וניהול:</strong> D&A Code Design ("החברה")</p>
              <p><strong>יצירת קשר:</strong> <a href="mailto:amosbahar@gmail.com" className="text-cyan-400 hover:underline">amosbahar@gmail.com</a></p>
            </div>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">1. הסכמה לתנאים</h3>
              <p>
                על ידי התקנה או שימוש באפליקציית HeYou ("השירות"), הנך מסכים/ה לתנאים אלו ול<Link href="/privacy-policy-heyou" className="text-cyan-400 hover:underline">מדיניות הפרטיות שלנו</Link>. 
                אם אינך מסכים/ה, אל תשתמש/י בשירות.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">2. מהות השירות</h3>
              <p>
                HeYou היא רשת חברתית מבוססת מיקום וקרבה פיזית ("רדאר"). השירות מאפשר לך לאתר משתמשים אחרים הנמצאים בקרבתך באמצעות טכנולוגיית Bluetooth Low Energy (BLE), להצטרף לזירות עסקיות מקומיות באמצעות סריקת ברקוד (QR), ולשלוח בקשות לצ'אט מיידי. הצ'אטים נועדו לתקשורת "כאן ועכשיו" ונמחקים בסיום המפגש.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">3. זכאות וחשבונות</h3>
              <p>
                השימוש באפליקציה מותר מגיל 16 ומעלה (או הגיל הנדרש על פי החוק המקומי שלך). ההרשמה והאימות מבוצעים באמצעות מספר הטלפון שלך וקוד SMS (OTP). הנך אחראי/ת על כל פעילות המתרחשת תחת חשבונך.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">4. הרשאות ומכשירים</h3>
              <p>
                כדי לפעול כראוי, השירות דורש גישה ל<strong>מיקום המכשיר</strong> (כולל פעילות ברקע כדי שהרדאר יעבוד כשהמסך כבוי), ל<strong>בלוטות' (Bluetooth)</strong> ול<strong>מכשירים קרובים (Nearby Devices)</strong> כדי לגלות ולהתגלות על ידי אחרים. 
                בנוסף, נדרשת גישה למצלמה לצורך סריקת ברקודי כניסה לעסקים. באחריותך לנהל הרשאות אלו בהגדרות המכשיר.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">5. בטיחות ואינטראקציה בעולם האמיתי</h3>
              <p>
                HeYou מעודדת אינטראקציה בין אנשים בעולם האמיתי. <strong className="text-orange-400">החברה אינה מבצעת בדיקות רקע למשתמשים.</strong> 
                הנך נושא/ת באחריות המלאה לאינטראקציות שלך עם משתמשים אחרים, הן בתוך האפליקציה והן במפגשים פיזיים. אנו ממליצים לנקוט באמצעי זהירות סבירים לפני פגישה עם אדם שהכרת דרך השירות.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">6. שירותי צד שלישי</h3>
              <p>
                אנו מסתמכים על ספקי צד שלישי אמינים לצורך תפעול השירות, ביניהם:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-400">
                <li><strong>Google Firebase:</strong> לצורך אימות משתמשים (Phone Auth), ניהול מסד הנתונים בענן והעברת הודעות צ'אט.</li>
                <li><strong>Google Nearby Connections API:</strong> לניהול תקשורת ה-Bluetooth ותקשורת ה-P2P (עמית-לעמית) בין מכשירים קרובים.</li>
              </ul>
              <p className="mt-2">השימוש שלך באפליקציה מהווה גם הסכמה לתנאים של ספקים אלו.</p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">7. מערכת הטוקנים (קרדיטים) והתשלומים</h3>
              <p>
                פתיחת חדר צ'אט חדש עם משתמש עשויה לדרוש שימוש ב"טוקן" (קרדיט פנימי). 
                המערכת עשויה להציע רכישת טוקנים נוספים בתשלום או חבילות מנוי. כל הרכישות כפופות לתנאי חנויות האפליקציות (Google Play / App Store). 
                החברה רשאית לשנות את התמחור והמודל הכלכלי בכל עת, עם מתן הודעה באפליקציה.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">8. היעדר אחריות והגבלת אחריות</h3>
              <p>
                השירות מסופק "כפי שהוא" (AS IS) ללא כל אחריות מפורשת או משתמעת. החברה אינה מתחייבת לזמינות רציפה של הרדאר, לדיוק המרחקים או לקבלת הודעות ללא תקלות.
              </p>
              <p className="mt-2">
                בשום מקרה, החברה לא תהיה אחראית לנזקים עקיפים, מקריים, מיוחדים או תוצאתיים, לרבות אובדן נתונים, פגיעה במוניטין או נזק הנובע מפגישה פיזית עם משתמשי האפליקציה.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">9. מחיקת חשבון ונתונים</h3>
              <p>
                <strong className="text-white">זכותך למחוק את חשבונך ואת הנתונים המקושרים אליו בכל עת.</strong> 
                תוכל/י לעשות זאת ישירות ממסך "הגדרות" באפליקציה, או באמצעות פנייה למייל התמיכה שלנו. מחיקת החשבון תמחק לצמיתות את המידע שלך משרתי הענן שלנו. למען הסר ספק, צ'אטים נמחקים אוטומטית מיד עם סיום הסשן.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">10. סמכות שיפוט</h3>
              <p>
                תנאים אלו כפופים לחוקי מדינת ישראל. סמכות השיפוט הבלעדית בכל סכסוך הנוגע לשירות זה תהיה מסורה לבתי המשפט המוסמכים במחוז תל אביב-יפו, ישראל.
              </p>
            </section>

          </main>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} D&A Code Design. כל הזכויות שמורות.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}