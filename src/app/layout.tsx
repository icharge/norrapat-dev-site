import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Norrapat Nimmanee - Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer with over 10 years of experience specializing in Java, Spring Boot, Angular, ReactJS, NodeJS, and cloud technologies.",
  keywords: [
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "React",
    "NodeJS",
    "Cloud Technologies",
  ],
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
