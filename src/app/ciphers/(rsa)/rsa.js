'use client'
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import JSEncrypt from "jsencrypt";

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

const generateKeyPair = (keySize) => {
    const encrypt = new JSEncrypt({ default_key_size: keySize });
    const publicKey = encrypt.getPublicKey();
    const privateKey = encrypt.getPrivateKey();
    return { publicKey, privateKey };
};

const rsaEncrypt = (plaintext, publicKey) => {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(plaintext);
};

const rsaDecrypt = (ciphertext, privateKey) => {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    return decrypt.decrypt(ciphertext);
};


const RSAPage = () => {
    const [plaintext, setPlaintext] = useState('');
    const [ciphertext, setCiphertext] = useState('');
    const [publicKey, setPublicKey] = useState('');
    const [privateKey, setPrivateKey] = useState('');
    const [keySize, setKeySize] = useState(2048);
    const [error, setError] = useState('');
    const [decryptedText, setDecryptedText] = useState('');
    const [isContentsVisible, setIsContentsVisible] = useState(false);
    const [isGeneratingKeys, setIsGeneratingKeys] = useState(false);


    const toggleContents = () => {
        setIsContentsVisible(!isContentsVisible);
    };

    const handleGenerateKeyPair = () => {
        setIsGeneratingKeys(true);
        try {
            setTimeout(() => {
                const { publicKey, privateKey } = generateKeyPair(keySize);
                setPublicKey(publicKey);
                setPrivateKey(privateKey);
                setError('');
                setIsGeneratingKeys(false);
            }, 1000); // Simulating a delay for key generation
        } catch (error) {
            setError('Error generating key pair: ' + error.message);
            setIsGeneratingKeys(false);
        }
    };


    const handleEncrypt = () => {
        try {
            const encrypted = rsaEncrypt(plaintext, publicKey);
            setCiphertext(encrypted);
            setError('');
        } catch (error) {
            setError('Encryption failed: ' + error.message);
        }
    };

    const handleDecrypt = () => {
        try {
            const decrypted = rsaDecrypt(ciphertext, privateKey);
            setDecryptedText(decrypted);
            setError('');
        } catch (error) {
            setError('Decryption failed: ' + error.message);
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
            <h2 className="text-2xl font-semibold text-white mb-4">RSA Encryption and Decryption Explained</h2>
            <p className="text-lg mb-4 text-gray-300">
                Explore RSA encryption with customizable key sizes and public/private key management.
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
                        <li><a href="#rsa-introduction" className="hover:underline transition-all" onClick={(e) => handleScroll(e, 'rsa-introduction')}>Introduction</a></li>
                        <li><a href="#rsa-features" className="hover:underline" onClick={(e) => handleScroll(e, 'rsa-features')}>Key Features</a></li>
                        <li><a href="#rsa-encryption-process" className="hover:underline" onClick={(e) => handleScroll(e, 'rsa-encryption-process')}>RSA Encryption Process</a></li>
                        <li><a href="#rsa-key-generation" className="hover:underline" onClick={(e) => handleScroll(e, 'rsa-key-generation')}>RSA Key Generation</a></li>
                        <li><a href="#rsa-applications" className="hover:underline" onClick={(e) => handleScroll(e, 'rsa-applications')}>RSA Applications</a></li>
                        <li><a href="#rsa-security" className="hover:underline" onClick={(e) => handleScroll(e, 'rsa-security')}>RSA Security Considerations</a></li>
                        <li><a href="#rsa-example" className="hover:underline" onClick={(e) => handleScroll(e, 'rsa-example')}>RSA Example</a></li>
                    </ol>
                </div>
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div id='encoder' className='flex xl:flex-row sm:flex-col gap-4 '>
                <div className="mb-4 xl:w-[50%]">
                    <h3 className="text-xl font-semibold text-white mb-2">Key Management</h3>
                    <FormControl className="mb-4 w-full">
                        <StyledInputLabel id="key-size-label">Key Size</StyledInputLabel>
                        <StyledSelect
                            labelId="key-size-label"
                            value={keySize}
                            onChange={(e) => setKeySize(e.target.value)}
                            label="Key Size"
                        >
                            <MenuItem value={1024}>1024 bits</MenuItem>
                            <MenuItem value={2048}>2048 bits</MenuItem>
                            <MenuItem value={4096}>4096 bits</MenuItem>
                        </StyledSelect>
                    </FormControl>
                    <StyledButton
                        variant="contained"
                        onClick={handleGenerateKeyPair}
                        className="mb-4"
                        disabled={isGeneratingKeys}
                    >
                        {isGeneratingKeys ? 'Generating...' : 'Generate Key Pair'}
                    </StyledButton>

                    <StyledTextField
                        label="Public Key"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={publicKey}
                        onChange={(e) => setPublicKey(e.target.value)}
                        className="mb-4"
                    />
                    <StyledTextField
                        label="Private Key"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={privateKey}
                        onChange={(e) => setPrivateKey(e.target.value)}
                        className="mb-4"
                    />
                </div>

                <div className="mb-4 xl:w-[50%]">
                    <h3 className="text-xl font-semibold text-white mb-2">Encrypt/Decrypt</h3>
                    <StyledTextField
                        label="Plaintext"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={plaintext}
                        onChange={(e) => setPlaintext(e.target.value)}
                        className="mb-4"
                    />
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
                        onChange={(e) => setCiphertext(e.target.value)}
                        className="mb-4"
                    />
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

            {/* Add informational content about RSA here */}
            <div className="text-white p-2 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-6">Understanding RSA Encryption</h1>

                <section id='rsa-introduction'>
                    <h2 className="text-3xl font-semibold mb-4">Introduction to RSA</h2>
                    <p className="text-gray-300">
                        RSA (Rivest–Shamir–Adleman) is a public-key cryptosystem widely used for secure data transmission. It is an asymmetric cryptographic algorithm, meaning it uses two different keys: a public key for encryption and a private key for decryption.
                    </p>
                </section>

                <section id='rsa-features'>
                    <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Asymmetric encryption: Uses separate keys for encryption and decryption</li>
                        <li>Variable key sizes: Typically 1024, 2048, or 4096 bits</li>
                        <li>Based on the mathematical difficulty of factoring large prime numbers</li>
                        <li>Widely used for secure communication, digital signatures, and key exchange</li>
                    </ul>
                </section>

                <section id='rsa-encryption-process'>
                    <h2 className="text-3xl font-semibold mb-4">RSA Encryption Process</h2>
                    <p className="text-gray-300">
                        RSA encryption involves the following steps:
                    </p>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2">
                        <li>Key generation: Create a public/private key pair</li>
                        <li>Encryption: Use the recipient's public key to encrypt the message</li>
                        <li>Decryption: Use the recipient's private key to decrypt the message</li>
                    </ol>
                </section>

                <section id='rsa-key-generation'>
                    <h2 className="text-3xl font-semibold mb-4">RSA Key Generation</h2>
                    <p className="text-gray-300">
                        RSA key generation involves:
                    </p>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2">
                        <li>Choose two large prime numbers, p and q</li>
                        <li>Compute n = p * q</li>
                        <li>Compute φ(n) = (p-1) * (q-1)</li>
                        <li>Choose an integer e such that {`1 < e < φ(n)`} and gcd(e, φ(n)) = 1</li>
                        <li>Compute d to satisfy the congruence relation de ≡ 1 (mod φ(n))</li>
                        <li>Public key is (n, e), private key is (n, d)</li>
                    </ol>
                </section>

                <section id='rsa-applications'>
                    <h2 className="text-3xl font-semibold mb-4">Applications of RSA</h2>
                    <p className="text-gray-300">
                        RSA is widely used in various applications, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Secure communication over the internet (HTTPS)</li>
                        <li>Digital signatures for document authentication</li>
                        <li>Secure key exchange in cryptographic protocols</li>
                        <li>Secure email communication (PGP, S/MIME)</li>
                    </ul>
                </section>

                <section id='rsa-security'>
                    <h2 className="text-3xl font-semibold mb-4">Security Considerations</h2>
                    <p className="text-gray-300">
                        RSA security depends on the difficulty of factoring large numbers. Key considerations include:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Key size: Larger keys provide better security but slower performance</li>
                        <li>Proper implementation: Avoid vulnerabilities like padding oracle attacks</li>
                        <li>Key management: Securely store and distribute private keys</li>
                        <li>Quantum computing threat: RSA may be vulnerable to future quantum algorithms</li>
                    </ul>
                </section>

                <section id='rsa-example'>
                    <h2 className="text-3xl font-semibold mb-4">Example: RSA Encryption and Decryption</h2>
                    <p className="text-gray-300">
                        Here's a simple example of RSA encryption and decryption (using small numbers for illustration):
                    </p>
                    <pre className="p-4 rounded-lg text-gray-300">
                        {`
Public key (n, e): (3233, 17)
Private key (n, d): (3233, 2753)

Plaintext: 123

Encryption:
C = 123^17 mod 3233 = 855

Decryption:
M = 855^2753 mod 3233 = 123
            `}
                    </pre>
                </section>
            </div>
        </div>
    );
};
export default RSAPage;

