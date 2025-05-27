import './globals.css';

export const metadata = {
  title: 'D&A Site',
  description: 'Scroll site with Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
        />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
