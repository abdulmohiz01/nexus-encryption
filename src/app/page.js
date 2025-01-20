'use client';
import { useState } from "react";
import Link from "next/link";
import Button from "../components/button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import FAQSection from "../components/faq";

function createData(name, classicalCiphers, modernCiphers) {
  return { name, classicalCiphers, modernCiphers };
}

const rows = [
  createData("Security Level", "Low", "High"),
  createData("Example Algorithm", "Caesar, Vigenère", "AES, RSA, Hash Functions"),
  createData("Computational Needs", "Minimal", "High"),
];







export default async function Home() {

  return (
    <div className="flex flex-col h-auto lg:ml-[250px] xl:w-[60%] lg:w-[60%] sm:px-[20px] text-gray-100">
      {/* <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nexus Encryption</h1>
        <p className="text-xl mb-6 text-gray-400">Your go-to solution for secure and efficient encryption methods. Explore our ciphers below!</p>
      </div> */}

      {/* <div className="flex flex-col items-center gap-4">
        <Link href="/ciphers" >
          <Button buttonText={'Explore Ciphers'} />
        </Link>
      </div> */}

      <div className='text-left md:pt-[50px] sm:pt-[40px] leading-relaxed '>
        <h1 className="lg:text-[2.7vw] md:text-[3.7vw] sm:text-[25px] ">Ciphers: Types, Uses, and Online Tools</h1>
        <p className="md:text-[20px] font-[500] sm:text-[17px] "><strong>Ciphers are structured methods for encrypting and decrypting information to ensure data confidentiality.</strong></p>
        <p className="md:text-[20px] sm:text-[17px]"> They transform plaintext into ciphertext, which is unreadable without a corresponding decryption method. Modern examples include AES, RSA, and hash functions, while classical methods include Caesar, Rail fence and Vigenère ciphers.</p>
      </div>
      <div className='text-left md:pt-[50px] sm:pt-[40px] leading-relaxed '>
        <h1 className="lg:text-[2.7vw] md:text-[3.7vw] sm:text-[25px]  ">What Is a Cipher?</h1>
        <p className="md:text-[20px]  sm:text-[17px]"><strong>A cipher is an algorithmic technique used to secure data through encryption or decryption.</strong></p>
        <p className="md:text-[20px] sm:text-[17px]">It converts plaintext (human-readable data) into ciphertext (unreadable data), ensuring privacy during communication or storage. Ciphers are the cornerstone of cryptographic systems, enabling secure digital interactions and protecting sensitive information.</p>
      </div>
      <div className='text-left md:pt-[50px] sm:pt-[40px] leading-relaxed '>
        <h2 className="lg:text-[2.7vw] md:text-[3.7vw] sm:text-[25px]  ">Types of Ciphers</h2>
        <h3 className='lg:text-[2.7vw] md:text-[2vw] sm:text-[20px] ' >Classical Ciphers</h3>
        <ol className="md:text-[20px] sm:text-[17px]">
          <li><strong>1. Caesar Cipher:</strong> Replaces each letter in the plaintext by shifting it a fixed number of positions in the alphabet.</li>
          <li><strong>2. Vigenere Cipher:</strong> Applies a keyword to encrypt text using a repetitive pattern, adding complexity.</li>
          <li><strong>3. Rail Fence Cipher:</strong> Encodes text by arranging it in a zigzag pattern across multiple rows, then reading it sequentially.</li>
        </ol>
      </div>
      <div className='text-left md:pt-[50px] sm:pt-[40px] leading-relaxed '>
        <h3 className='lg:text-[2.7vw] md:text-[2vw] sm:text-[20px] ' >Modern Ciphers</h3>
        <ol className="md:text-[20px] pl-[20px]">
          <li><strong>1. RSA Algorithm:</strong> Replaces each letter in the plaintext by shifting it a fixed number of positions in the alphabet.</li>
          <li><strong>2. AES (Advanced Encryption Standard):</strong> Applies a keyword to encrypt text using a repetitive pattern, adding complexity.</li>
          <li><strong>3. DES (Data Encryption Standard):</strong> Encodes text by arranging it in a zigzag pattern across multiple rows, then reading it sequentially.</li>
          <li><strong>4. Hash Functions:</strong> Encodes text by arranging it in a zigzag pattern across multiple rows, then reading it sequentially.</li>
        </ol>
      </div>
      <div className='text-left md:pt-[50px] sm:pt-[40px] leading-relaxed '>
        <h2 className='lg:text-[2.7vw] md:text-[3.7vw] sm:text-[25px]' >How Are Ciphers Used?</h2>
        <p className='md:text-[20px] sm:text-[17px]' ><strong>Ciphers play an essential role in securing communication and protecting data.</strong> They are used for:</p>
        <ul className="md:text-[20px] sm:text-[17px]">
          <li>1. Encrypting sensitive information during online exchanges.</li>
          <li>2. Authenticating users through cryptographic keys.</li>
          <li>3. Protecting stored data from unauthorized access.</li>
          <li>4. Supporting digital signatures and ensuring transactional security in financial systems.</li>
        </ul>
      </div>
      <div className='text-left md:pt-[50px] sm:pt-[40px] leading-relaxed '>
        <h2 className='lg:text-[2.7vw] md:text-[3.7vw] sm:text-[25px]' >Cipher Tools on Out Website</h2>
        <p className='md:text-[20px] sm:text-[17px]' >Explore our suite of online cipher tools for efficient encryption and decryption:</p>
        <ol className="md:text-[20px] sm:text-[17px]">
          <li><strong>1. Caesar Cipher Tool:</strong> Encrypt text by shifting letters in the alphabet. <Link className="underline" href={'/ciphers/caesar-cipher'}>[Try it here.]</Link></li>
          <li><strong>2. Vigenère Cipher Tool:</strong> Use a keyword to secure text with a patterned encryption. <Link className="underline" href={'/ciphers/vigenere-cipher'}>[Access it here.]</Link></li>
          <li><strong>3. Rail Fence Cipher Tool:</strong> Encode text by arranging it in a zigzag format. <Link className="underline" href={'/ciphers/rail-fence-cipher'}>[Explore it here.]</Link></li>
          <li><strong>4. RSA Encryption Tool:</strong> Secure data using public-key cryptography. <Link className="underline" href={'/ciphers/rsa-algorithm'}>[Test it here.]</Link></li>
          <li><strong>5. AES Encryption Tool:</strong> Protect your data with advanced symmetric encryption. <Link className="underline" href={'/ciphers/advanced-encryption-standard'}>[Try it here.]</Link></li>
        </ol>
      </div>
      <div className='text-left md:pt-[50px] sm:pt-[40px] leading-relaxed '>
        <h2 className='lg:text-[2.7vw] md:text-[3.7vw] sm:text-[25px]' >Comparison of Classical and Modern Ciphers</h2>
        <TableContainer sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "hidden"
        }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{
              backgroundColor: "rgb(70, 70, 70)"
            }}   >
              <TableRow>
                <TableCell sx={{ color: "white" }}>Aspect</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>Classical Ciphers</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>Modern Ciphers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0, color: 'white' } }}
                >
                  <TableCell component="th" scope="row" sx={{ color: "white" }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>{row.classicalCiphers}</TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>{row.modernCiphers}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='text-left md:pt-[50px] sm:pt-[40px] leading-relaxed '>
        <h2 className='lg:text-[2.7vw] md:text-[3.7vw] sm:text-[25px]' >Why Use Online Cipher Tools</h2>
        <p className='md:text-[20px] sm:text-[17px]'><strong>Online cipher tools simplify encryption and decryption tasks, making them accessible to everyone.</strong> Benefits include:</p>
        <ol className="md:text-[20px] sm:text-[17px]">
          <li>1. Quick text processing for educational or practical purposes.</li>
          <li>2. Understanding the workings of classical and modern cryptographic methods.</li>
          <li>3. Experimenting with encryption techniques to gain cybersecurity insights.</li>
        </ol>
      </div>

      <FAQSection />

    </div>
  );
}
