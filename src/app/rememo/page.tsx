'use client';

import Image from "next/image";
import Link from "next/link";

// --- רכיב חדש עבור ה-Top Bar ---
const TopBar = () => {
  return (
    <header 
      className="w-full p-4 shadow-md" 
      style={{ backgroundColor: '#11006E' }}
    >
      <div className="mx-auto max-w-5xl">
        <h1 
          className="text-2xl font-bold" 
          style={{ color: '#FFB300' }}
        >
          ReMEMO
        </h1>
      </div>
    </header>
  );
};

// --- רכיב חדש עבור ה-Footer ---
const Footer = () => {
  return (
    <footer 
      className="w-full p-6 mt-12 text-center" 
      style={{ backgroundColor: '#FFB300' }}
    >
      <div className="mx-auto max-w-5xl">
        <p 
          className="text-sm" 
          style={{ color: '#11006E' }}
        >
          © 2025 D&A Code Design. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-4 md:gap-6">
          <Link 
            href="/terms-of-service-rememo" 
            className="text-sm font-semibold hover:underline" 
            style={{ color: '#11006E' }}
          >
            תנאי השרות
          </Link>
          <Link 
            href="/privacy-policy-rememo" 
            className="text-sm font-semibold hover:underline" 
            style={{ color: '#11006E' }}
          >
            מדיניות פרטיות
          </Link>
          <Link 
            href="/delete-account-rememo" 
            className="text-sm font-semibold hover:underline" 
            style={{ color: '#11006E' }}
          >
            מחיקת חשבון ReMEMO
          </Link>
        </div>
      </div>
    </footer>
  );
};


export default function RememoPage() {
  return (
    // --- שינוי: עטיפת כל הדף ב-flex-col כדי שה-footer ידבק לתחתית ---
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#B7D8ED" }}>
      <TopBar />
      
      <main className="flex-grow">
        <div className="mx-auto max-w-5xl px-6 py-12">
          {/* --- שינוי: Header עם אייקון וכותרת חדשה --- */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
            <Image
              src="/rememo/rememo_icon.png"
              alt="ReMEMO icon"
              width={80}
              height={80}
              className="rounded-xl flex-shrink-0"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x80/11006E/FFB300?text=ReMEMO'; }}
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: '#11006E' }}>
                Schedule voice or text reminders App
              </h1>
              {/* --- שינוי: טקסט מעודכן ללא supporters/supported --- */}
              <p className="mx-auto mt-2 max-w-3xl text-lg text-slate-800">
                ReMEMO helps you create and schedule short voice or text reminders.
                When the time comes, the app plays the recording or shows the message — even if the app is closed.
              </p>
            </div>
          </div>

          {/* --- שינוי: כרטיסיות פיצ'רים עם תוכן מעודכן --- */}
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Flexible Reminders",
                body: "Create reminders for yourself or send them to any other user. It's simple and direct.",
              },
              {
                title: "Voice first",
                body: "Record quick audio notes for maximum clarity. Messages are stored securely in the cloud.",
              },
              {
                title: "Scheduled & reliable",
                body: "Notifications trigger playback even when the app is closed (push + background audio service).",
              },
              {
                title: "Private by design",
                body: "We only collect essential account info — plus your messages/recordings, which are yours alone.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-2xl p-5 shadow-lg"
                style={{
                  border: "3px solid #11006E",
                  background: "#ffffff",
                }}
              >
                <h3 className="text-xl font-bold" style={{ color: '#11006E' }}>{card.title}</h3>
                <p className="mt-2 text-slate-700">{card.body}</p>
              </article>
            ))}
          </section>

          {/* --- שינוי: סעיף "איך זה עובד" עם תוכן מעודכן --- */}
          <section className="mt-12">
            <h2 className="text-2xl font-extrabold" style={{ color: '#11006E' }}>How it works</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-800">
              <li>Install the app on your device.</li>
              <li>Create a voice or text reminder, set the date & time, and choose a recipient (or set it for yourself).</li>
              <li>
                When the time arrives, the app plays the voice message or shows the text
                reminder automatically.
              </li>
            </ol>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
