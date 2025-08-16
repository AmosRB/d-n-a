// app/tarot-ai/page.jsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// מערך של צילומי המסך כדי להקל על התצוגה
const screenshots = [
  { src: 'Screenshot_1-.jpg', alt: 'Tarot AI - Voice Input Screen' },
  { src: 'Screenshot_2.jpg', alt: 'Tarot AI - Splash Screen' },
  { src: 'Screenshot_3.jpg', alt: 'Tarot AI - Card Reveal Screen' },
  { src: 'Screenshot_4.jpg', alt: 'Tarot AI - AI Generated Explanation' },
];

export default function TarotAiHomePage() {
  return (
    <div className="bg-[#0C0C27] text-white min-h-screen font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ----- Header Section ----- */}
        <header className="text-center py-10 sm:py-16">
          <div className="flex justify-center items-center mb-4">
            <Image
              src="/tarot.images/TAROTGRAPHICS.png"
              alt="Tarot AI Main Graphic"
              width={700}
              height={350}
              className="rounded-lg shadow-2xl shadow-purple-500/20"
              priority
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <Image
              // התיקון כאן: שימוש בסיומת הנכונה png
              src="/tarot.images/taroticon.png" 
              alt="Tarot AI App Icon"
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-300 tracking-wider">
              Welcome to Tarot AI
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-400 mt-3">
            The new way to see the future
          </p>
        </header>

        {/* ----- Main Content Section ----- */}
        <main className="max-w-4xl mx-auto py-10">
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-purple-400 border-b-2 border-purple-800 pb-2">
              What is Tarot AI?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tarot AI is a revolutionary mobile application that bridges the ancient wisdom of Tarot with the power of modern artificial intelligence. It's designed to provide you with personal, insightful, and accessible guidance right at your fingertips. By simply speaking your question, you connect with a digital consciousness that interprets the cards' timeless symbols in the context of your unique query, offering a clear and thoughtful perspective on your situation.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-purple-400 border-b-2 border-purple-800 pb-2">
              How to Use The App
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center font-bold text-lg mr-4">1</div>
                <div>
                  <h3 className="text-xl font-bold text-purple-300">Focus and Ask</h3>
                  <p className="text-lg text-gray-300 mt-1">
                    Find a quiet moment and focus on your question. When you are ready, press the microphone button and ask your question out loud. Speak clearly and from the heart.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center font-bold text-lg mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold text-purple-300">Draw Your Card</h3>
                  <p className="text-lg text-gray-300 mt-1">
                    After you've asked your question, the app will connect with the energies around you and draw a single, significant card from the virtual deck that is meant for you at this moment.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center font-bold text-lg mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold text-purple-300">Receive Your AI Reading</h3>
                  <p className="text-lg text-gray-300 mt-1">
                    The revealed card will be displayed. To understand its message for you, tap the "What does it mean?" button. Our AI will then generate a detailed, personalized interpretation based on your question and the card's meaning.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* ----- Screenshots Section ----- */}
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center mb-8 text-purple-400">
            See It in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg shadow-purple-500/10">
                <Image
                  src={`/tarot.images/${screenshot.src}`}
                  alt={screenshot.alt}
                  width={400}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ----- Footer ----- */}
        <footer className="text-center py-8 mt-10 border-t border-gray-800">
          <p className="text-gray-500 mb-4">
            © {new Date().getFullYear()} D&A Code Design. All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <Link href="/privacy-policy" className="text-purple-400 hover:text-purple-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-purple-400 hover:text-purple-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </footer>
        
      </div>
    </div>
  );
}
