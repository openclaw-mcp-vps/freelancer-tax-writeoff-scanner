import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxScan – Freelancer Tax Writeoff Scanner",
  description: "OCR receipt scanner that categorizes expenses for freelancer tax writeoffs. Upload receipts, get AI-powered tax category suggestions, and export for filing."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ed9efe4b-d1ba-4dae-a915-a7d4da3eb5ef"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
