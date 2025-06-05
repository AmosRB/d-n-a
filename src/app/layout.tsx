// src/app/layout.tsx
import React from "react"; // ← חובה אם לא משתמשים ב־"use client"
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: 'D&A Site',
  description: 'Scroll site with Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="overflow-x-hidden">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
