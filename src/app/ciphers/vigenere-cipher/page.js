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
    url: "https://nexusencryption.com/ciphers/vigenere-cipher",
    site_name: "Nexus Encryption",
  },
  canonical: "https://nexusencryption.com/ciphers/vigenere-cipher",
  language: "en-US",
  category: 'ciphers',
};


const VigenereCipher = () => {
  return (
    <>
      <BreadCrumb />
      <Vigenere />
    </>
  )
}

export default VigenereCipher