// app/privacy-policy-rememo/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ReMEMO",
  description:
    "Learn how ReMEMO collects, uses, shares, and protects your information, including phone numbers, usernames, emails, text messages, and voice recordings.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy – ReMEMO",
    description:
      "Learn how ReMEMO collects, uses, shares, and protects your information.",
    type: "article",
    url: "/privacy-policy-rememo",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    // --- שינוי: הוספת רקע לבן וצבע טקסט כהה לכל הדף ---
    <div className="bg-white text-gray-800 font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10 border-b border-gray-200 pb-4">
            <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-500 mt-2">Last updated: {lastUpdatedDate}</p>
          </header>

          {/* --- שינוי: שימוש ב-prose לניהול אוטומטי של עיצוב הטקסט --- */}
          <main className="prose prose-lg max-w-none">
            <p>
              ReMEMO (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) values your privacy. This Privacy Policy explains what information we
              collect, how we use it, with whom we share it, and how you can exercise your rights. By using ReMEMO,
              you agree to this Privacy Policy.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>
                <strong>Personal Information:</strong> phone numbers, usernames, and (if you sign in with Google)
                email addresses.
              </li>
              <li>
                <strong>User Content:</strong> text messages and voice recordings you create, send, or receive in the app.
              </li>
              <li>
                <strong>Technical Information:</strong> device identifiers, app version, and basic diagnostics required to
                provide and improve the service.
              </li>
            </ul>

            <h2>How We Use Information</h2>
            <ul>
              <li>To identify and authenticate users.</li>
              <li>To deliver, display, and synchronize reminders, text messages, and voice recordings.</li>
              <li>To send push notifications and play scheduled audio reminders.</li>
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
                <strong>Firebase (Google):</strong> For authentication (e.g., phone/Google sign-in), cloud database, and file storage for
                messages and audio files.
              </li>
              <li>
                <strong>OneSignal:</strong> For push notifications delivery and related services.
              </li>
              <li>
                <strong>Service Providers:</strong> Limited access strictly to perform services on our behalf, under confidentiality
                obligations.
              </li>
            </ul>

            <h2>Data Retention & Deletion</h2>
            <ul>
              <li>Your messages and recordings are stored in secure cloud infrastructure.</li>
              <li>We retain information for as long as needed to provide the service or as required by law.</li>
              <li>
                You can request deletion of your account and associated data by emailing
                {" "}
                <a href="mailto:support@rememo.app">support@rememo.app</a>.
              </li>
              <li>After deletion, data will be removed from active systems and backups within a reasonable period.</li>
            </ul>
            
            <h2>Sensitive Permissions</h2>
            <ul>
              <li>
                <strong>Contacts:</strong> Used to let you select recipients from your phonebook. Contact data is used solely for
                sending messages/reminders.
              </li>
              <li>
                <strong>Microphone:</strong> Used to record and send voice messages.
              </li>
            </ul>

            <h2>Security</h2>
            <p>
              We apply industry-standard safeguards to protect your information. However, no method of transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Children’s Privacy</h2>
            <p>
              ReMEMO is not intended for children under 13, and we do not knowingly collect personal information from
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
              <a href="mailto:support@rememo.app">support@rememo.app</a>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
