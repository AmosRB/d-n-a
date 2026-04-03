// app/terms-of-service-rescall/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service – ResCall",
  description:
    "Read the Terms of Service for ResCall. Understand the rules, acceptable use, and our disclaimers regarding this entertainment application.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service – ResCall",
    description:
      "Read the Terms of Service and acceptable use policies for the ResCall app.",
    type: "article",
    url: "/terms-of-service-rescall",
  },
};

export default function TermsOfServicePage() {
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
              Terms of Service — ResCall
            </h1>
            <p className="text-gray-500 mt-2">Last updated: {lastUpdatedDate}</p>
          </header>

          <main className="prose prose-lg max-w-none">
            <p>
              Welcome to ResCall. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the ResCall mobile application (the &quot;App&quot;), provided by D&A Code Design (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). 
              By downloading, accessing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
            </p>

            <h2>1. Description of Service</h2>
            <p>
              ResCall is a simulation application designed to create fake incoming calls on your mobile device. 
              <strong>It is strictly for entertainment and prank purposes.</strong> The App does not connect to any real cellular network to make or receive actual phone calls, nor does it send actual SMS messages.
            </p>

            <h2>2. Acceptable Use</h2>
            <p>
              You agree to use the App responsibly and in compliance with all applicable local, state, and national laws. You must not use the App:
            </p>
            <ul>
              <li>To harass, threaten, intimidate, or distress any other person.</li>
              <li>To deceive law enforcement, emergency services, medical professionals, or government officials.</li>
              <li>For any fraudulent, malicious, or illegal activity.</li>
              <li>In any situation where relying on a fake call could result in physical harm, emotional distress, or financial loss.</li>
            </ul>

            <h2>3. Privacy and Local Data</h2>
            <p>
              Your privacy is important to us. ResCall is designed to operate locally on your device. Any contact information you select or audio recordings you create within the App remain entirely on your device and are not uploaded to our servers. For more details on how we handle permissions and third-party advertising data, please review our <Link href="/privacy-policy-rescall" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </p>

            <h2>4. Third-Party Services and Advertisements</h2>
            <p>
              The App is provided for free and is supported by third-party advertising networks, such as Google AdMob. By using the App, you acknowledge and agree that we may display advertisements within the App. These third-party services may collect non-personal, device-specific information as detailed in our Privacy Policy. We are not responsible for the content of these advertisements or the products/services they promote.
            </p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no warranties, expressed or implied, regarding the App's reliability, accuracy, or suitability for your specific needs. We do not guarantee that the App will function uninterrupted, error-free, or that it will effectively serve as an excuse in social situations. Use the App entirely at your own risk.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, D&A Code Design, its developers, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from your use of, or inability to use, the App. This includes, but is not limited to, any social misunderstandings, damaged relationships, or other consequences arising from the use of a simulated call.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content, design, graphics, and code within the App are the intellectual property of D&A Code Design. You may not copy, modify, distribute, sell, or lease any part of our App or included software without our explicit written permission.
            </p>

            <h2>8. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will indicate the &quot;Last updated&quot; date at the top of this page. Your continued use of the App after any changes constitutes your acceptance of the new Terms.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms of Service, please contact us at:
              {" "}
              <a href="mailto:support@d-n-a.com" className="text-blue-600 hover:underline">support@d-n-a.com</a>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}