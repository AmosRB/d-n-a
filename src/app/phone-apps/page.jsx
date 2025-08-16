// app/phone-apps/page.jsx
"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// הגדרת האפליקציות במערך כדי להקל על הניהול
const appsData = [
  {
    title: 'TAROT AI',
    subtitle: 'An app for reading tarot cards by an AI medium (Updated)', // שינוי טקסט לצורך אימות
    // וידוא שהסיומת נכונה
    icon: '/tarot.images/taroticon.png', 
    link: '/tarot-ai',
    isLink: true,
  },
  {
    title: 'REMEMO',
    subtitle: 'An app for sending scheduled pop-up messages',
    icon: '/rememo/rememo_icon.png', 
    link: '#', 
    isLink: false,
  },
  { title: 'Coming Soon', subtitle: 'A new app is on the way', icon: null, link: '#', isLink: false },
  { title: 'Coming Soon', subtitle: 'A new app is on the way', icon: null, link: '#', isLink: false },
  { title: 'Coming Soon', subtitle: 'A new app is on the way', icon: null, link: '#', isLink: false },
  { title: 'Coming Soon', subtitle: 'A new app is on the way', icon: null, link: '#', isLink: false },
];

// קומפוננטה עבור כל כרטיס אפליקציה
const AppCard = ({ app }) => {
  const cardContent = (
    <div className={`group flex flex-col items-center justify-start p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md h-full text-center transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-105 ${app.isLink ? 'cursor-pointer' : 'cursor-default'}`}>
      <div className="w-24 h-24 relative mb-4">
        {app.icon ? (
          <Image
            src={app.icon}
            alt={`${app.title} icon`}
            fill
            sizes="100px"
            className="rounded-xl object-cover"
            onError={(e) => { e.currentTarget.src = `https://placehold.co/100x100/e2e8f0/334155?text=${app.title.split(' ')[0]}`; }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Icon</span>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{app.title}</h3>
      <p className="text-gray-600 mt-2 flex-grow">{app.subtitle}</p>
    </div>
  );

  return app.isLink ? (
    <Link href={app.link} className="no-underline">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};


export default function PhoneAppsPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            PHONE APP's
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our collection of innovative mobile applications.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {appsData.map((app, index) => (
              <AppCard key={index} app={app} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
