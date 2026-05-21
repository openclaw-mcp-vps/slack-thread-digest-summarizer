import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Digest Summarizer",
  description: "Daily digest of important Slack thread decisions for engineering managers and remote teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="491f2589-e6b3-460b-a7ab-808038a90b5e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
