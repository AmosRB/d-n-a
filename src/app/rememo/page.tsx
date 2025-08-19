import Image from "next/image";
import Link from "next/link";

export default function RememoPage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#B8DBFF", color: "#0f172a" }}
    >
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <div className="text-center">
          <Image
            src="/rememo/rememo_icon.png"
            alt="ReMEMO icon"
            width={72}
            height={72}
            className="mx-auto rounded-xl"
          />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">ReMEMO</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg">
            ReMEMO helps supporters create and schedule short voice or text reminders
            for supported users. When the time comes, the app plays the recording or
            shows the message — even if the app is closed.
          </p>

          {/* Top links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/privacy-policy-rememo"
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                border: "2px solid #FFB300",
                background: "#F2E9C2",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-rememo"
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                border: "2px solid #FFB300",
                background: "#F2E9C2",
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/phone-apps"
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                border: "2px solid #FFB300",
                background: "#F2E9C2",
              }}
            >
              ← All Apps
            </Link>
          </div>
        </div>

        {/* Feature cards */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
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
                "Notifications trigger playback even when the app is closed (push + background audio service).",
            },
            {
              title: "Private by design",
              body:
                "We only collect phone numbers, usernames, and (optional) Google emails — plus your messages/recordings.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl p-5"
              style={{
                border: "3px solid #FFB300",
                background: "#F2E9C2",
              }}
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="mt-2">{card.body}</p>
            </article>
          ))}
        </section>

        {/* How it works */}
        <section className="mt-12">
          <h2 className="text-2xl font-extrabold">How it works</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6">
            <li>Install the app on both devices (supporter & supported).</li>
            <li>Create a voice or text reminder, set date & time, choose the recipient.</li>
            <li>
              When the time arrives, the app plays the voice message or shows the text
              reminder automatically.
            </li>
          </ol>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-6 text-center text-xs opacity-80">
          © {new Date().getFullYear()} D&amp;A Code Design · ReMEMO
        </footer>
      </div>
    </main>
  );
}
