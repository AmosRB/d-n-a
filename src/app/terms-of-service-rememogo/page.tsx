// app/terms-of-service-rememogo/page.tsx

// בדיקת עדכון אחרונה 123
import type { Metadata } from "next";
import Link from "next/link"; 
// ...

export const metadata: Metadata = {
  // עדכון הכותרות עבור ReMEMO GO
  title: "Terms of Service – ReMEMO GO",
  description:
    "Terms of Service for using the ReMEMO GO voice-powered journal app, powered by D&A Code Design.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service – ReMEMO GO",
    description: "Terms of Service for using the ReMEMO GO app.",
    type: "article",
    url: "/terms-of-service-rememogo",
  },
};

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl font-extrabold text-gray-900">
              {/* עדכון שם האפליקציה */}
              Terms of Service — ReMEMO GO
            </h1>
            <p className="text-gray-500 mt-2">Effective date: {effectiveDate}</p>
          </header>

          <main className="prose prose-lg max-w-none">
            <p>
              <strong>Owner/Provider:</strong> D&A Code Design (the “Company”)
            </p>
            <p>
              <strong>Contact:</strong>{" "}
              {/* עדכון כתובת המייל */}
              <a href="mailto:support@d-n-a.com">support@d-n-a.com</a>
            </p>

            <h2>1. Acceptance</h2>
            <p>
              {/* עדכון שם האפליקציה */}
              By installing or using ReMEMO GO (the &quot;Service&quot;), you agree to these Terms and to our{" "}
              <Link href="/privacy-policy-rememogo">Privacy Policy</Link>.
              If you do not agree, do not use the Service.
            </p>

            <h2>2. The Service</h2>
            <p>
              {/* עדכון תיאור השירות */}
              {/* --- תיקון שגיאת Vercel --- */}
              ReMEMO GO provides a voice-first digital journal (&quot;Journal&quot;) that allows you to capture, transcribe, and
              organize content such as notes, reminders, meetings, and appointments (&quot;User Content&quot;). The Service uses
              speech-to-text to transcribe your voice and may send notifications for scheduled reminders.
            </p>

            <h2>3. Eligibility and Accounts</h2>
            <p>
              {/* עדכון להתאמה ל-Google Sign-In */}
              You must be at least 16 years old (or the age required by your local law) to use the Service.
              You must authenticate using your Google Account (Google Sign-In). You are responsible for keeping your
              Google Account secure and for all activity that occurs under your account within the Service.
            </p>

            <h2>4. Permissions and Devices</h2>
            <p>
              {/* עדכון הרשאות */}
              {/* --- תיקון שגיאת Vercel --- */}
              To function correctly, the Service requires access to your device&apos;s <strong>Microphone</strong> (to record voice entries)
              and may request access to <strong>Contacts</strong> (for the &quot;Rememo&quot; feature, to associate entries with contact names).
              You are responsible for granting and managing these permissions, keeping your device connected, and configured
              to allow notifications.
            </p>

            <h2>5. User Content</h2>
            <p>
              You retain ownership of the voice recordings, transcriptions, and journal entries you create. You grant the
              Company a limited, worldwide, royalty-free license to host, process, transmit, and display your User Content
              solely to operate and provide the Service to you (e.g., synchronizing it via the cloud).
            </p>

            <h2>6. Prohibited Use</h2>
            <p>
              Do not use the Service to: violate laws, harass or harm others, infringe intellectual property (IP) rights,
              reverse-engineer the app, bypass security, or interfere with the Service or its networks.
            </p>

            <h2>7. Delivery, Reliability, and Critical Use Disclaimer</h2>
            <p>
              {/* עדכון להתראות */}
              Notification delivery and playback are not guaranteed. Delays or failures may occur due to device settings,
              operating system restrictions (e.g., battery optimization), network issues, user error, or outages of
              third-party providers.
            </p>
            <p>
              {/* --- תיקון שגיאת Vercel --- */}
              <strong>
                Do not rely on ReMEMO GO for &quot;life-critical&quot;, &quot;safety-critical&quot;, medical, or emergency purposes.
              </strong>{" "}
              The Service is for informational and organizational purposes only and is not a substitute for professional advice.
            </p>

            <h2>8. Third-Party Services</h2>
            <p>
              We use reputable third parties to operate the Service, such as:
            </p>
            <ul>
              {/* עדכון ספקי צד שלישי */}
              <li>
                <strong>Google (Firebase):</strong> For authentication (Google Sign-In), cloud database (Firestore), and push
                notification infrastructure (Firebase Cloud Messaging).
              </li>
              <li>
                <strong>Awesome Notifications:</strong> To schedule and display local, on-device notifications for reminders
                and appointments.
              </li>
            </ul>
            <p>
              Your use of ReMEMO GO also constitutes acceptance of the applicable terms of such providers.
            </p>

            <h2>9. Privacy</h2>
            <p>
              How we collect, use, share, and retain data is described in the{" "}
              {/* עדכון שם הקישור */}
              <Link href="/privacy-policy-rememogo">ReMEMO GO Privacy Policy</Link>.
              By using the Service you consent to those practices.
            </p>

            <h2>10. Fees</h2>
            <p>
              We may offer free and/or paid features. We may change pricing or introduce fees with notice on the site/app.
              Taxes and carrier data charges are your responsibility.
            </p>
            
            <h2>11. Service Changes and Availability</h2>
            <p>
              We may modify, suspend, or discontinue the Service or any feature at any time, temporarily or permanently,
              without liability to you.
            </p>

            <h2>12. Intellectual Property</h2>
            <p>
              The Service, software, and brand (excluding your User Content) are owned by the Company and protected by IP
              laws. You receive a personal, non-exclusive, non-transferable, revocable license to use the app in
              accordance with these Terms.
            </p>
            
            <h2>13. Termination</h2>
            <p>
              You may stop using the Service at any time. We may suspend or terminate access immediately for any breach or
              suspected misuse. Upon termination, your license ends and certain provisions (including disclaimers and
              limitations of liability) survive.
            </p>

            <h2>14. Disclaimers</h2>
            {/* --- תיקון שגיאת Vercel --- */}
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
              INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant
              uninterrupted, timely, secure, or error-free operation, or that reminders will be delivered precisely on time.
            </p>

            <h2>15. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY AND ITS OFFICERS, EMPLOYEES, AND CONTRACTORS SHALL NOT BE
              LIABLE FOR: (a) INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES; (b) LOSS OF
              DATA, PROFITS, GOODWILL, OR REPUTATION; (c) ANY FAILURE OR DELAY OF NOTIFICATIONS; (d) DEVICE, NETWORK, OR
              THIRD-PARTY OUTAGES.
            </p>
            <p>
              Our total aggregate liability for any claim shall not exceed the greater of US$50 or the amount you paid to
              use the Service in the 12 months preceding the claim.
            </p>
            
            <h2>16. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold the Company harmless from claims, damages, losses, and expenses
              (including reasonable attorneys’ fees) arising from your use of the Service, your User Content, or your
              breach of these Terms or applicable law.
            </p>

            {/* --- שינוי קריטי כאן --- */}
            <h2>17. Account and Data Deletion</h2>
            <p>
              {/* --- תיקון שגיאת Vercel --- */}
              <strong>
                You may delete your account and all associated journal data at any time directly from the
                &quot;Settings&quot; screen within the ReMEMO GO app.
              </strong>{" "}
              This action is irreversible and will permanently delete your data from both your device and our cloud
              servers. You can also contact us at our support email for assistance, but the primary method is via the app.
            </p>

            <h2>18. Governing Law and Venue</h2>
            <p>
              These Terms are governed by the laws of the State of Israel, without regard to conflict-of-law rules. The
              exclusive jurisdiction and venue shall be the competent courts in Tel-Aviv–Jaffa, Israel.
            </p>

            <h2>19. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be posted on the site/app with a revised
              Effective Date. Your continued use after changes becomes your acceptance of the updated Terms.
            </p>

            <h2>20. Miscellaneous</h2>
            <p>
              If any provision is found unenforceable, the remainder remains in effect. These Terms constitute the entire
              agreement between you and the Company regarding the Service and supersede prior agreements on this subject.
              You may not assign these Terms without our consent.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}

