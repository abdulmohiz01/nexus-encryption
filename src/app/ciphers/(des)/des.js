'use client'
import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import CryptoJS from "crypto-js";
import Button from '../../../components/button';

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

const desEncrypt = (plaintext, key, keyFormat, algorithm, iv = '', outputFormat = 'base64') => {
  const parsedKey = parseKey(key, keyFormat);
  let options = { mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 };

  if (iv) {
    options.iv = CryptoJS.enc.Hex.parse(iv);
  } else {
    // Generate a random IV if not provided
    options.iv = CryptoJS.lib.WordArray.random(8);
  }

  let encrypted;
  switch (algorithm) {
    case 'DES':
      encrypted = CryptoJS.DES.encrypt(plaintext, parsedKey, options);
      break;
    case 'DES2':
    case 'DES3':
      encrypted = CryptoJS.TripleDES.encrypt(plaintext, parsedKey, options);
      break;
    default:
      throw new Error('Unsupported algorithm');
  }

  const result = outputFormat === 'hex' ? encrypted.ciphertext.toString(CryptoJS.enc.Hex) : encrypted.toString();
  return { result, iv: options.iv.toString(CryptoJS.enc.Hex) };
};


const desDecrypt = (ciphertext, key, keyFormat, algorithm, iv = '', inputFormat = 'base64') => {
  const parsedKey = parseKey(key, keyFormat);
  let options = { mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 };

  if (iv) {
    options.iv = CryptoJS.enc.Hex.parse(iv);
  }

  let decryptParams;
  if (inputFormat === 'hex') {
    decryptParams = { ciphertext: CryptoJS.enc.Hex.parse(ciphertext) };
  } else {
    decryptParams = { ciphertext: CryptoJS.enc.Base64.parse(ciphertext) };
  }

  try {
    let decrypted;
    switch (algorithm) {
      case 'DES':
        decrypted = CryptoJS.DES.decrypt(decryptParams, parsedKey, options);
        break;
      case 'DES2':
      case 'DES3':
        decrypted = CryptoJS.TripleDES.decrypt(decryptParams, parsedKey, options);
        break;
      default:
        throw new Error('Unsupported algorithm');
    }
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    throw new Error('Decryption failed. Please check your key, IV, and ciphertext.');
  }
};

const validateKeyLength = (key, algorithm, keyFormat) => {
  let requiredLength;
  switch (algorithm) {
    case 'DES':
      requiredLength = 7; // 56 bits (7 bytes)
      break;
    case 'DES2':
      requiredLength = 14; // 112 bits (14 bytes)
      break;
    case 'DES3':
      requiredLength = 21; // 168 bits (21 bytes)
      break;
    default:
      throw new Error('Unsupported algorithm');
  }

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
    return `Key is too short. It should be at least ${requiredLength * 8} bits (${requiredLength} bytes) for ${algorithm}.`;
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

const DesPage = () => {
  const [plaintext, setPlaintext] = useState('');
  const [key, setKey] = useState('');
  const [ciphertext, setCiphertext] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const [algorithm, setAlgorithm] = useState('DES');
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
    const keyError = validateKeyLength(key, algorithm, keyFormat);
    if (keyError) {
      setError(keyError);
      return;
    }
    try {
      const { result, iv: generatedIv } = desEncrypt(plaintext, key, keyFormat, algorithm, iv, outputFormat);
      setCiphertext(result);
      setIv(generatedIv);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDecrypt = () => {
    setError('');
    const keyError = validateKeyLength(key, algorithm, keyFormat);
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
      const decrypted = desDecrypt(ciphertext, key, keyFormat, algorithm, iv, detectedFormat);
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
      <h2 className="text-2xl font-semibold text-white mb-4">DES Cipher Algorithm - DES2, DES3 Encryption and Decryption</h2>
      <p className="text-lg mb-4 text-gray-300">
        Explore DES, DES2, and DES3 encryption with customizable key formats and output formats.
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
            <li><a href="#des-introduction" className="hover:underline transition-all" onClick={(e) => handleScroll(e, 'des-introduction')}>Introduction</a></li>
            <li><a href="#des-features" className="hover:underline" onClick={(e) => handleScroll(e, 'des-features')}>Key Features</a></li>
            <li><a href="#des-encryption-process" className="hover:underline" onClick={(e) => handleScroll(e, 'des-encryption-process')}>DES Encryption Process</a></li>
            <li><a href="#des-modes" className="hover:underline" onClick={(e) => handleScroll(e, 'des-modes')}>DES Modes of Operation</a></li>
            <li><a href="#des-applications" className="hover:underline" onClick={(e) => handleScroll(e, 'des-applications')}>DES Applications</a></li>
            <li><a href="#des-security" className="hover:underline" onClick={(e) => handleScroll(e, 'des-security')}>DES Security Concerns</a></li>
            <li><a href="#des-example" className="hover:underline" onClick={(e) => handleScroll(e, 'des-example')}>DES Example</a></li>
          </ol>
        </div>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div id='encoder' className='flex xl:flex-row sm:flex-col gap-4 '>
        <div className="mb-4 xl:w-[50%]">
          <h3 className="text-xl font-semibold text-white mb-2">Encrypt Text</h3>
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
          <StyledTextField
            label="Key"
            variant="outlined"
            fullWidth
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="mb-4"
            helperText={`Key should be at least ${algorithm === 'DES' ? 7 : algorithm === 'DES2' ? 14 : 21} bytes for ${algorithm}. Current format: ${keyFormat.toUpperCase()}`}
            FormHelperTextProps={{ style: { color: 'white' } }}
          />

          <div className='w-full flex flex-wrap items-center' >
            <FormControl className="mb-4 mx-1 w-[10%] md:w-[20%] sm:w-[80%]">
              <StyledInputLabel id="algorithm-label">Algorithm</StyledInputLabel>
              <StyledSelect
                labelId="algorithm-label"
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
                label="Algorithm"
              >
                <MenuItem value="DES">DES (56-bit)</MenuItem>
                <MenuItem value="DES2">2DES (112-bit)</MenuItem>
                <MenuItem value="DES3">3DES (168-bit)</MenuItem>
              </StyledSelect>
            </FormControl>

            <FormControl className="mb-4 mx-1 w-[10%] md:w-[20%] sm:w-[80%]">
              <StyledInputLabel id="key-format-label">Key Format</StyledInputLabel>
              <StyledSelect
                labelId="key-format-label"
                value={keyFormat}
                onChange={(e) => setKeyFormat(e.target.value)}
                label="Key Format"
              >
                <MenuItem value="utf8">UTF-8</MenuItem>
                <MenuItem value="hex">Hex</MenuItem>
                <MenuItem value="binary">Binary</MenuItem>
              </StyledSelect>
            </FormControl>
            <StyledTextField
              label="Initialization Vector (IV)"
              variant="outlined"
              fullWidth
              value={iv}
              onChange={(e) => setIv(e.target.value)}
              className="mb-4 mx-1 md:w-[30%] sm:w-[80%]"
            />
            <FormControl className="mb-4 mx-1 w-[10%] md:w-[20%] sm:w-[80%]">
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
          <Button onClick={handleEncrypt} type={1} />

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
          <div className='w-full flex md:flex-row sm:flex-col gap-2'>
            <StyledTextField
              label="Initialization Vector (IV)"
              variant="outlined"
              fullWidth
              value={iv}
              onChange={(e) => setIv(e.target.value)}
              className="mb-4 md:w-[40%] mx-1 w-full"
            />
            <div className='w-full'>
              <FormControl className="mb-4 md:w-[40%] mx-1 w-full">
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
          <Button onClick={handleDecrypt} type={2} />
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

      {/* Add informational content about DES, DES2, and DES3 here */}
      <div className="text-white p-2 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Understanding DES, DES2, and DES3 Encryption</h1>

        <section id='des-introduction'>
          <h2 className="text-3xl font-semibold mb-4">Introduction to DES, DES2, and DES3</h2>
          <p className="text-gray-300">
            DES (Data Encryption Standard), DES2, and DES3 (Triple DES) are symmetric-key block cipher algorithms used for data encryption. DES was widely used but is now considered insecure due to its small key size. DES2 and DES3 were developed to address DES's vulnerabilities by applying the algorithm multiple times for increased security.
          </p>
        </section>

        <section id='des-features'>
          <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>DES: 56-bit effective key size, 64-bit block size</li>
            <li>DES2: 112-bit key size (using two 56-bit keys), 64-bit block size</li>
            <li>DES3: 168-bit key size (using three 56-bit keys) or 112-bit key size (using two 56-bit keys), 64-bit block size</li>
          </ul>
        </section>

        <section id='des-encryption-process'>
          <h2 className="text-3xl font-semibold mb-4">DES Encryption Process</h2>
          <p className="text-gray-300">
            DES uses a 16-round Feistel network structure. Each round applies substitution and permutation operations. DES2 and DES3 apply the DES algorithm multiple times for increased security. For instance, 3DES applies DES three times with either three different keys (K1, K2, K3) or two keys (K1, K2, K1).
          </p>
        </section>

        <section id='des-modes'>
          <h2 className="text-3xl font-semibold mb-4">DES Modes of Operation</h2>
          <p className="text-gray-300">
            Like AES, DES can be used in different modes such as ECB (Electronic Codebook), CBC (Cipher Block Chaining), CFB (Cipher Feedback), and OFB (Output Feedback). Each mode offers different security properties and use cases.
          </p>
        </section>

        <section id='des-applications'>
          <h2 className="text-3xl font-semibold mb-4">Applications of DES</h2>
          <p className="text-gray-300">
            While DES is considered outdated for new applications due to its small key size, DES2 and DES3 are still used in some legacy systems and specific applications where AES is not feasible. Examples include banking systems and legacy cryptographic hardware.
          </p>
        </section>

        <section id='des-security'>
          <h2 className="text-3xl font-semibold mb-4">Security Concerns and Attacks</h2>
          <p className="text-gray-300">
            The main security concern with DES is its 56-bit key size, which is vulnerable to brute-force attacks. In 1997, the DESCHALL project successfully cracked a DES-encrypted message using a brute-force attack. DES2, while improving security, is still susceptible to meet-in-the-middle attacks, which can reduce the effective key strength to about 57 bits. DES3 significantly enhances security but is slower and more resource-intensive compared to modern algorithms like AES.
          </p>
        </section>

        <section id='des-example'>
          <h2 className="text-3xl font-semibold mb-4">Example: DES Encryption and Decryption</h2>
          <p className="text-gray-300">
            Here's a simple example of DES encryption and decryption:
          </p>
          <pre className="p-4 rounded-lg text-gray-300">
            Plaintext: "Hello, DES!"
          </pre>
          <pre className="p-4 rounded-lg text-gray-300">
            Key: "01234567" (8 bytes for DES)
          </pre>
          <pre className="p-4 rounded-lg text-gray-300">
            Encrypted (Base64): "RTY3yOwfqmnWg3wCLIMnUQ=="
          </pre>
          <pre className="p-4 rounded-lg text-gray-300">
            Decrypted: "Hello, DES!"
          </pre>
        </section>
      </div>

    </div>
  );
};
export default DesPage;

