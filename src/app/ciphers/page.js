import Link from "next/link"



const Ciphers = () => {
  return (
    <div>
      <Link href={'/ciphers/caesar-cipher'}>Caesar Cipher Decoder</Link>
      <Link href={'/ciphers/vigenere-cipher'}>Vigenere Cipher Decoder</Link>
    </div>
  )
}

export default Ciphers