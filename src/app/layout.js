import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./../components/header"
import Footer from "./../components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://nexusencryption.com'),
  icon: '/favicon.ico',
  title: {
    default: "Nexus Encryption",
    template: "%s - Nexus Encryption"
  },
  description: "A versatile web app for modular conversion, encoding, and encryption. Perform operations in your browser with speed and privacy.",
  twitter: {
    card: "summary_large_image"
  },
  canonical: "https://nexusencryption.com/",
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
