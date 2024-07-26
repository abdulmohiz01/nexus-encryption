import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BreadCrumb from "@/components/breadcrumb"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Nexus Encryption",
    template: "%s | Neus Encryption"
  },
  description: "A versatile web app for modular conversion, encoding, and encryption. Perform all operations directly in your browser without server interaction, ensuring speed and privacy. This open-source project is licensed under the MIT License, offering transparency and freedom for community contributions.",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <BreadCrumb homeElement="Home"
          separator={<svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>}
          capitalizeLinks={true} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
