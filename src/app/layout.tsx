import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green Onions Restaurant | Madhubani's Best Family Dining",
  description: "Experience premium, hygienic, and warm family dining at Green Onions Restaurant in Madhubani, Bihar. Enjoy fresh Indian, Chinese, and local delicacies with fast self-delivery and easy WhatsApp ordering.",
  keywords: ["Green Onions Restaurant", "Madhubani Restaurant", "Family Dining Madhubani", "Best Restaurant in Madhubani", "WhatsApp Food Order Madhubani"],
  authors: [{ name: "Green Onions" }],
  openGraph: {
    title: "Green Onions Restaurant | Madhubani's Best Family Dining",
    description: "Premium family dining in Madhubani, Bihar. Fresh ingredients, hygienic kitchen, self-delivery, and online ordering via WhatsApp.",
    type: "website",
    locale: "en_IN",
    url: "https://greenonions.in",
    siteName: "Green Onions Restaurant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-100 text-ink-800 font-sans">
        {children}
      </body>
    </html>
  );
}
