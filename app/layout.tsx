import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "FOTOIN",
  description: "Capture Moments, Create Opportunities",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className="bg-gray-200 min-h-svh flex justify-center">
        <div className="w-full max-w-[390px] min-h-svh bg-white relative overflow-x-hidden font-sans">
          {children}
        </div>
      </body>
    </html>
  );
}
