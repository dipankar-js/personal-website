import type { Metadata } from "next";
import { Schibsted_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const grotesk = Schibsted_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dipankar Barman · Senior Full-Stack Engineer",
  description:
    "Senior full-stack engineer building scalable platforms for products used at global scale.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
