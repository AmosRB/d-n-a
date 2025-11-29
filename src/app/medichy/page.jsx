// src/app/medichy/page.jsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// מערך צילומי המסך לפי הקבצים שצירפת
const screenshots = [
  { src: 'medichyscreen1.jpeg', alt: 'Medichy - Main Interface' },
  { src: 'medichyscreen6.jpeg', alt: 'Medichy - Create Session' },
  { src: 'medichyscreen9.jpeg', alt: 'Medichy - Summary Screen' },
  { src: 'medichyscreen3.jpeg', alt: 'Medichy - Shared Meditations' },
];

export default function MedichyHomePage() {
  return (
    <div className="min-h-screen font-sans antialiased text-white bg-gradient-to-b from-[#60BD00] to-[#003B1F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ----- Header Section ----- */}
        <header className="text-center py-10 sm:py-16">
          <div className="flex flex-col items-center justify-center">
            {/* לוגו */}
            <div className="relative w-32 h-32 mb-6 rounded-3xl overflow-hidden border-4 border-[#FFAE00] shadow-xl">
               <Image
                src="/medicy/medichy_logo.png" 
                alt="Medichy App Icon"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFAE00] tracking-wider drop-shadow-md">
              MEDICHY
            </h1>
            <h2 className="text-xl sm:text-2xl mt-4 font-semibold drop-shadow-sm text-white">
              The Meditation App That Listens to You
            </h2>
          </div>
        </header>

        {/* ----- Main Content Section ----- */}
        <main className="max-w-4xl mx-auto py-6 space-y-12">
          
          {/* Introduction */}
          <section className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <h2 className="text-3xl font-bold mb-4 text-[#FFAE00] border-b-2 border-[#FFAE00]/50 pb-2">
              Discover Medichy
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-shadow-sm">
              Stop settling for generic, one-size-fits-all meditation tracks. <strong className="text-[#FFAE00]">Medichy</strong> is a revolutionary platform that uses advanced Artificial Intelligence to craft unique, guided meditations tailored specifically to your personality, your current mood, and your available time.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you have 5 minutes for a quick focus boost or an hour for deep spiritual healing, Medichy creates the perfect session for you in seconds.
            </p>
          </section>

          {/* Features / Why Medichy */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#FFAE00] text-center">
              Why Medichy?
            </h2>
            <div className="space-y-8">
              
              {/* Feature 1 */}
              <div className="flex items-start bg-black/20 p-5 rounded-xl backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFAE00] text-black rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFAE00] mb-2">Hyper-Personalized Experience ("This is ME")</h3>
                  <p className="text-gray-100">
                    Medichy gets to know you. Through a unique, interactive interface, the app learns your name, age, spiritual inclinations, and personality traits. It uses this data to generate scripts that speak directly to your inner self, making every session deeply personal and effective.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start bg-black/20 p-5 rounded-xl backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFAE00] text-black rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFAE00] mb-2">The Power of Creation</h3>
                  <p className="text-gray-100 mb-2">
                    You are the creator. Our intuitive circular interface allows you to build your perfect session in 4 simple steps:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-200 ml-2">
                    <li><strong className="text-[#FFAE00]">Goal:</strong> Choose from Serenity, Focus, Success, or Health.</li>
                    <li><strong className="text-[#FFAE00]">Language:</strong> Generate meditations in English, Hebrew, French, Spanish, and many more.</li>
                    <li><strong className="text-[#FFAE00]">Duration:</strong> Set the exact time you have, from 1 to 60 minutes.</li>
                    <li><strong className="text-[#FFAE00]">Voice:</strong> Select from soothing Male or Female AI voices (powered by ElevenLabs) that sound indistinguishable from human instructors.</li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start bg-black/20 p-5 rounded-xl backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFAE00] text-black rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFAE00] mb-2">Healing Frequencies & Binaural Beats</h3>
                  <p className="text-gray-100 mb-2">
                    Enhance your practice with our curated library of background frequencies. Medichy mixes your guided track with powerful soundscapes, including:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200 ml-2">
                    <li>🔊 <strong>432Hz:</strong> Natural Harmony & Peace.</li>
                    <li>🔊 <strong>528Hz:</strong> The Miracle Tone (DNA Repair).</li>
                    <li>🔊 <strong>396Hz:</strong> Liberating Guilt and Fear.</li>
                    <li>🧠 <strong>Brainwaves:</strong> Alpha, Beta, Delta, Gamma, Theta.</li>
                  </ul>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start bg-black/20 p-5 rounded-xl backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFAE00] text-black rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFAE00] mb-2">Smart Player & Progress Tracking</h3>
                  <p className="text-gray-100">
                    Immerse yourself in the session with our beautiful, dark-mode visualizer. A dynamic circular progress bar keeps you centered, while the app intelligently fades out the background music as your session concludes.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start bg-black/20 p-5 rounded-xl backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFAE00] text-black rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFAE00] mb-2">Save & Share</h3>
                  <p className="text-gray-100">
                    Did you create a masterpiece?
                    <br />
                    <strong className="text-[#FFAE00]">Save:</strong> Keep your favorite sessions in your personal "Saved" library to replay anytime.
                    <br />
                    <strong className="text-[#FFAE00]">Share:</strong> Share your creations with the world via our Public Wall or send them privately to friends.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="flex items-start bg-black/20 p-5 rounded-xl backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFAE00] text-black rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">6</div>
                <div>
                  <h3 className="text-xl font-bold text-[#FFAE00] mb-2">Preferences That Matter</h3>
                  <p className="text-gray-100">
                    Tell Medichy how you like to meditate—lying down, sitting up, outdoors, or indoors. The AI adapts the guidance to your physical environment.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-2">Download Medichy today and start creating the peace you deserve.</h3>
            <p className="text-[#FFAE00] text-xl italic">Your mind, your time, your meditation.</p>
          </div>

        </main>

        {/* ----- Screenshots Section ----- */}
        <section className="py-12 border-t border-white/20 mt-8">
          <h2 className="text-3xl font-semibold text-center mb-8 text-[#FFAE00]">
            See It in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black/40 hover:scale-105 transition-transform duration-300">
                <Image
                  src={`/medicy/${screenshot.src}`}
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
        <footer className="text-center py-10 mt-10 border-t border-white/20 bg-black/30 rounded-t-3xl">
          <p className="text-gray-300 mb-6 font-light">
            © {new Date().getFullYear()} D&A Code Design. All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <Link href="/privacy-policy-medichy" className="text-[#FFAE00] hover:text-white transition-colors font-medium text-lg">
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/terms-of-service-medichy" className="text-[#FFAE00] hover:text-white transition-colors font-medium text-lg">
              Terms of Service
            </Link>
          </div>
        </footer>
        
      </div>
    </div>
  );
}