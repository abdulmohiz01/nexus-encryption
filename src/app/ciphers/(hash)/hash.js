'use client'
import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import CryptoJS from "crypto-js";
import Button from "../../../components/button";

// Custom styled components for MUI
const StyledTextField = styled(TextField)(({ theme }) => ({
    '& label': {
        color: 'white !important',
    },
    '& input': {
        color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ccc',
        },
        '&:hover fieldset': {
            borderColor: '#aaa',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#fff',
        },
    },
    '& .MuiInputBase-input': {
        color: '#fff',
    },
    '& .MuiInputLabel-root': {
        color: 'white !important',
    },
    '& .MuiInputBase-root': {
        color: '#fff',
        '& textarea': {
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent',
            '&::-webkit-scrollbar': {
                width: '6px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                background: 'linear-gradient(90deg, rgba(26, 26, 26, 1) 0%, rgb(95, 95, 95) 50%, rgba(26, 26, 26, 1) 100%)',
                borderRadius: '10px',
            },
        },
    },
}));




const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#555',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#777',
    },
    '&:disabled': {
        color: '#fff', // This ensures the text remains white when disabled
        backgroundColor: '#333', // You can adjust this color as needed
    },
}));


const StyledSelect = styled(Select)(({ theme }) => ({
    color: '#fff',
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ccc',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#aaa',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff',
    },
    '& .MuiSvgIcon-root': {
        color: '#fff',
    },
}));

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    color: 'white !important',
}));



const HashPage = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [hashFunction, setHashFunction] = useState('SHA-256');
    const [isContentsVisible, setIsContentsVisible] = useState(false);
    const [isHashing, setIsHashing] = useState(false);
    const [helper, setHelperText] = useState("");

    const toggleContents = () => {
        setIsContentsVisible(!isContentsVisible);
    };

    const handleHash = () => {
        if (input == "" || input == " ") {
            setHelperText("Please Enter a text to hash.");
            return;
        }
        setIsHashing(true);
        setTimeout(() => {
            try {
                let hashedValue;
                switch (hashFunction) {
                    case 'MD5':
                        hashedValue = CryptoJS.MD5(input);
                        break;
                    case 'SHA-1':
                        hashedValue = CryptoJS.SHA1(input);
                        break;
                    case 'SHA-256':
                        hashedValue = CryptoJS.SHA256(input);
                        break;
                    case 'SHA-512':
                        hashedValue = CryptoJS.SHA512(input);
                        break;
                    case 'RIPEMD-160':
                        hashedValue = CryptoJS.RIPEMD160(input);
                        break;
                    default:
                        throw new Error('Unsupported hash function');
                }
                setOutput(hashedValue.toString());
            } catch (error) {
                setOutput('Error: ' + error.message);
            }
            setIsHashing(false);
        }, 100);
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
        <div className="mx-auto lg:ml-[150px] sm:w-full xl:w-[80%] lg:w-[80%] p-4">
            <h1 className="text-2xl font-semibold text-white mb-4">Hash Functions: MD5, SHA-1, SHA-256, SHA-512 & RIPEMD-160</h1>
            <p className="text-lg mb-4 text-gray-300">
                Explore various hash functions in cryptograhy and generate secure hashes for your data.
            </p>
            <div className="mb-3">
                <button
                    className="bg-transparent text-sm underline text-white px-4 pb-2 rounded-1 mb-2"
                    onClick={toggleContents}
                >
                    {isContentsVisible ? 'Hide Contents' : 'Show Contents of page'}
                </button>
                <div className={`lg:ml-[20px] sm:ml-[20px] text-gray-400 contents-container ${isContentsVisible ? 'open' : 'closed'}`}>
                    <h2 className="text-2xl font-semibold mb-4">Contents</h2>
                    <ol className="list-disc list-inside ">
                        <li><a href="#hash-introduction" className="hover:underline transition-all" onClick={(e) => handleScroll(e, 'hash-introduction')}>Introduction to Hash Functions</a></li>
                        <li><a href="#hash-types" className="hover:underline" onClick={(e) => handleScroll(e, 'hash-types')}>Types of Hash Functions</a></li>
                        <li><a href="#hash-properties" className="hover:underline" onClick={(e) => handleScroll(e, 'hash-properties')}>Properties of Hash Functions</a></li>
                        <li><a href="#hash-applications" className="hover:underline" onClick={(e) => handleScroll(e, 'hash-applications')}>Applications of Hash Functions</a></li>
                        <li><a href="#hash-security" className="hover:underline" onClick={(e) => handleScroll(e, 'hash-security')}>Security Considerations</a></li>
                    </ol>
                </div>
            </div>

            <div id='hasher' className='flex xl:flex-row sm:flex-col gap-4 '>
                <div className="mb-4 xl:w-[50%]">
                    <h3 className="text-xl font-semibold text-white mb-2">Input</h3>
                    <StyledTextField
                        label="Text to Hash"
                        variant="outlined"
                        fullWidth
                        helperText={helper}
                        multiline
                        rows={4}
                        value={input}
                        onChange={(e) => setInput(e.target.value , setHelperText(""))}
                        className="mb-4"
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
                    />
                    <FormControl className="mb-4 w-full">
                        <StyledInputLabel id="hash-function-label">Hash Function</StyledInputLabel>
                        <StyledSelect
                            labelId="hash-function-label"
                            value={hashFunction}
                            onChange={(e) => setHashFunction(e.target.value)}
                            label="Hash Function"
                        >
                            <MenuItem value="MD5">MD5</MenuItem>
                            <MenuItem value="SHA-1">SHA-1</MenuItem>
                            <MenuItem value="SHA-256">SHA-256</MenuItem>
                            <MenuItem value="SHA-512">SHA-512</MenuItem>
                            <MenuItem value="RIPEMD-160">RIPEMD-160</MenuItem>
                        </StyledSelect>
                    </FormControl>
                    <Button onClick={handleHash} buttonText={isHashing ? 'Hashing...' : 'Generate Hash'} />

                </div>

                <div className="mb-4 xl:w-[50%]">
                    <h3 className="text-xl font-semibold text-white mb-2">Output</h3>
                    <StyledTextField
                        label="Hashed Value"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={output}
                        InputProps={{
                            readOnly: true,
                        }}
                        className="mb-4"
                    />
                </div>
            </div>

            {/* Informational content about hash functions */}
            <div className="text-white p-2 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-6">Understanding Hash Functions</h1>

                <section id='hash-introduction'>
                    <h2 className="text-3xl font-semibold mb-4">What is Hash Function?</h2>
                    <p className="text-gray-300">
                        A hash function is a mathematical algorithm that takes an input (or 'message') and returns a fixed-size string of bytes. The output is typically a 'digest' that is unique to the input data. Hash functions are designed to be one-way functions, meaning it's computationally infeasible to reverse the process and obtain the original input from the hash.
                    </p>
                </section>

                <section id='hash-types'>
                    <h2 className="text-3xl font-semibold mb-4">Types of Hash Functions</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>MD5: 128-bit hash function (considered cryptographically broken)</li>
                        <li>SHA-1: 160-bit hash function (deprecated for cryptographic use)</li>
                        <li>SHA-256: Part of the SHA-2 family, produces 256-bit hashes</li>
                        <li>SHA-512: Part of the SHA-2 family, produces 512-bit hashes</li>
                        <li>RIPEMD-160: 160-bit hash function, an alternative to SHA-1</li>
                    </ul>
                </section>

                <section id='hash-properties'>
                    <h2 className="text-3xl font-semibold mb-4">Properties of Hash Functions</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Deterministic: The same input always produces the same hash</li>
                        <li>Fixed Size: The output has a fixed size regardless of input size</li>
                        <li>Efficient: It's quick to compute the hash value for any given input</li>
                        <li>One-Way: It should be computationally infeasible to reverse the hash</li>
                        <li>Collision Resistant: It should be extremely difficult to find two different inputs with the same hash</li>
                    </ul>
                </section>

                <section id='hash-applications'>
                    <h2 className="text-3xl font-semibold mb-4">Applications of Hash Functions</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Password Storage: Storing hashed passwords instead of plaintext</li>
                        <li>Data Integrity: Verifying that data hasn't been tampered with</li>
                        <li>Digital Signatures: Used in the process of creating and verifying digital signatures</li>
                        <li>File or Data Identification: Quickly identifying duplicate files or data</li>
                        <li>Blockchain Technology: Creating unique identifiers for blocks in a blockchain</li>
                    </ul>
                </section>

                <section id='hash-security'>
                    <h2 className="text-3xl font-semibold mb-4">Security Considerations</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Use cryptographically secure hash functions (e.g., SHA-256, SHA-3) for security-critical applications</li>
                        <li>Avoid MD5 and SHA-1 for security purposes as they are considered cryptographically broken</li>
                        <li>For password hashing, use specialized algorithms like bcrypt, scrypt, or Argon2</li>
                        <li>Be aware of potential attacks like collision attacks and preimage attacks</li>
                        <li>Regularly update hash functions as cryptographic standards evolve</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};
export default HashPage;

