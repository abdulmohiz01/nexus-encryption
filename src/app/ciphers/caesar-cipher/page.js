import Caesar from "../(caesar)/caesar";


export const metadata = {
  title: "Caesar Cipher Decoder",
  description: "Explore the Caesar Cipher decoder, a method where each letter in the plaintext shifts a fixed number of positions down the alphabet. Named after Julius Caesar, who used it for secret communication.",
  keywords: ["Caesar Cipher", "Caesar Cipher Decoder", "Ceasar Cipher translator", "Caesar Cipher Encoder", "Caesar cipher online", "Caesar Cipher Example", "Caesar Cipher calculator", "Caesar Cipher Wheel", "Caesar Cipher decrypt", "Caesar Cipher decryption", "Caesar Cipher Solver", "Caesar Cipher encryption and decryption", "Caesar Cipher tool", "Caesar Cipher converter", "Caesar Cipher in cryptography", "Caesar Cipher generator", "Caesar Cipher maker", "Caesar Cipher key", "Caesar cipher text", "Julius Caesar", "plaintext", "encryption", "cipher methods"],
  author: "Nexus Encryption",
  robots: "index, follow",
  openGraph: {
    title: "Caesar Cipher Decoder",
    description: "Explore the Caesar Cipher decoder, a method where each letter in the plaintext shifts a fixed number of positions down the alphabet. Named after Julius Caesar, who used it for secret communication.",
    type: "website",
    url: "https://nexus-encryption.vercel.app/",
    image: "https://nexus-encryption.vercel.app/_next/image?url=%2Fnexus-1.png&w=640&q=75",
    site_name: "Nexus Encryption",
  },
  canonical: "https://nexus-encryption.vercel.app/ciphers/caesar-cipher",
  language: "en-US",
  category: 'ciphers',
};


const CaesarCipher = () => {
  return (
    <>
      <Caesar />


    </>
  )
}

export default CaesarCipher;
