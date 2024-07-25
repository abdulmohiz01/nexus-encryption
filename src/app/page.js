import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[1600px]">
      <h1>Nexus Encryption </h1>
      <ul>
        <li><Link href={'./ciphers/caesar-cipher'}>Caesar Cipher</Link></li>
      </ul>
    </div>
  );
}
