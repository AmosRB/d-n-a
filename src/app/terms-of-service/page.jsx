// app/terms-of-service/page.jsx
import React from 'react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          
          <header className="text-center mb-8 border-b pb-4">
            <h1 className="text-4xl font-extrabold text-gray-900">Terms of Service</h1>
            <p className="text-gray-500 mt-2">Last updated: August 16, 2025</p>
          </header>

          <main className="prose prose-lg max-w-none">
            <p>
              Welcome to Tarot AI! These terms and conditions outline the rules and regulations for the use of D&A Code Design's Application, Tarot AI.
            </p>
            <p>
              By accessing this app, we assume you accept these terms and conditions. Do not continue to use Tarot AI if you do not agree to all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-bold mt-8">1. License to Use</h2>
            <p>
              Unless otherwise stated, D&A Code Design and/or its licensors own the intellectual property rights for all material on Tarot AI. All intellectual property rights are reserved. You may access this from Tarot AI for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc list-inside">
              <li>Republish material from Tarot AI</li>
              <li>Sell, rent, or sub-license material from Tarot AI</li>
              <li>Reproduce, duplicate or copy material from Tarot AI</li>
              <li>Redistribute content from Tarot AI</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">2. User Accounts</h2>
            <p>
              When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>

            <h2 className="text-2xl font-bold mt-8">3. Entertainment Purposes Only</h2>
            <p>
              Tarot AI is an application that uses artificial intelligence to generate tarot card readings. The Service is provided for entertainment purposes only. The information and guidance provided by the app should not be considered as professional advice (e.g., legal, financial, medical, or psychological). You should not rely on the information provided by the app as a substitute for professional advice. D&A Code Design is not responsible for any decisions or actions you take based on the readings provided by the app.
            </p>

            <h2 className="text-2xl font-bold mt-8">4. Limitation of Liability</h2>
            <p>
              In no event shall D&A Code Design, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h2 className="text-2xl font-bold mt-8">5. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Israel, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold mt-8">6. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at amosbahar@gmail.com.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
