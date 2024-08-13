'use client'
import Link from "next/link";
import Button from "../components/button";


export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-6  text-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nexus Encryption</h1>
        <p className="text-xl mb-6 text-gray-400">Your go-to solution for secure and efficient encryption methods. Explore our ciphers below!</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Link href="/ciphers" >
          <Button buttonText={'Explore Ciphers'} />
        </Link>
      </div>
    </div>
  );
}
