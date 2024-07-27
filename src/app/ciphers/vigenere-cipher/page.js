import Vigenere from "../(vigenere)/vigenere";
import BreadCrumb from "./../../../components/breadcrumb"


export const metadata = {
  title: "Vigenère Cipher Decoder",
  description: "Discover the Vigenère Cipher decoder, a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. Named after Blaise de Vigenère, it is a more secure cipher that uses a keyword to shift letters.",
  author: "Nexus Encryption",
  robots: "index, follow",
  openGraph: {
    title: "Vigenère Cipher Decoder",
    description: "Discover the Vigenère Cipher decoder, a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. Named after Blaise de Vigenère, it is a more secure cipher that uses a keyword to shift letters.",
    type: "website",
    url: "https://nexus-encryption.vercel.app/ciphers/vigenere-cipher",
    site_name: "Nexus Encryption",
  },
  canonical: "https://nexus-encryption.vercel.app/ciphers/vigenere-cipher",
  language: "en-US",
  category: 'ciphers',
};


const VigenereCipher = () => {
  return (
    <>
      <BreadCrumb homeElement="Home" separator={<svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>} capitalizeLinks={true} />
      <Vigenere />
    </>
  )
}

export default VigenereCipher