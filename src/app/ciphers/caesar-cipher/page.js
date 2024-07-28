import Caesar from "../(caesar)/caesar";
import BreadCrumb from "./../../../components/breadcrumb";

export const metadata = {
  title: "Caesar Cipher Decoder",
  description: "Explore the Caesar Cipher decoder, a method where each letter in the plaintext shifts a fixed number of positions down the alphabet. Named after Julius Caesar, who used it for secret communication.",
  author: "Nexus Encryption",
  robots: "index, follow",
  openGraph: {
    title: "Caesar Cipher Decoder",
    description: "Explore the Caesar Cipher decoder, a method where each letter in the plaintext shifts a fixed number of positions down the alphabet. Named after Julius Caesar, who used it for secret communication.",
    type: "website",
    url: "https://nexusencryption.com/",
    image: "https://nexusencryption.com/_next/image?url=%2Fnexus-1.png&w=640&q=75",
    site_name: "Nexus Encryption",
  },
  canonical: "https://nexusencryption.com/ciphers/caesar-cipher",
  language: "en-US",
  category: 'ciphers',
};


const CaesarCipher = () => {
  return (
    <>
      <BreadCrumb homeElement="Home" separator={<svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>} capitalizeLinks={true} />
      <Caesar />
    </>
  )
}

export default CaesarCipher;
