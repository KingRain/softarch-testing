import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Software Testing Guide — PyTest, Selenium & Jenkins",
  description: "A minimal, jargon-free practical guide to unit testing, Selenium web automation, and Jenkins CI/CD.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-paper text-charcoal antialiased selection:bg-lime-voltage selection:text-forest-ink">
        {children}
      </body>
    </html>
  );
}
