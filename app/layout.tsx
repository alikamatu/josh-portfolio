import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Josh.designs | Creative Designer Portfolio",
  description: "Award-winning designer specializing in digital experiences, motion design, and creative direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montFont.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}