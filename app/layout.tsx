import type { Metadata } from "next";
import { Geist, Geist_Mono, Karla } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const karla = Karla({ variable: "--font-karla", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OTP Loginauth",
  description: "OTP SIGNUP LOGIN PAGE",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${karla.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
