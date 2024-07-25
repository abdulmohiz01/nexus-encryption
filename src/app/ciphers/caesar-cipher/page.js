import Caesar from "../(caesar)/page";

// export const metadata = {
//   title: 'Caesar Cipher Decoder | Nexus Encryption',
//   description: 'Explore the Caesar Cipher decoder, a method where each letter in the plaintext shifts a fixed number of positions down the alphabet. Named after Julius Caesar, who used it for secret communication.',
//   category: 'ciphers',
// }
export const metadata = {
  title: "Caesar Cipher",
  description: "Caesar description",
};

const CaesarCipher = () => {
  return (
    <>
      <Caesar />
    </>
  )
}

export default CaesarCipher;
