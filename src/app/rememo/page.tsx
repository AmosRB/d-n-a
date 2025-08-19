'use client';

import Image from "next/image";
import Link from "next/link";

// --- רכיב Top Bar מעודכן ---
const TopBar = () => {
  return (
    <header 
      className="w-full p-4 shadow-md" 
      // --- שינוי: צבע רקע חדש ---
      style={{ backgroundColor: '#012147' }}
    >
      {/* --- שינוי: הוספת text-center למרכוז הכותרת --- */}
      <div className="mx-auto max-w-5xl text-center">
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

// --- רכיב Footer מעודכן ---
const Footer = () => {
  return (
    <footer 
      className="w-full p-6 mt-12 text-center" 
      // --- שינוי: צבע רקע חדש ---
      style={{ backgroundColor: '#012147' }}
    >
      <div className="mx-auto max-w-5xl">
        {/* --- שינוי: צבע טקסט אפור --- */}
        <p className="text-sm text-gray-400">
          © 2025 D&A Code Design. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-4 md:gap-6">
          {/* --- שינוי: טקסט באנגלית וצבע קישור חדש --- */}
          <Link 
            href="/terms-of-service-rememo" 
            className="text-sm font-semibold hover:underline" 
            style={{ color: '#FFB300' }}
          >
            Terms of Service
          </Link>
          <Link 
            href="/privacy-policy-rememo" 
            className="text-sm font-semibold hover:underline" 
            style={{ color: '#FFB300' }}
          >
            Privacy Policy
          </Link>
          <Link 
            href="/delete-account-rememo" 
            className="text-sm font-semibold hover:underline" 
            style={{ color: '#FFB300' }}
          >
            Delete Account
          </Link>
        </div>
      </div>
    </footer>
  );
};


export default function RememoPage() {
  // --- מערך צבעי רקע לכרטיסיות ---
  const cardBackgrounds = ["#A1FFA1", "#FFF4C7", "#C694FF", "#FFFFFF"];

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#B7D8ED" }}>
      <TopBar />
      
      <main className="flex-grow">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
            <Image
              src="/rememo/rememo_icon.png"
              alt="ReMEMO icon"
              width={80}
              height={80}
              className="rounded-xl flex-shrink-0"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x80/012147/FFB300?text=ReMEMO'; }}
            />
            <div>
              {/* --- שינוי: צבע טקסט שחור --- */}
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
                Schedule voice or text reminders App
              </h1>
              {/* --- שינוי: צבע טקסט שחור --- */}
              <p className="mx-auto mt-2 max-w-3xl text-lg text-black">
                ReMEMO helps you create and schedule short voice or text reminders.
                When the time comes, the app plays the recording or shows the message — even if the app is closed.
              </p>
            </div>
          </div>

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
            ].map((card, index) => (
              <article
                key={card.title}
                className="rounded-2xl p-5 shadow-lg"
                style={{
                  // --- שינוי: מסגרת שחורה ורקעים דינמיים ---
                  border: "3px solid #000000",
                  background: cardBackgrounds[index % cardBackgrounds.length],
                }}
              >
                {/* --- שינוי: צבע טקסט שחור --- */}
                <h3 className="text-xl font-bold text-black">{card.title}</h3>
                <p className="mt-2 text-black">{card.body}</p>
              </article>
            ))}
          </section>

          <section className="mt-12">
            {/* --- שינוי: צבע טקסט שחור --- */}
            <h2 className="text-2xl font-extrabold text-black">How it works</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-black">
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
