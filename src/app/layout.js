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
      <head>
        {/* All About Gooogle */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6597722728082254"
          crossorigin="anonymous"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6597722728082254"
          crossorigin="anonymous"></script>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_T}`}></script>
        <Script id='google-analytics'>
          {
            `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.G_T});` 
          }
        </Script>
      </head>
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
