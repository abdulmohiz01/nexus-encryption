'use client';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Button from "@mui/material/Button"
import ArbitraryCaesarCipher from "../../../components/arbitrary-substitution";




const Caesar = () => {
    const [inputText, setInputText] = useState("");
    const [rotations, setRotations] = useState([]);
    const [helper, setHelper] = useState("");
    const [isContentsVisible, setIsContentsVisible] = useState(false);
    const [isRotationsVisible, setIsRotationsVisible] = useState(false); // New state for rotations visibility

    const toggleContents = () => {
        setIsContentsVisible(!isContentsVisible);
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        if (e.target.value.includes("<script>") || e.target.value.includes("{") || e.target.value.includes("}") || e.target.value.includes(";")) {
            setHelper("Sorry, Special Characters are not allowed.");
            return;
        }
        setHelper("");
    };

    const handleEncrypt = () => {
        let text = inputText.toLowerCase();
        if (text === "" || text === " ") {
            setHelper("Please Enter text first!");
            return;
        } else {
            setHelper("");
        }

        let allRotations = [];

        for (let i = 1; i <= 25; i++) {
            let transformed = "";
            for (let j = 0; j < text.length; j++) {
                let charCode = text.charCodeAt(j);
                if (charCode >= 97 && charCode <= 122) { // a-z
                    transformed += String.fromCharCode(((charCode - 97 + i) % 26) + 97);
                } else {
                    transformed += text[j];
                }
            }
            allRotations.push({ rotation: i, transformed });
        }

        setRotations(allRotations);
        setIsRotationsVisible(true); // Show rotations after encryption
    };

    const handleScroll = (e, id) => {
        e.preventDefault();
        const targetElement = document.getElementById(id);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className='lg:ml-[150px]  xl:w-[60%] lg:w-[80%] '>
                <h1 className="p-5 text-3xl font-semibold">Caesar Cipher: Decoder and Encoder</h1>
                <div className="mb-6">
                    <button
                        className="bg-transparent text-sm underline text-white px-4 pb-2 rounded-1 mb-2"
                        onClick={toggleContents}
                    >
                        {isContentsVisible ? 'Hide Contents' : 'Show Contents of page'}
                    </button>
                    <div className={`lg:ml-[20px] sm:ml-[20px] text-gray-400 contents-container ${isContentsVisible ? 'open' : 'closed'}`}>
                        <h2 className="text-2xl font-semibold mb-4">Contents</h2>
                        <ol className="list-disc list-inside ">
                            <li><a href="#decoder" className="hover:underline transition-all" onClick={(e) => handleScroll(e, 'decoder')}>Caesar Cipher Decoder</a></li>
                            <li><a href="#introduction" className="hover:underline transition-all" onClick={(e) => handleScroll(e, 'introduction')}>Introduction</a></li>
                            <li><a href="#caesar-cipher-history" className="hover:underline" onClick={(e) => handleScroll(e, 'caesar-cipher-history')}>History</a></li>
                            <li><a href="#caesar-cipher-example" className="hover:underline" onClick={(e) => handleScroll(e, 'caesar-cipher-example')}>Example</a></li>
                            <li><a href="#caesar-cipher-weakness" className="hover:underline" onClick={(e) => handleScroll(e, 'caesar-cipher-weakness')}>Weakness</a></li>
                            <li><a href="#improving-caesar-cipher-security" className="hover:underline" onClick={(e) => handleScroll(e, 'improving-caesar-cipher-security')}>Improving Security</a></li>
                            <li><a href="#example-arbitrary-caesar-cipher-substitution" className="hover:underline" onClick={(e) => handleScroll(e, 'example-arbitrary-caesar-cipher-substitution')}>Example of Arbitrary Substitution</a></li>
                            <li><a href="#arbitrary-ceasar-cipher" className="hover:underline" onClick={(e) => handleScroll(e, 'arbitrary-ceasar-cipher')}>Arbitrary Substitution</a></li>
                        </ol>
                    </div>
                </div>

                <div id='decoder' className="flex flex-col gap-5 items-start h-auto w-full p-5">
                    <TextField
                        className='sm:w-full xl:w-full'
                        name='text'
                        value={inputText}
                        onChange={handleInputChange}
                        id="outlined-basic"
                        label="Enter Your Text Here"
                        variant="outlined"
                        helperText={helper}
                        multiline
                        minRows={2}
                        maxRows={10}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'gray',
                                },
                                '& input': {
                                    color: 'white',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white',
                            },
                            '& .MuiFormHelperText-root': {
                                color: 'red',
                            },
                        }}
                        InputProps={{
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{
                            style: { color: 'white' },
                        }}
                    />
                    <Button
                        onClick={handleEncrypt}
                        variant="contained"
                        sx={{
                            backgroundColor: 'gray',
                            color: 'white',
                            fontWeight: 'bold',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.5rem',
                            mt: '1rem',
                            width: '200px',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                backgroundColor: 'lightgray',
                                color: 'black'
                            },
                        }}
                    >
                        Encrypt
                    </Button>

                </div>
                {/* ---------------------ROTATIONS--------------------- */}
                <div className={`rotations-container ${isRotationsVisible ? 'open' : 'closed'}`}>
                    <div className="w-full">
                        <div className="xl:w-full sm:w-full">
                            <hr className="w-full border-t border-gray-300 my-5" />
                            <h1 className="text-2xl font-semibold mb-3 sm:px-2">Transformation</h1>
                            <div className='flex items-center justify-around md:p-2 sm:py-1 sm:px-2 gap-2'>
                                <div className='sm:w-[20%] md:w-[15%]'>
                                    <h2>Rotations</h2>
                                </div>
                                <div className='sm:w-[70%] w-[80%]'>
                                    <h2>Transformed Text</h2>
                                </div>
                            </div>
                            {rotations.map((rotation, index) => (
                                <div key={index} className="flex flex-wrap justify-around h-auto items-center bg-gray-100 md:m-3 sm:mx-4 sm:p-2 px-6 mb-2 rounded-md shadow gap-3">
                                    <h3 className="text-gray-700 h-full font-semibold w-[30%] sm:w-[52px] p-2">ROT{rotation.rotation}</h3>
                                    <div className='w-[2px] sm:h-[25px] md:h-[35px] bg-gray-800'></div>
                                    <p className="text-gray-700 w-[80%] sm:w-[69%]">{rotation.transformed}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --------------------Explanation------------------- */}
                <div className='w-full  sm:p-2 px-6'>
                    <h1 className="text-4xl font-bold my-6">Caesar Cipher: A Classical Encryption Technique</h1>

                    <section id="introduction" className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">What is Caesar Cipher?</h2>
                        <p className="text-lg leading-relaxed text-gray-400">
                            The Caesar Cipher is a type of classical encryption technique which uses either <Tooltip title="Substitution cipher replaces each letter of the plaintext with another letter." placement='top'><span className='underline'>substitution</span></Tooltip> or <Tooltip title='Transposition cipher rearranges the letters of the plaintext according to a specific system.' placement='top'><span className='underline'>transposition</span></Tooltip> only. Substitution ciphers can be further divided into <Tooltip title='Monoalphabetic cipher uses a single fixed substitution for each letter of the plaintext.' placement='top'><span className='underline'>monoalphabetic</span></Tooltip> and <Tooltip title='Polyalphabetic cipher employs multiple substitution alphabets to encrypt the plaintext, changing the substitution at intervals.' placement='top'><span className='underline'>polyalphabetic</span></Tooltip> ciphers.
                        </p>
                    </section>

                    <section id="caesar-cipher-history" className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">History</h2>
                        <p className="text-lg leading-relaxed text-gray-400">
                            The Caesar Cipher is the earliest known substitution cipher, used by Julius Caesar. It replaces each letter in the plaintext with the letter that is a fixed number of positions down the alphabet. For example, with a key (K) of 10, 'a' becomes 'k'.
                        </p>
                    </section>

                    <section id="caesar-cipher-example" className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Example</h2>
                        <p className="text-lg leading-relaxed text-gray-400">
                            Given the secret message P: "hello", and the key K: "10":
                        </p>
                        <p className="text-lg leading-relaxed mb-4 text-gray-300">
                            <strong>Plaintext:</strong> hello<br />
                            <strong>Key:</strong> 10<br />
                            <strong>Encrypted Message (Ciphertext):</strong> rovvy
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300">
                            The formula used is:
                        </p>
                        <p className="text-lg leading-relaxed mb-4 text-gray-300">
                            <code>C = E(P) = (P + K) mod 26</code> or <code>C = E(P) = (P - K) mod 26</code>
                        </p>
                        <p className="text-lg leading-relaxed mb-4 text-gray-300">
                            To understand modular operations, consider this example: If 6 hours pass, what time is it? A common mistake would be to answer 13, but on a 12-hour clock, it would be 1: <code>7 + 6 mod 12 = 1</code>. Similarly, the Caesar cipher uses modulus 26 with the English alphabet.
                        </p>
                    </section>

                    <section id="caesar-cipher-weakness" className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Why Caesar Cipher is so Weak?</h2>
                        <p className="text-lg leading-relaxed text-gray-300">
                            The key size is too small (only 25 possible keys), making it easily breakable by brute force.
                        </p>
                    </section>

                    <section id="improving-caesar-cipher-security" className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">How can we improve Caesar Cipher's security?</h2>
                        <p className="text-lg leading-relaxed text-gray-300">
                            One way to improve security is to use a monoalphabetic cipher that uses an arbitrary substitution. This method involves shuffling the letters in the plaintext by mapping them to a different, random ciphertext letter.
                        </p>
                        <p className="text-lg leading-relaxed mb-4 text-gray-300">
                            For instance, you can set up a secret phrase or word as the secret key. Let's use "MARKET" as our secret key. The remaining alphabet letters follow the last character of the key (excluding those already used).
                        </p>
                    </section>

                    <section id="example-arbitrary-caesar-cipher-substitution" className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Example of Arbitrary Substitution</h2>
                        <p className="text-lg leading-relaxed text-gray-300">
                            Secret key: MARKET<br />
                            Remaining letters: <br />
                            <strong>M A R K E T B C D F G H I J L N O P Q S U V W X Y Z</strong>
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300">
                            The secret key "MARKET" is followed by the rest of the alphabet, excluding letters already used in the key.
                        </p>
                    </section>
                </div>
                <h1 className='p-5 text-3xl font-semibold'>Arbitrary Ceaser Cipher</h1>
            </div>
            <div id="arbitrary-ceasar-cipher" >
                <ArbitraryCaesarCipher />
            </div>
        </>
    );
};

export default Caesar;
