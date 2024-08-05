'use client'
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import CryptoJS from "crypto-js";

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
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#555',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#777',
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

const parseKey = (key, format) => {
    switch (format) {
        case 'utf8':
            return CryptoJS.enc.Utf8.parse(key);
        case 'hex':
            return CryptoJS.enc.Hex.parse(key);
        case 'binary':
            return CryptoJS.enc.Base64.parse(key);
        default:
            throw new Error('Unsupported key format');
    }
};

const aesEncrypt = (plaintext, key, keyFormat, mode, iv = '', outputFormat = 'base64') => {
    const parsedKey = parseKey(key, keyFormat);
    let options = { mode: CryptoJS.mode[mode], padding: CryptoJS.pad.Pkcs7 };

    if (mode !== 'ECB') {
        iv = iv || CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
        options.iv = CryptoJS.enc.Hex.parse(iv);
    }

    const encrypted = CryptoJS.AES.encrypt(plaintext, parsedKey, options);
    const result = outputFormat === 'hex' ? encrypted.ciphertext.toString(CryptoJS.enc.Hex) : encrypted.toString();

    return { result, iv };
};

const aesDecrypt = (ciphertext, key, keyFormat, mode, iv = '', inputFormat = 'base64') => {
    const parsedKey = parseKey(key, keyFormat);
    let options = { mode: CryptoJS.mode[mode], padding: CryptoJS.pad.Pkcs7 };

    if (mode !== 'ECB') {
        if (!iv) throw new Error('IV is required for this mode');
        options.iv = CryptoJS.enc.Hex.parse(iv);
    }

    const decryptParams = inputFormat === 'hex' ? CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
    }) : CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
    });

    try {
        const decrypted = CryptoJS.AES.decrypt(decryptParams, parsedKey, options);
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        throw new Error('Decryption failed. Please check your key, IV, and ciphertext.');
    }
};

const validateKeyLength = (key, keySize, keyFormat) => {
    let requiredLength = keySize / 8;
    let actualLength;

    switch (keyFormat) {
        case 'utf8':
            actualLength = key.length;
            break;
        case 'hex':
            actualLength = key.length / 2;
            break;
        case 'binary':
            actualLength = key.length / 8;
            break;
        default:
            throw new Error('Unsupported key format');
    }

    if (actualLength < requiredLength) {
        return `Key is too short. It should be at least ${requiredLength} bytes for ${keySize}-bit encryption.`;
    }
    return null;
};

const detectCiphertextFormat = (ciphertext) => {
    const hexRegex = /^[0-9A-Fa-f]+$/;
    if (hexRegex.test(ciphertext)) {
        return 'hex';
    }

    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
    if (base64Regex.test(ciphertext)) {
        return 'base64';
    }

    return null;
};

const AesPage = () => {
    const [plaintext, setPlaintext] = useState('');
    const [key, setKey] = useState('');
    const [ciphertext, setCiphertext] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const [mode, setMode] = useState('ECB');
    const [keySize, setKeySize] = useState(128);
    const [keyFormat, setKeyFormat] = useState('utf8');
    const [iv, setIv] = useState('');
    const [outputFormat, setOutputFormat] = useState('base64');
    const [inputFormat, setInputFormat] = useState('base64');
    const [error, setError] = useState('');
    const [isContentsVisible, setIsContentsVisible] = useState(false);
    const toggleContents = () => {
        setIsContentsVisible(!isContentsVisible);
    };


    const handleCiphertextChange = (e) => {
        const newCiphertext = e.target.value;
        setCiphertext(newCiphertext);
        const detectedFormat = detectCiphertextFormat(newCiphertext);
        if (detectedFormat) {
            setInputFormat(detectedFormat);
        }
    };

    const handleEncrypt = () => {
        setError('');
        const keyError = validateKeyLength(key, keySize, keyFormat);
        if (keyError) {
            setError(keyError);
            return;
        }
        try {
            const { result, iv: generatedIv } = aesEncrypt(plaintext, key, keyFormat, mode, iv, outputFormat);
            setCiphertext(result);
            if (mode !== 'ECB') setIv(generatedIv);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDecrypt = () => {
        setError('');
        const keyError = validateKeyLength(key, keySize, keyFormat);
        if (keyError) {
            setError(keyError);
            return;
        }

        const detectedFormat = detectCiphertextFormat(ciphertext);

        if (detectedFormat && detectedFormat !== inputFormat) {
            const userChoice = window.confirm(`The ciphertext appears to be in ${detectedFormat} format. Do you want to use this format for decryption?`);
            if (userChoice) {
                setInputFormat(detectedFormat);
            } else {
                return;
            }
        }

        if (!detectedFormat) {
            alert('Unable to determine the ciphertext format. Please ensure it is valid base64 or hex.');
            return;
        }

        try {
            const decrypted = aesDecrypt(ciphertext, key, keyFormat, mode, iv, detectedFormat);
            setDecryptedText(decrypted);
        } catch (error) {
            setError(error.message);
        }
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
            <h2 className="text-2xl font-semibold text-white mb-4">Advanced AES Encryption & Decryption Tool</h2>
            <p className="text-lg mb-4 text-gray-300">
                Explore advanced AES encryption with customizable modes, key sizes, key and output formats.
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
                        <li><a href="#aes-introduction" className="hover:underline transition-all" onClick={(e) => handleScroll(e, 'aes-introduction')}>Introduction</a></li>
                        <li><a href="#aes-features" className="hover:underline" onClick={(e) => handleScroll(e, 'aes-features')}>Key Features</a></li>
                        <li><a href="#aes-key-sizes" className="hover:underline" onClick={(e) => handleScroll(e, 'aes-key-sizes')}>AES Key Sizes & Security</a></li>
                        <li><a href="#aes-encryption-process" className="hover:underline" onClick={(e) => handleScroll(e, 'aes-encryption-process')}>AES Encryption Process</a></li>
                        <li><a href="#aes-modes" className="hover:underline" onClick={(e) => handleScroll(e, 'aes-modes')}>AES Modes of Operation</a></li>
                        <li><a href="#aes-applications" className="hover:underline" onClick={(e) => handleScroll(e, 'aes-applications')}>AES Applications</a></li>
                        <li><a href="#aes-example" className="hover:underline" onClick={(e) => handleScroll(e, 'aes-example')}>AES Example</a></li>

                    </ol>
                </div>
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div id='encoder' className='flex xl:flex-row sm:flex-col gap-4 '>
                <div className="mb-4 xl:w-[50%]">
                    <h3 className="text-xl font-semibold text-white mb-2">Encrypt Text</h3>
                    <StyledTextField
                        id='plaintext-field'
                        label="Plaintext"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={plaintext}
                        onChange={(e) => setPlaintext(e.target.value)}
                        className="mb-4"
                    />
                    <StyledTextField
                        id='key'
                        label="Key"
                        variant="outlined"
                        fullWidth
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        className="mb-4"
                        helperText={`Key should be at least ${keySize / 8} bytes for ${keySize}-bit encryption. Current format: ${keyFormat.toUpperCase()}`}
                        FormHelperTextProps={{ style: { color: 'white' } }}
                    />

                    <div className='w-full flex flex-wrap  items-center' >
                        <FormControl label='select mode' className="mb-4 mx-1 w-[10%] md:w-[20%] sm:w-[80%]">
                            <StyledInputLabel id="mode-label">Mode</StyledInputLabel>
                            <StyledSelect
                                labelId="mode-label"
                                value={mode}
                                onChange={(e) => setMode(e.target.value)}
                                label="Mode"
                            >
                                <MenuItem label='ECB' value="ECB">ECB</MenuItem>
                                <MenuItem label='CBC' value="CBC">CBC</MenuItem>
                                <MenuItem label='CTR' value="CTR">CTR</MenuItem>
                                <MenuItem label='GCM' value="GCM">GCM</MenuItem>
                            </StyledSelect>
                        </FormControl>
                        <FormControl label='select key size' className="mb-4 mx-1 w-[10%] md:w-[20%] sm:w-[80%]">
                            <StyledInputLabel id="keysize-label">Key Size</StyledInputLabel>
                            <StyledSelect
                                labelId="keysize-label"
                                value={keySize}
                                onChange={(e) => setKeySize(Number(e.target.value))}
                                label="Key Size"
                            >
                                <MenuItem label='128 bits' value={128}>128 bits</MenuItem>
                                <MenuItem label='1922 bits' value={192}>192 bits</MenuItem>
                                <MenuItem label='256 bits' value={256}>256 bits</MenuItem>
                            </StyledSelect>
                        </FormControl>
                        <FormControl label='select key format' className="mb-4 mx-1 w-[10%] md:w-[20%] sm:w-[80%]">
                            <StyledInputLabel id="key-format-label">Key Format</StyledInputLabel>
                            <StyledSelect
                                labelId="key-format-label"
                                value={keyFormat}
                                onChange={(e) => setKeyFormat(e.target.value)}
                                label="Key Format"
                            >
                                <MenuItem label='utf8' value="utf8">UTF-8</MenuItem>
                                <MenuItem label='hex' value="hex">Hex</MenuItem>
                                <MenuItem label='binary' value="binary">Binary</MenuItem>
                            </StyledSelect>
                        </FormControl>
                        {mode !== 'ECB' && (
                            <StyledTextField
                                label="Initialization Vector (IV)"
                                variant="outlined"
                                fullWidth
                                value={iv}
                                onChange={(e) => setIv(e.target.value)}
                                className="mb-4 mx-1  md:w-[30%] sm:w-[80%]"
                            />
                        )}
                        <FormControl label='select output format' className="mb-4 mx-1 w-[10%] md:w-[20%] sm:w-[80%]">
                            <StyledInputLabel id="output-format-label">Output Format</StyledInputLabel>
                            <StyledSelect
                                labelId="output-format-label"
                                value={outputFormat}
                                onChange={(e) => setOutputFormat(e.target.value)}
                                label="Output Format"
                            >
                                <MenuItem value="base64">Base64</MenuItem>
                                <MenuItem value="hex">Hex</MenuItem>
                            </StyledSelect>
                        </FormControl>
                    </div>
                    <StyledButton
                        variant="contained"
                        onClick={handleEncrypt}
                        className="mr-4 mb-3"
                    >
                        Encrypt
                    </StyledButton>
                    <StyledTextField
                        label="Ciphertext"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={ciphertext}
                        InputProps={{
                            readOnly: true,
                        }}
                        className="mb-4"
                    />
                </div>

                <div className="mb-4 xl:w-[50%]">
                    <h3 className="text-xl font-semibold text-white mb-2">Decrypt Text</h3>
                    <StyledTextField
                        label="Ciphertext"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={ciphertext}
                        onChange={handleCiphertextChange}
                        className="mb-4"
                    />
                    <StyledTextField
                        label="Key"
                        variant="outlined"
                        fullWidth
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        className="mb-4"
                    />
                    <div className='w-full flex md:flex-row sm:flex-col gap-2  '>
                        {mode !== 'ECB' && (
                            <StyledTextField
                                label="Initialization Vector (IV)"
                                variant="outlined"
                                fullWidth
                                value={iv}
                                onChange={(e) => setIv(e.target.value)}
                                className="mb-4 md:w-[40%] mx-1 w-full "
                            />
                        )}
                        <div className='w-full'>
                            <FormControl label='select input format' className="mb-4 md:w-[40%] mx-1 w-full ">
                                <StyledInputLabel id="input-format-label">Input Format</StyledInputLabel>
                                <StyledSelect
                                    labelId="input-format-label"
                                    value={inputFormat}
                                    onChange={(e) => setInputFormat(e.target.value)}
                                    label="Input Format"
                                >
                                    <MenuItem value="base64">Base64</MenuItem>
                                    <MenuItem value="hex">Hex</MenuItem>
                                </StyledSelect>
                            </FormControl>
                        </div>
                    </div>
                    <StyledButton
                        variant="contained"
                        onClick={handleDecrypt}
                        className="mr-4 mb-3"
                    >
                        Decrypt
                    </StyledButton>
                    <StyledTextField
                        label="Decrypted Text"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={decryptedText}
                        InputProps={{
                            readOnly: true,
                        }}
                        className="mb-4"
                    />
                </div>

            </div>
            <div className=" text-white p-2 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-6">Understanding AES: Advanced Encryption Standard in Cryptography</h1>

                <div className="space-y-8">
                    <section id='aes-introduction'>
                        <h2 className="text-3xl font-semibold mb-4">Introduction to AES</h2>
                        <p className="text-gray-300">
                            The Advanced Encryption Standard (AES) is a widely adopted symmetric encryption algorithm used in cryptography. Developed to protect sensitive information, AES has become the go-to choice for secure data transmission and storage across various applications and industries.
                        </p>
                    </section>

                    <section id='aes-features'>
                        <h2 className="text-3xl font-semibold mb-4">Key Features of AES</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Symmetric block cipher algorithm</li>
                            <li>Encrypts data in fixed-size blocks of 128 bits</li>
                            <li>Supports key sizes of 128, 192, and 256 bits</li>
                            <li>Offers a balance of security and performance</li>
                            <li>Widely used in both software and hardware implementations</li>
                        </ul>
                    </section>

                    <section id='aes-key-sizes'>
                        <h2 className="text-3xl font-semibold mb-4">AES Key Sizes and Security</h2>
                        <p className="text-gray-300">
                            AES supports three key sizes, each offering different levels of security:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                            <li>AES-128: Uses a 128-bit key, suitable for most applications</li>
                            <li>AES-192: Employs a 192-bit key for enhanced security</li>
                            <li>AES-256: Utilizes a 256-bit key, providing the highest level of security and often used for highly sensitive data</li>
                        </ul>
                        <p className="text-gray-300 mt-2">
                            The key size determines the number of encryption rounds: 10 for AES-128, 12 for AES-192, and 14 for AES-256. Longer keys offer stronger security but may require more computational resources.
                        </p>
                    </section>

                    <section id='aes-encryption-process'>
                        <h2 className="text-3xl font-semibold mb-4">AES Encryption Process</h2>
                        <p className="text-gray-300">
                            The AES algorithm operates on blocks of data, applying multiple rounds of substitution and permutation. Each round involves four main operations:
                        </p>
                        <ol className="list-decimal list-inside text-gray-300 space-y-2 mt-2">
                            <li>SubBytes: Substitutes each byte with another according to a lookup table</li>
                            <li>ShiftRows: Shifts the rows of the state array by different offsets</li>
                            <li>MixColumns: Combines the four bytes in each column using a linear transformation</li>
                            <li>AddRoundKey: XORs the state with the round key</li>
                        </ol>
                        <p className="text-gray-300 mt-2">
                            These operations ensure thorough data scrambling, making the encryption robust against various cryptographic attacks.
                        </p>
                    </section>

                    <section id='aes-modes'>
                        <h2 className="text-3xl font-semibold mb-4">AES Modes of Operation</h2>
                        <p className="text-gray-300">
                            AES can be used in different modes of operation, each with its own characteristics:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                            <li>ECB (Electronic Codebook): The simplest mode, but not recommended for most applications due to security vulnerabilities</li>
                            <li>CBC (Cipher Block Chaining): Enhances security by chaining blocks together, widely used in secure communications</li>
                            <li>CTR (Counter): Turns the block cipher into a stream cipher, allowing for parallel encryption and decryption</li>
                            <li>GCM (Galois/Counter Mode): Provides both confidentiality and authenticity, popular in secure protocols</li>
                        </ul>
                    </section>

                    <section >
                        <h2 className="text-3xl font-semibold mb-4">Online AES Encryption and Decryption</h2>
                        <p className="text-gray-300">
                            Many online tools offer AES encryption and decryption services, allowing users to secure their data or decrypt received information. These tools often support various key sizes, modes of operation, and input/output formats such as Base64 or hexadecimal.
                        </p>
                        <p className="text-gray-300 mt-2">
                            When using online AES tools, it's crucial to ensure the platform is secure and trustworthy, especially when dealing with sensitive information.
                        </p>
                    </section>

                    <section id='aes-applications'>
                        <h2 className="text-3xl font-semibold mb-4">Applications of AES</h2>
                        <p className="text-gray-300">
                            AES finds applications in numerous areas of information security, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                            <li>Secure communication protocols (e.g., HTTPS, VPNs)</li>
                            <li>File and disk encryption</li>
                            <li>Wireless security (e.g., Wi-Fi encryption)</li>
                            <li>Government and military communications</li>
                            <li>Financial transactions and banking systems</li>
                        </ul>
                    </section>

                    <section id='aes-example'>
                        <h2 className="text-3xl font-semibold mb-4">Example: How AES Encryption and Decryption Work</h2>
                        <p className="text-gray-300">
                            Let's walk through a simple example of how AES encryption and decryption work using a 128-bit key in CBC mode.
                        </p>
                        <p className="text-gray-300 mt-2">
                            Suppose we have the following plaintext message:
                        </p>
                        <pre className="p-4 rounded-lg text-gray-300">
                            "Hello, World!"
                        </pre>
                        <p className="text-gray-300 mt-2">
                            We will use a 128-bit key (16 bytes) for encryption:
                        </p>
                        <pre className=" p-4 rounded-lg text-gray-300">
                            "0123456789abcdef"
                        </pre>
                        <p className="text-gray-300 mt-2">
                            And an initialization vector (IV) for CBC mode:
                        </p>
                        <pre className=" p-4 rounded-lg text-gray-300">
                            "abcdef9876543210"
                        </pre>
                        <p className="text-gray-300 mt-2">
                            The AES encryption process will transform the plaintext into ciphertext. Here's the resulting ciphertext in hexadecimal format:
                        </p>
                        <pre className=" p-4 rounded-lg text-gray-300">
                            "3ad77bb40d7a3660a89ecaf32466ef97"
                        </pre>
                        <p className="text-gray-300 mt-2">
                            To decrypt the ciphertext, we use the same key and IV. The AES decryption process will transform the ciphertext back into the original plaintext:
                        </p>
                        <pre className=" p-4 rounded-lg text-gray-300">
                            "Hello, World!"
                        </pre>
                        <p className="text-gray-300 mt-2">
                            This example demonstrates the basic process of AES encryption and decryption, ensuring data confidentiality and integrity.
                        </p>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default AesPage;
