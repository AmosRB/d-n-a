// app/terms-of-service-rememo/page.jsx
import React from 'react';

export default function TermsOfServicePage() {
  // תאריך היום משמש כתאריך התחולה. ניתן לשנות לפי הצורך.
  const effectiveDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          <header className="text-center mb-10 border-b border-gray-200 pb-4">
            <h1 className="text-4xl font-extrabold text-gray-900">Terms of Service — ReMEMO</h1>
            <p className="text-gray-500 mt-2">Effective date: {effectiveDate}</p>
          </header>

          <main className="prose prose-lg max-w-none">
            <p><strong>Owner/Provider:</strong> D&A Code Design (the “Company”)</p>
            <p><strong>Contact:</strong> <a href="mailto:amosbahar@gmail.com">amosbahar@gmail.com</a></p>

            <h2>1. Acceptance</h2>
            <p>By installing or using ReMEMO you agree to these Terms and to our Privacy Policy. If you do not agree, do not use the Service.</p>

            <h2>2. The Service</h2>
            <p>ReMEMO lets supporters create and schedule short voice or text reminders for supported users. At the scheduled time the app attempts to play the recording or show the message, including via push notifications and a background audio service.</p>

            <h2>3. Eligibility and Accounts</h2>
            <p>You must be at least 16 years old (or the age required by your local law) or have a parent/guardian’s consent. You are responsible for keeping your device and login secure and for all activity on your account.</p>

            <h2>4. Permissions and Devices</h2>
            <p>The app may request access to Contacts and Microphone to enable core features. You are responsible for granting and managing permissions, keeping your device powered on, connected to a network, and configured to allow notifications and background operation.</p>

            <h2>5. User Content</h2>
            <p>You keep ownership of the messages/recordings you create. You grant the Company a limited, worldwide, royalty-free license to host, process, transmit, and display your content solely to operate the Service. You represent that your content and contacts are lawful and that you have the right to send such messages.</p>
            
            <h2>6. Prohibited Use</h2>
            <p>Do not use the Service to: violate laws, harass or harm others, send spam, infringe IP rights, reverse-engineer the app, bypass security, or interfere with the Service or networks.</p>

            <h2>7. Delivery, Reliability, and Critical Use Disclaimer</h2>
            <p>Message delivery and playback are not guaranteed. Delays, failures, duplicates, or mis-deliveries may occur due to device settings, OS restrictions, battery management, network or carrier issues, user error, outages of third-party providers, or other causes outside our control.</p>
            <p><strong>Do not rely on ReMEMO for life-critical, safety-critical, medical, or emergency purposes.</strong> ReMEMO is not a medical device and does not provide medical, legal, or professional advice. For emergencies, contact your local emergency number.</p>

            <h2>8. Third-Party Services</h2>
            <p>We use reputable third parties to operate the Service, such as:</p>
            <ul>
              <li>Firebase (hosting/storage, analytics)</li>
              <li>OneSignal (push notifications)</li>
            </ul>
            <p>Your use of ReMEMO also constitutes acceptance of the applicable terms of such providers. We are not responsible for their acts or outages.</p>

            <h2>9. Privacy</h2>
            <p>How we collect, use, share, and retain data is described in the ReMEMO Privacy Policy (link on the site/app). By using the Service you consent to those practices.</p>

            <h2>10. Fees</h2>
            <p>We may offer free and/or paid features. We may change pricing or introduce fees with notice on the site/app. Taxes and carrier data charges are your responsibility.</p>
            
            <h2>11. Service Changes and Availability</h2>
            <p>We may modify, suspend, or discontinue the Service or any feature at any time, temporarily or permanently, without liability to you.</p>

            <h2>12. Intellectual Property</h2>
            <p>The Service, software, and brand (excluding your content) are owned by the Company and protected by IP laws. You receive a personal, non-exclusive, non-transferable, revocable license to use the app in accordance with these Terms.</p>
            
            <h2>13. Termination</h2>
            <p>You may stop using the Service at any time. We may suspend or terminate access immediately for any breach or suspected misuse. Upon termination, your license ends and certain provisions (including disclaimers and limitations of liability) survive.</p>

            <h2>14. Disclaimers</h2>
            <p>THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant uninterrupted, timely, secure, or error-free operation, or that messages will be delivered or played.</p>

            <h2>15. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY AND ITS OFFICERS, EMPLOYEES, AND CONTRACTORS SHALL NOT BE LIABLE FOR: (a) INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES; (b) LOSS OF DATA, PROFITS, GOODWILL, OR REPUTATION; (c) ANY FAILURE OR DELAY OF MESSAGES/NOTIFICATIONS; (d) DEVICE, NETWORK, OR THIRD-PARTY OUTAGES.</p>
            <p>Our total aggregate liability for any claim shall not exceed the greater of US$50 or the amount you paid to use the Service in the 12 months preceding the claim.</p>
            
            <h2>16. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold the Company harmless from claims, damages, losses, and expenses (including reasonable attorneys’ fees) arising from your use of the Service, your content, or your breach of these Terms or applicable law.</p>

            <h2>17. Account and Data Deletion</h2>
            <p>You may request deletion of your account and data via the public “ReMEMO account & data delete” page on the site or by emailing <a href="mailto:amosbahar@gmail.com">amosbahar@gmail.com</a>. We may retain limited records as required by law or for legitimate business purposes.</p>

            <h2>18. Governing Law and Venue</h2>
            <p>These Terms are governed by the laws of the State of Israel, without regard to conflict-of-law rules. The exclusive jurisdiction and venue shall be the competent courts in Tel-Aviv–Jaffa, Israel.</p>

            <h2>19. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Material changes will be posted on the site/app with a revised Effective Date. Your continued use after changes becomes your acceptance of the updated Terms.</p>

            <h2>20. Miscellaneous</h2>
            <p>If any provision is found unenforceable, the remainder remains in effect. These Terms constitute the entire agreement between you and the Company regarding the Service and supersede prior agreements on this subject. You may not assign these Terms without our consent.</p>
          </main>
        </div>
      </div>
    </div>
  );
}