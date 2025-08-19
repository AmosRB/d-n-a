// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ReMEMO",
  description:
    "Learn how ReMEMO collects, uses, shares, and protects your information, including phone numbers, usernames, emails, text messages, and voice recordings.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy – ReMEMO",
    description:
      "Learn how ReMEMO collects, uses, shares, and protects your information, including phone numbers, usernames, emails, text messages, and voice recordings.",
    type: "article",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-gray-900">
      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: <span className="font-medium">[Insert Date]</span></p>

      <p className="mt-6 leading-7">
        ReMEMO ("we", "our", "us") values your privacy. This Privacy Policy explains what information we
        collect, how we use it, with whom we share it, and how you can exercise your rights. By using ReMEMO,
        you agree to this Privacy Policy.
      </p>

      {/* Quick nav */}
      <nav className="mt-8 grid gap-2 sm:grid-cols-2" aria-label="Section navigation">
        {[
          ["Information We Collect", "collect"],
          ["How We Use Information", "use"],
          ["Sharing with Third Parties", "sharing"],
          ["Data Retention & Deletion", "retention"],
          ["Sensitive Permissions", "permissions"],
          ["Security", "security"],
          ["Children’s Privacy", "children"],
          ["Changes", "changes"],
          ["Contact", "contact"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={`#${href}`}
            className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium hover:bg-gray-50"
          >
            {label}
          </a>
        ))}
      </nav>

      <section id="collect" className="mt-12">
        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <span className="font-medium">Personal Information</span>: phone numbers, usernames, and (if you sign in with Google)
            email addresses.
          </li>
          <li>
            <span className="font-medium">User Content</span>: text messages and voice recordings you create, send, or receive in the app.
          </li>
          <li>
            <span className="font-medium">Technical</span>: device identifiers, app version, and basic diagnostics required to
            provide and improve the service.
          </li>
        </ul>
      </section>

      <section id="use" className="mt-12">
        <h2 className="text-2xl font-semibold">How We Use Information</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>To identify and authenticate users.</li>
          <li>To deliver, display, and synchronize reminders, text messages, and voice recordings.</li>
          <li>To send push notifications and play scheduled audio reminders.</li>
          <li>To operate, maintain, and improve the app’s reliability and performance.</li>
          <li>To comply with legal obligations and enforce our terms.</li>
        </ul>
      </section>

      <section id="sharing" className="mt-12">
        <h2 className="text-2xl font-semibold">Sharing with Third Parties</h2>
        <p className="mt-4">
          We do not sell your personal data. We share information only with trusted providers necessary to
          deliver core functionality:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <span className="font-medium">Firebase (Google)</span> — authentication (e.g., phone/Google sign-in), cloud database, and file storage for
            messages and audio files.
          </li>
          <li>
            <span className="font-medium">OneSignal</span> — push notifications delivery and notification-related services.
          </li>
          <li>
            <span className="font-medium">Service Providers</span> — limited access strictly to perform services on our behalf, under confidentiality
            obligations.
          </li>
        </ul>
      </section>

      <section id="retention" className="mt-12">
        <h2 className="text-2xl font-semibold">Data Retention & Deletion</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Your messages and recordings are stored in secure cloud infrastructure.</li>
          <li>We retain information for as long as needed to provide the service or as required by law.</li>
          <li>
            You can request deletion of your account and associated data by emailing
            {" "}
            <a className="underline" href="mailto:support@rememo.app">support@rememo.app</a>.
          </li>
          <li>After deletion, data will be removed from active systems and backups within a reasonable period.</li>
        </ul>
      </section>

      <section id="permissions" className="mt-12">
        <h2 className="text-2xl font-semibold">Sensitive Permissions</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <span className="font-medium">Contacts</span>: used to let you select recipients from your phonebook. Contact data is used solely for
            sending messages/reminders.
          </li>
          <li>
            <span className="font-medium">Microphone</span>: used to record and send voice messages.
          </li>
        </ul>
      </section>

      <section id="security" className="mt-12">
        <h2 className="text-2xl font-semibold">Security</h2>
        <p className="mt-4">
          We apply industry-standard safeguards to protect your information. However, no method of transmission or
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section id="children" className="mt-12">
        <h2 className="text-2xl font-semibold">Children’s Privacy</h2>
        <p className="mt-4">
          ReMEMO is not intended for children under 13, and we do not knowingly collect personal information from
          children.
        </p>
      </section>

      <section id="changes" className="mt-12">
        <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
        <p className="mt-4">
          We may update this Privacy Policy from time to time. Significant changes will be communicated within the
          app or via email.
        </p>
      </section>

      <section id="contact" className="mt-12">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4">
          Questions about this Privacy Policy? Contact us at
          {" "}
          <a className="underline" href="mailto:support@rememo.app">support@rememo.app</a>.
        </p>
      </section>

      <footer className="mt-16 border-t pt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} ReMEMO. All rights reserved.
      </footer>
    </main>
  );
}
