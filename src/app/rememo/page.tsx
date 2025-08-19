// app/apps/rememo/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReMEMO – Smart Voice & Text Reminders",
  description:
    "ReMEMO lets supporters send scheduled voice and text reminders to the people they care for. Simple, private, and reliable.",
  openGraph: {
    title: "ReMEMO – Smart Voice & Text Reminders",
    description:
      "ReMEMO lets supporters send scheduled voice and text reminders to the people they care for. Simple, private, and reliable.",
    type: "website",
    url: "/apps/rememo",
  },
  robots: { index: true, follow: true },
};

export default function RememoAppPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 text-gray-900">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 text-center">
        <div className="relative h-24 w-24">
          {/* Place the app icon at /public/rememo-icon.png */}
          <Image src="/rememo-icon.png" alt="ReMEMO icon" fill className="rounded-2xl object-contain" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">ReMEMO</h1>
        <p className="max-w-3xl text-base text-gray-600">
          ReMEMO helps supporters create and schedule short voice or text reminders for supported users. When the time
          comes, the app plays the recording or shows the message—even if the app is closed.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="/privacy-policy-rememo"
            className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-rememo"
            className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Terms of Service
          </a>
          <a
            href="/apps"
            className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            ← All Apps
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {[
          {
            title: "Two roles",
            body:
              "Supporters create and send reminders. Supported users receive and play them at the scheduled time.",
          },
          {
            title: "Voice first",
            body:
              "Record quick audio notes for maximum clarity. Messages are stored securely in the cloud.",
          },
          {
            title: "Scheduled & reliable",
            body:
              "Notifications trigger playback even when the app is closed (using push + background audio service).",
          },
          {
            title: "Private by design",
            body:
              "We only collect phone numbers, usernames, and (optional) Google emails—plus your messages/recordings.",
          },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{card.body}</p>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm text-gray-700">
          <li>Install the app on both devices (supporter & supported).</li>
          <li>Sign in with your phone number (Google sign‑in optional).</li>
          <li>From the supporter device, pick a contact (or number), record a short message, and set date & time.</li>
          <li>At the scheduled time, the supported device receives a notification and plays the recording or shows the text.</li>
          <li>Manage, edit, or cancel reminders anytime from the supporter device.</li>
        </ol>
      </section>

      {/* Usage notes */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Usage notes</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-gray-700">
          <li>Allow <span className="font-medium">Contacts</span> permission to select recipients by name.</li>
          <li>Allow <span className="font-medium">Microphone</span> permission to record voice messages.</li>
          <li>Keep notifications enabled so scheduled reminders arrive on time.</li>
          <li>Data is stored in Firebase; push notifications are handled by OneSignal.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl border border-gray-200 p-6 text-center">
        <p className="text-sm text-gray-600">Public downloads are coming soon.</p>
        <div className="mt-3 flex items-center justify-center gap-3">
          <a
            href="mailto:amosbahar@gmail.com?subject=ReMEMO%20Access"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Request early access
          </a>
          <a
            href="https://www.dna-coding.com/apps"
            className="rounded-xl px-4 py-2 text-sm font-medium text-blue-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Apps Hub
          </a>
        </div>
      </section>

      <footer className="mt-16 border-t pt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} D&A Code Design · ReMEMO
      </footer>
    </main>
  );
}
