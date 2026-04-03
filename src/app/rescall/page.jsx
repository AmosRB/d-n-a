// src/app/rescall/page.jsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// מערך של צילומי המסך לתצוגה נוחה בגלריה
const screenshots = [
  { src: 'screen1.jpeg', alt: 'ResCall - Set Trigger Time' },
  { src: 'screen2.jpeg', alt: 'ResCall - Active Timer' },
  { src: 'screen3.jpeg', alt: 'ResCall - Timer Progress' },
  { src: 'screen4.jpeg', alt: 'ResCall - Incoming Call Screen' },
  { src: 'screen5.jpeg', alt: 'ResCall - Active Call Screen' },
];

export default function ResCallHomePage() {
  return (
    <div className="bg-[#051139] text-white min-h-screen font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ----- Header Section ----- */}
        <header className="text-center py-10 sm:py-16">
          {/* הויז'ואל app_graphics בוטל והוחלף באייקון מרכזי וגדול */}
          <div className="flex flex-col items-center justify-center">
            {/* אייקון האפליקציה בגרסה מרכזית וגדולה */}
            <Image
              src="/rescall/icon.png" // הנתיב d-n-a\public\rescall
              alt="ResCall App Icon"
              width={180}
              height={180}
              className="rounded-3xl mb-6 shadow-2xl shadow-blue-500/20"
              priority
            />
            {/* כותרת האפליקציה, כעת ממורכזת לחלוטין */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-300 tracking-wider">
              Welcome to ResCall
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-blue-200 mt-4 font-light">
            The ultimate realistic fake call simulator
          </p>
        </header>

        {/* ----- Main Content Section ----- */}
        <main className="max-w-4xl mx-auto py-10">
          
          <section className="mb-12 bg-white/5 p-8 rounded-2xl border border-blue-800/50 shadow-xl backdrop-blur-sm">
            <h2 className="text-3xl font-semibold mb-4 text-blue-400 border-b-2 border-blue-800 pb-3">
              Why use ResCall?
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed">
              Stuck in a tiring meeting? On a bad date? Just looking for an excuse to get out of a certain situation? Create a fake incoming call to yourself that will provide the excuse.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-8 text-blue-400 border-b-2 border-blue-800 pb-3">
              How to Use The App
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/40 mr-5">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">Set the Timer</h3>
                  <p className="text-lg text-blue-100 mt-2">
                    Long-press the central circle to choose when the fake call should ring.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/40 mr-5">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">Choose a Caller</h3>
                  <p className="text-lg text-blue-100 mt-2">
                    Tap the 'Caller' button to pick a contact from your phone, or leave it as the default unknown caller.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/40 mr-5">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">Select Audio (Optional)</h3>
                  <p className="text-lg text-blue-100 mt-2">
                    Add a voice recording to play when you answer the call to make it incredibly realistic.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/40 mr-5">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">Start</h3>
                  <p className="text-lg text-blue-100 mt-2">
                    Tap the 'START' button and lock your phone or return to your home screen. The call will arrive at the designated time.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* ----- Screenshots Section ----- */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-center mb-10 text-blue-400">
            See It in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 border border-blue-900/50 bg-black/20">
                <Image
                  src={`/rescall/${screenshot.src}`}
                  alt={screenshot.alt}
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ----- Footer ----- */}
        <footer className="text-center py-8 mt-12 border-t border-blue-900/50">
          <p className="text-blue-400/60 mb-5 font-light tracking-wide">
            © 2026 D&A Code Design. All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <Link href="/privacy-policy-rescall" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service-rescall" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </footer>
        
      </div>
    </div>
  );
}