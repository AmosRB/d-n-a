// app/privacy-policy-rescall/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ResCall",
  description:
    "Learn how ResCall handles your data, including device contacts, microphone usage, and advertising networks. We prioritize your privacy by keeping your data local.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy – ResCall",
    description:
      "Learn how ResCall handles your data and protects your privacy.",
    type: "article",
    url: "/privacy-policy-rescall",
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
            <h1 className="text-4xl font-extrabold text-gray-900">
              Privacy Policy — ResCall
            </h1>
            <p className="text-gray-500 mt-2">Last updated: {lastUpdatedDate}</p>
          </header>

          <main className="prose prose-lg max-w-none">
            <p>
              ResCall (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) values your privacy. This Privacy Policy explains what
              information is processed, how it is used, and how we protect your rights. By
              using ResCall, you agree to this Privacy Policy.
            </p>

            <h2>Information We Process</h2>
            <p>
              ResCall is designed to be a privacy-first, local-only application. We do not require you to create an account, and we do not store your personal data on our servers.
            </p>
            <ul>
              <li>
                <strong>User Content (Local Only):</strong> Any voice recordings you create or contact details you select for the fake caller are stored <strong>strictly locally</strong> on your device. We do not collect, upload, or have access to this data.
              </li>
              <li>
                <strong>Technical & Advertising Information:</strong> We use third-party services (such as Google AdMob) to display advertisements. These services may automatically collect technical information, such as your IP address, device identifiers, app version, and basic interaction data, to provide and measure personalized or non-personalized ads.
              </li>
            </ul>

            <h2>How Information is Used</h2>
            <ul>
              <li>To simulate realistic fake incoming calls locally on your device.</li>
              <li>To display relevant advertisements via our third-party advertising partners.</li>
              <li>To operate, maintain, and improve the app&apos;s reliability and performance.</li>
            </ul>

            <h2>Sharing with Third Parties</h2>
            <p>
              We do not sell your personal data. We do not upload your contacts or audio recordings to any server. The only data shared is technical data collected by our trusted third-party providers:
            </p>
            <ul>
              <li>
                <strong>Google AdMob:</strong> Used for displaying advertisements within the app. AdMob may use device identifiers and other technical data to serve ads. You can learn more about how Google uses data at their <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Privacy & Terms</a> page.
              </li>
            </ul>

            <h2>Sensitive Permissions</h2>
            <p>To provide its core features, ResCall requires certain on-device permissions. <strong>All data accessed via these permissions remains strictly on your device.</strong></p>
            <ul>
              <li>
                <strong>Contacts:</strong> If you grant permission, this is used solely to let you choose a name and number from your phonebook to display during the fake call. We do not upload, share, or store your contact list on any external servers.
              </li>
              <li>
                <strong>Microphone:</strong> Used exclusively to record optional audio that plays when you answer the fake call. These recordings are saved locally on your device and are never uploaded to the internet.
              </li>
              <li>
                <strong>Alarms & Reminders / Notifications:</strong> Used to ensure the fake call triggers exactly at the time you scheduled, even if the app is closed.
              </li>
            </ul>

            <h2>Your Rights & Data Deletion</h2>
            <p>
              Because ResCall does not store your personal information or user-generated content on our servers, you have full control over your data.
            </p>
            <p>
              <strong>
                You can permanently delete all your data (including your settings and audio recordings) at any time simply by clearing the app&apos;s data in your device settings or by uninstalling the ResCall app.
              </strong>
            </p>

            <h2>Security</h2>
            <p>
              We rely on your device&apos;s native security features to protect the data stored locally by the app. While we ensure our code follows best practices, the security of your device is ultimately determined by your operating system and device settings.
            </p>

            <h2>Children’s Privacy</h2>
            <p>
              ResCall is not intended for children under 16, and we do not knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Significant changes will be communicated within the app or on our website.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about this Privacy Policy? Contact us at
              {" "}
              <a href="mailto:support@d-n-a.com">support@d-n-a.com</a>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}