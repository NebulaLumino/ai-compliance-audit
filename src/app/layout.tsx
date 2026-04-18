import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compliance Audit",
  description: "AI-powered Compliance Audit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}