"use client";

import React, { useState } from 'react';

// צבעים מתוך app_colors.dart
const AppColors = {
  primary: '#0006A6', // כחול עמוק
  accent: '#FF9500',  // כתום
  journalBackground: '#FFECA8', // צהבהב
};

// מערך של צילומי המסך
const screenshots = [
  { src: 'rememo_go screen 1.jpeg' },
  { src: 'rememo_go screen 3.jpeg' },
  { src: 'rememo_go screen 2.jpeg' },
  { src: 'rememo_go screen 4.jpeg' },
];


interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}
function DeleteModal({ isOpen, onClose }: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 text-gray-900"
        onClick={(e) => e.stopPropagation()} // מונע סגירה בלחיצה על המודאל עצמו
      >
        <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: AppColors.primary }}>
          Delete Account & Data
        </h3>
        <p className="text-center text-lg mb-6">
          To delete your account and all associated journal data, please follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-left text-base">
          <li>Open the <strong>ReMEMO GO</strong> app on your device.</li>
          <li>Navigate to the <strong>Settings</strong> page (tap the gear icon).</li>
          {/* --- תיקון שגיאת Vercel --- */}
          <li>Scroll down to the <strong>&quot;Danger Zone&quot;</strong> section.</li>
          <li>Tap on <strong>&quot;Delete Journal&quot;</strong>.</li>
          {/* --- סוף תיקון --- */}
          <li>Follow the prompts to confirm the deletion.</li>
        </ol>
        <p className="text-sm text-gray-600 mt-6 text-center">
          This action is irreversible and will permanently delete all your data from both your device and the cloud.
        </p>
        <button
          onClick={onClose}
          className="w-full mt-6 py-3 rounded-lg text-white font-semibold transition-colors"
          style={{ backgroundColor: AppColors.primary, opacity: 0.9 }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
        >
          I Understand
        </button>
      </div>
    </div>
  );
}

// קומפוננטת הדף הראשי
export default function RememoGoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="text-white min-h-screen font-sans antialiased"
        style={{ backgroundColor: AppColors.primary }} // רקע כחול עמוק
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ----- Header Section ----- */}
          <header className="text-center py-12 sm:py-16">
            <div className="flex justify-center items-center mb-6">
              <img
                src="/rememogo/rememo_go_icon.png" // נתיב הלוגו
                alt="ReMEMO GO Logo"
                width={120}
                height={120}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              ReMEMO GO
            </h1>
            <p 
              className="max-w-3xl mx-auto text-xl md:text-2xl font-light"
              style={{ color: AppColors.journalBackground }} // טקסט בצהבהב
            >
              Your Voice-Powered Second Brain.
            </p>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 mt-6">
              Capture your fleeting thoughts, notes, reminders, and appointments—all without typing a word. 
              Designed for life in motion.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#" 
                className="py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
                style={{ backgroundColor: AppColors.accent, color: AppColors.primary }} // כפתור כתום
              >
                Get it on Google Play
              </a>
              <a 
                href="#" 
                className="py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
                style={{ backgroundColor: AppColors.accent, color: AppColors.primary }} // כפתור כתום
              >
                Download on the App Store
              </a>
            </div>
          </header>

          {/* ----- Features Section ----- */}
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: AppColors.accent }}>Voice-First Interface</h3>
                <p className="text-gray-300">
                  Tap, speak, and save. Instantly categorize notes, meetings, reminders, and appointments using just your voice.
                </p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: AppColors.accent }}>Organized Journal</h3>
                <p className="text-gray-300">
                  Review your thoughts by day, week, or month. A powerful search helps you find anything in seconds.
                </p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: AppColors.accent }}>Smart Notifications</h3>
                <p className="text-gray-300">
                  Reliable, precise alerts for your reminders and appointments, designed to work even when the app is closed.
                </p>
              </div>
            </div>
          </section>

          {/* ----- Screenshots Section ----- */}
          <section className="py-12">
            <h2 
              className="text-4xl font-bold text-center mb-10"
              style={{ color: AppColors.accent }} // כותרת כתומה
            >
              See It in Action
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg border-2" style={{ borderColor: AppColors.accent }}>
                  <img
                    src={`/rememogo/${screenshot.src}`} // שימוש בשמות הקבצים הנכונים
                    alt={`ReMEMO GO Screenshot ${index + 1}`}
                    width={400}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                  {/* אין כותרת מתחת לתמונה, כפי שביקשת */}
                </div>
              ))}
            </div>
          </section>

          {/* ----- Footer ----- */}
          <footer className="text-center py-10 mt-12 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div className="flex justify-center items-center space-x-6 mb-6">
              <a 
                href="/privacy-policy-rememogo" // נתיב מעודכן
                className="transition-colors"
                style={{ color: AppColors.journalBackground }}
                onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseOut={(e) => e.currentTarget.style.color = AppColors.journalBackground}
              >
                Privacy Policy
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="/terms-of-service-rememogo" // נתיב מעודכן
                className="transition-colors"
                style={{ color: AppColors.journalBackground }}
                onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseOut={(e) => e.currentTarget.style.color = AppColors.journalBackground}
              >
                Terms of Service
              </a>
            </div>

            {/* כפתור מחיקת נתונים */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-gray-400 hover:text-red-500 transition-colors underline"
            >
              Delete Account & Journal Data
            </button>

            <p className="text-gray-500 mt-6">
              © {new Date().getFullYear()} D&A Code Design. All rights reserved.
            </p>
          </footer>

        </div>
      </div>

      {/* קריאה למודאל */}
      <DeleteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

