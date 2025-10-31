// app/privacy-policy-rememogo/page.tsx
import type { Metadata } from "next";
import Link from "next/link"; // הוספנו ייבוא עבור קישורים

export const metadata: Metadata = {
  // עדכון עבור ReMEMO GO
  title: "Privacy Policy – ReMEMO GO",
  description:
    "Learn how ReMEMO GO collects, uses, shares, and protects your information, including your Google account info, voice recordings, and transcriptions.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy – ReMEMO GO",
    description:
      "Learn how ReMEMO GO collects, uses, shares, and protects your information.",
    type: "article",
    url: "/privacy-policy-rememogo",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10 border-b border-gray-200 pb-4">
            {/* עדכון שם האפליקציה */}
            <h1 className="text-4xl font-extrabold text-gray-900">
              Privacy Policy — ReMEMO GO
            </h1>
            <p className="text-gray-500 mt-2">Last updated: {lastUpdatedDate}</p>
          </header>

          <main className="prose prose-lg max-w-none">
            <p>
              ReMEMO GO (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) values your privacy. This Privacy Policy explains what
              information we collect, how we use it, with whom we share it, and how you can exercise your rights. By
              using ReMEMO GO, you agree to this Privacy Policy.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>
                {/* עדכון להתאמה ל-Google Sign-In בלבד */}
                <strong>Personal Information:</strong> Your email address, name, and profile picture as provided by your
                Google Account (via Google Sign-In).
              </li>
              <li>
                {/* עדכון לתיאור היומן הקולי */}
                <strong>User Content:</strong> Voice recordings, speech-to-text transcriptions, and any notes,
                reminders, or appointments you create in your journal.
              </li>
              <li>
                <strong>Technical Information:</strong> Device identifiers, app version, and basic diagnostics
                required to provide and improve the service.
              </li>
            </ul>

            <h2>How We Use Information</h2>
            <ul>
              <li>To identify and authenticate you via your Google Account.</li>
              <li>
                {/* עדכון לתיאור היומן הקולי */}
                To deliver, display, and synchronize your journal entries, transcriptions, and reminders.
              </li>
              <li>To send push notifications (via Firebase) and display local notifications (via Awesome Notifications)
                for scheduled reminders.</li>
              <li>To operate, maintain, and improve the app’s reliability and performance.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>

            <h2>Sharing with Third Parties</h2>
            <p>
              We do not sell your personal data. We share information only with trusted providers necessary to
              deliver core functionality:
            </p>
            <ul>
              <li>
                {/* עדכון ספקי צד שלישי */}
                <strong>Google (Firebase):</strong> For authentication (Google Sign-In), cloud database (Firestore),
                file storage (for voice recordings), and push notification infrastructure (Firebase Cloud
                Messaging).
              </li>
              <li>
                <strong>Awesome Notifications:</strong> To schedule and display local, on-device notifications.
              </li>
            </ul>

            {/* --- סעיף מחיקה מעודכן --- */}
            <h2>Your Rights & Data Deletion</h2>
            <p>
              You have the right to access, modify, and delete your personal information.
            </p>
            <p>
              <strong>
                You can permanently delete your account and all associated journal data (voice entries,
                transcriptions, etc.) at any time. This action is performed directly from the &quot;Settings&quot;
                screen within the ReMEMO GO app itself.
              </strong>
            </p>
            <p>
              For a detailed guide on how to do this, please visit our{" "}
              <Link href="/rememogo">app information page</Link> and see the section explaining data deletion.
              If you have any trouble, you can also contact us for assistance at
              {" "}
              {/* עדכון אימייל התמיכה */}
              <a href="mailto:support@d-n-a.com">support@d-n-a.com</a>.
            </p>
            <p>
              After deletion, your data will be permanently removed from our active systems and backups according to
              our retention schedule.
            </p>
            {/* --- סוף סעיף מחיקה --- */}

            <h2>Sensitive Permissions</h2>
            <ul>
              <li>
                {/* עדכון הרשאת אנשי קשר */}
                <strong>Contacts:</strong> If you grant permission, this is used solely to help you associate journal
                entries with names from your phonebook (e.g., for the &quot;Rememo&quot; feature). We do not upload your
                contact list.
              </li>
              <li>
                <strong>Microphone:</strong> Used exclusively to record voice entries for your journal.
              </li>
            </ul>

            <h2>Security</h2>
            <p>
              We apply industry-standard safeguards to protect your information. However, no method of transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Children’s Privacy</h2>
            <p>
              {/* עדכון גיל מינימום לפי ה-TOS */}
              ReMEMO GO is not intended for children under 16, and we do not knowingly collect personal information
              from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Significant changes will be communicated within the
              app or on our website.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about this Privacy Policy? Contact us at
              {" "}
              {/* עדכון אימייל התמיכה */}
              <a href="mailto:support@d-n-a.com">support@d-n-a.com</a>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}