import Caesar from "../(caesar)/caesar";
import BreadCrumb from "./../../../components/breadcrumb";

export const metadata = {
  title: "Caesar Cipher Decoder",
  description: "Explore the Caesar Cipher decoder, where each letter rotates a fixed number of positions. Named after Julius Caesar for secret communication.",
  author: "Nexus Encryption",
  robots: "index, follow",
  openGraph: {
    title: "Caesar Cipher Decoder",
    description: "Explore the Caesar Cipher decoder, where each letter rotates a fixed number of positions. Named after Julius Caesar for secret communication.",
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
      <BreadCrumb />
      <Caesar />
    </>
  )
}

export default CaesarCipher;
