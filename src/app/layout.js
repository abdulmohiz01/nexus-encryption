import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./../components/header"
import Footer from "./../components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://nexusencryption.com'),
  icon: '/favicon.ico',
  title: {
    default: "Nexus Encryption",
    template: "%s - Nexus Encryption"
  },
  description: "A versatile web app for modular conversion, encoding, and encryption. Perform all operations directly in your browser without server interaction, ensuring speed and privacy. This open-source project is licensed under the MIT License, offering transparency and freedom for community contributions. Explore our blogs related to tech and information security for the latest insights and updates.",
  twitter: {
    card: "summary_large_image"
  },
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
