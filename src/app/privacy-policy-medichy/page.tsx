// src/app/privacy-policy-medichy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Medichy",
  description:
    "Learn how Medichy collects, uses, shares, and protects your information, including your meditation preferences, personal goals, and AI-generated content.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy – Medichy",
    description:
      "Learn how Medichy collects, uses, shares, and protects your information.",
    type: "article",
    url: "/privacy-policy-medichy",
  },
};

export default function MedichyPrivacyPolicyPage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white text-gray-800 font-sans antialiased min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10 border-b border-gray-200 pb-4">
            <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-500 mt-2">Last updated: {lastUpdatedDate}</p>
          </header>

          <main className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
            <p>
              Medichy (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) values your privacy. This Privacy Policy explains what information we
              collect, how we use it, with whom we share it, and how you can exercise your rights. By using the Medichy app,
              you agree to this Privacy Policy.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, age, gender, and language preferences provided during the setup process.
              </li>
              <li>
                <strong>Meditation Data:</strong> Information about your goals (e.g., Serenity, Focus), moods, selected duration, and preferred background frequencies.
              </li>
              <li>
                <strong>Generated Content:</strong> The meditation scripts and audio sessions created for you by the AI.
              </li>
              <li>
                <strong>Technical Information:</strong> Device identifiers, app version, and basic diagnostics required to
                provide and improve the service.
              </li>
            </ul>

            <h2>How We Use Information</h2>
            <ul>
              <li>To generate personalized meditation scripts tailored to your specific needs and personality.</li>
              <li>To synthesize voice audio using AI technologies (e.g., ElevenLabs) based on your selected preferences.</li>
              <li>To save and synchronize your meditation history and "Saved" sessions across devices.</li>
              <li>To display your creations on the "Public Wall" (only if you explicitly choose to share them).</li>
              <li>To improve the accuracy and quality of our AI models and app performance.</li>
            </ul>

            <h2>Sharing with Third Parties</h2>
            <p>
              We do not sell your personal data. We share information only with trusted providers necessary to
              deliver core functionality:
            </p>
            <ul>
              <li>
                <strong>AI & Voice Providers (e.g., OpenAI, ElevenLabs):</strong> Text inputs (such as your name and goals) are sent to these providers solely to generate the meditation script and audio.
              </li>
              <li>
                <strong>Firebase (Google):</strong> For secure user authentication, cloud database, and storage of your meditation files.
              </li>
              <li>
                <strong>Service Providers:</strong> Limited access strictly to perform services on our behalf (such as analytics or hosting), under confidentiality obligations.
              </li>
            </ul>

            <h2>Data Retention & Deletion</h2>
            <ul>
              <li>Your personal preferences and saved meditations are stored in secure cloud infrastructure.</li>
              <li>We retain information for as long as needed to provide the service or as required by law.</li>
              <li>
                You can request deletion of your account and associated data by emailing
                {" "}
                <a href="mailto:support@medichy.app">support@medichy.app</a>.
              </li>
              <li>After deletion, your data will be removed from active systems and backups within a reasonable period.</li>
            </ul>
            
            <h2>AI Disclaimer</h2>
            <p>
              Medichy uses Artificial Intelligence to generate content. While we strive for accuracy and safety, AI-generated content may vary. The health and wellness information provided by the app is for general relaxation purposes and is not a substitute for professional medical advice or treatment.
            </p>

            <h2>Security</h2>
            <p>
              We apply industry-standard safeguards to protect your information. However, no method of transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Children’s Privacy</h2>
            <p>
              Medichy is not intended for children under 13, and we do not knowingly collect personal information from
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
              <a href="mailto:support@medichy.app">support@medichy.app</a>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}