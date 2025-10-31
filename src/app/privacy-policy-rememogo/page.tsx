// app/privacy-policy-rememogo/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  // עדכון הכותרות עבור ReMEMO GO
  title: "Privacy Policy – ReMEMO GO",
  description:
    "Learn how ReMEMO GO collects, uses, shares, and protects your information, including Google account details, journal entries, and voice recordings.",
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
    // עיצוב הדף עם רקע לבן וטקסט כהה
    <div className="bg-white text-gray-800 font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10 border-b border-gray-200 pb-4">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Privacy Policy for ReMEMO GO
            </h1>
            <p className="text-gray-500 mt-2">Last updated: {lastUpdatedDate}</p>
          </header>

          {/* שימוש ב-prose לעיצוב אוטומטי של הטקסט */}
          <main className="prose prose-lg max-w-none">
            <p>
              ReMEMO GO (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) values your privacy. This Privacy Policy explains what information we
              collect, how we use it, with whom we share it, and how you can exercise your rights. By using ReMEMO GO,
              you agree to this Privacy Policy.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>
                <strong>Personal Information:</strong> When you sign in with Google, we collect your
                email address and username (display name). We do not collect phone numbers.
              </li>
              <li>
                <strong>User Content:</strong> Voice recordings, their transcriptions, and journal entries (including notes, reminders, meetings, and appointments) that you create in the app.
              </li>
              <li>
                <strong>Technical Information:</strong> Device identifiers, app version, and basic diagnostics required to
                provide and improve the service.
              </li>
            </ul>

            <h2>How We Use Information</h2>
            <ul>
              <li>To identify and authenticate users via Google Sign-In.</li>
              <li>To deliver, display, and synchronize your journal entries, reminders, and appointments across devices.</li>
              <li>To send push notifications for scheduled reminders, meetings, and appointments.</li>
              <li>To operate, maintain, and improve the app’s reliability, performance, and voice transcription accuracy.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>

            <h2>Sharing with Third Parties</h2>
            <p>
              We do not sell your personal data. We share information only with trusted providers necessary to
              deliver core functionality:
            </p>
            <ul>
              <li>
                <strong>Firebase (Google):</strong> For authentication (Google sign-in), cloud database (Firestore), and file storage for
                your journal entries.
              </li>
              <li>
                <strong>Notification Services:</strong> We use Firebase Cloud Messaging for push notification infrastructure and
                Awesome Notifications to schedule and display local notifications on your device.
              </li>
              <li>
                <strong>Service Providers:</strong> Limited access strictly to perform services on our behalf (like hosting), under confidentiality
                obligations.
              </li>
            </ul>

            <h2>Data Retention & Deletion</h2>
            <ul>
              <li>Your journal entries and recordings are stored securely in Google's Firebase cloud infrastructure.</li>
              <li>We retain information for as long as needed to provide the service or as required by law.</li>
              <li>
                <strong>You can permanently delete your account and all associated data at any time directly from the
                &quot;Settings&quot; screen within the ReMEMO GO app.</strong> This action is irreversible and will remove your data
                from our active systems.
              </li>
            </ul>
            
            <h2>Sensitive Permissions</h2>
            <ul>
              <li>
                <strong>Contacts:</strong> Used only for the &quot;Rememo&quot; feature to let you select a contact's name to associate with a journal entry. We do not read, store, or upload your contacts list.
              </li>
              <li>
                <strong>Microphone:</strong> Used exclusively to record your voice for dictating journal entries. We do not listen to your microphone at any other time.
              </li>
            </ul>

            <h2>Security</h2>
            <p>
              We apply industry-standard safeguards to protect your information. However, no method of transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Children’s Privacy</h2>
            <p>
              ReMEMO GO is not intended for children under 13, and we do not knowingly collect personal information from
              children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Significant changes will be communicated within the
              app or via email.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about this Privacy Policy? Contact us at
              {" "}
              {/* החלפתי את כתובת המייל לג'נרית של האתר שלך */}
              <a href="mailto:support@d-n-a.com">support@d-n-a.com</a>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
