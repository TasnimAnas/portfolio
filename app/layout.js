import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Tasnim Ur Rahaman Anas",
  description:
    "Portfolio website of software engineer Tasnim Ur Rahaman Anas who is a full stack, front end, back end, machine learning developer",
  keywords: "Tasnim, Anas, Software, Engineer, Machine, Learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
