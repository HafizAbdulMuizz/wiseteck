import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata = {
  title: "WISE-Teck | Technology, Incubation & Professional Services",
  description:
    "WISE-Teck is the technology, incubation, skills development, and professional services platform of WISE Education Society, transforming learning into earning.",
  keywords: [
    "WISE-Teck",
    "WISE Education Society",
    "Incubation",
    "Technology Services",
    "Skills Development",
    "NAVTTC",
    "Lahore",
    "Pakistan",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#4F5B6A] selection:bg-[#5F2DEE]/15 selection:text-[#0B1F3A]">
        {children}
      </body>
    </html>
  );
}
