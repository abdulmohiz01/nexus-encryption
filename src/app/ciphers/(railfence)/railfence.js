'use client';

import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const RailFence = () => {
    const [plaintext, setPlaintext] = useState('');
    const [rails, setRails] = useState(3);
    const [ciphertext, setCiphertext] = useState('');
    const [decodedText, setDecodedText] = useState('');
    const [helper, setHelper] = useState('');
    const [showResult1, setShowResult1] = useState(false);
    const [showResult2, setShowResult2] = useState(false);

    const encryptRailFence = (text, numRails) => {
        if (numRails === 1) return text;

        let rail = Array.from({ length: numRails }, () => []);
        let directionDown = false;
        let row = 0;

        for (let char of text) {
            rail[row].push(char);
            if (row === 0 || row === numRails - 1) directionDown = !directionDown;
            row += directionDown ? 1 : -1;
        }

        return rail.reduce((acc, row) => acc + row.join(''), '');
    };

    const decryptRailFence = (cipher, numRails) => {
        if (numRails === 1 || cipher.trim() === '') return cipher;

        let rail = Array.from({ length: numRails }, () => []);
        let mark = Array(cipher.length).fill(0);
        let directionDown = false;
        let row = 0;

        // Mark the positions
        for (let i = 0; i < cipher.length; i++) {
            mark[i] = row;
            if (row === 0 || row === numRails - 1) directionDown = !directionDown;
            row += directionDown ? 1 : -1;
        }

        let index = 0;
        for (let i = 0; i < numRails; i++) {
            for (let j = 0; j < cipher.length; j++) {
                if (mark[j] === i) rail[i].push(cipher[index++]);
            }
        }

        let result = [];
        row = 0;
        directionDown = false;
        for (let i = 0; i < cipher.length; i++) {
            result.push(rail[row].shift());
            if (row === 0 || row === numRails - 1) directionDown = !directionDown;
            row += directionDown ? 1 : -1;
        }

        return result.join('');
    };

    const handleEncrypt = () => {
        if (plaintext.trim() === '' || rails < 2) {
            setHelper('Please enter at least 2 rails.');
            return;
        }
        setHelper('');
        setCiphertext(encryptRailFence(plaintext, rails));
        setShowResult1(true);
    };

    const handleDecrypt = () => {
        const textToDecrypt = plaintext.trim() || ciphertext;
        if (rails < 2) {
            setHelper('Please enter at least 2 rails.');
            return;
        }
        if (textToDecrypt === '') {
            setHelper('Please enter ciphertext to decrypt.');
            return;
        }
        setHelper('');
        setDecodedText(decryptRailFence(textToDecrypt, rails));
        setShowResult2(true);
    };

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
        if (plaintext.trim() !== '' && rails >= 2) {
            setHelper('');
        }
    };
    return (
        <div className="lg:ml-[150px] xl:w-[60%] flex flex-col gap-5 items-start h-auto p-5">
            <h1 className='text-3xl font-semibold text-white'>Fence Rail Cipher - Rail Fence Cipher Decoder</h1>
            <TextField
                autoComplete='off'
                className='sm:w-full'
                label="Plaintext / Ciphertext"
                variant="outlined"
                fullWidth
                margin="normal"
                value={plaintext}
                onChange={handleChange(setPlaintext)}
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
                }}
                InputProps={{
                    style: { color: 'black' },
                    onFocus: (e) => (e.target.style.color = 'white'),
                }}
                InputLabelProps={{
                    style: { color: 'white' },
                }}
            />
            <TextField
                autoComplete='off'
                className='xl:w-[100%] sm:w-full '
                label="Number of Rails"
                variant="outlined"
                type="text"
                fullWidth
                margin="normal"
                value={rails}
                helperText={helper}
                onChange={handleChange(setRails)}
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
                    style: { color: 'black' },
                    onFocus: (e) => (e.target.style.color = 'white'),
                }}
                InputLabelProps={{
                    style: { color: 'white' },
                }}
            />
            <Button
                variant="contained"
                onClick={handleEncrypt}
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
            {showResult1 && (
                <div className="sm:w-full lg:w-[80%] slide-down">
                    <h1 className="text-2xl font-semibold mb-3 sm:px-2 text-white">Result</h1>
                    {ciphertext && (
                        <div className="flex flex-wrap justify-around h-auto items-center bg-gray-100 md:m-3 sm:p-2 px-6 mb-2 rounded-md shadow gap-3">
                            <p className="text-gray-700 w-full px-3">{ciphertext}</p>
                        </div>
                    )}

                </div>
            )}
            <Button
                variant="contained"
                onClick={handleDecrypt}
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
                Decrypt
            </Button>
            {showResult2 && (
                <div className="sm:w-full lg:w-[80%] slide-down">
                    <h1 className="text-2xl font-semibold mb-3 sm:px-2 text-white">Result</h1>

                    {decodedText && (
                        <div className="flex flex-wrap justify-around h-auto items-center bg-gray-100 md:m-3 sm:p-2 px-6 mb-2 rounded-md shadow slide-down">
                            <p className="text-gray-700 w-full px-3">{decodedText}</p>
                        </div>
                    )}
                </div>
            )}
            <div className='sm:w-full'>
                <h2 className="text-2xl font-semibold text-white mb-4">Rail Fence Cipher Explained</h2>

                <p className="text-lg mb-4 text-gray-300">
                    The Rail Fence Cipher is a classic transposition cipher that encodes text by arranging it in a zigzag pattern across multiple "rails" (rows) and then reading it off row by row. This method effectively obscures the order of the characters, making the ciphertext harder to decipher without the key.
                </p>

                <h3 className="text-xl font-semibold text-white mb-2">How It Works</h3>

                <ol className="list-decimal list-inside text-gray-300 mb-4">
                    <li className="mb-4">
                        <strong className="text-white">Arrangement in Rails:</strong>
                        <p>Write the plaintext in a zigzag pattern down and up across a specified number of rails.</p>
                        <p><strong className="text-white">Example:</strong> For 3 rails, the text "WE ARE DISCOVERED FLEE AT ONCE" is arranged like this:</p>
                        <h3 className="text-xl font-semibold text-white mb-2">Layout</h3>
                        <div className=" text-gray-300 p-4 rounded-md ">
                            <p> W . . . . . .  R  . . . . . . I . . . . . .  V . . . . . . . . . D </p><br />
                            <p> . . E . T . C . E . A . E . D . S . O . E . E . L . E . . </p><br />
                            <p>. .  A . . N . . E . . C . . R . . F . . O</p>
                        </div>
                    </li>
                    <li>
                        <strong className="text-white">Reading Off:</strong>
                        <p>Read the text row by row to obtain the ciphertext.</p>
                        <p><strong className="text-white">Ciphertext:</strong> From the arrangement above, the result would be "WRIVDETCEAEDSOEE LEA NE CRF O".</p>
                    </li>
                </ol>

                <h3 className="text-xl font-semibold text-white mb-2">Decryption Process</h3>

                <ol className="list-decimal list-inside text-gray-300 mb-4">
                    <li className="mb-4">
                        <strong className="text-white">Reconstruct the Rails:</strong>
                        <p>Determine the zigzag pattern for the given number of rails and place the ciphertext characters into the correct positions on the rails.</p>
                        <p>Reconstruct the plaintext by reading characters in the zigzag pattern.</p>
                    </li>
                    <li>
                        <strong className="text-white">Example:</strong>
                        <p>Given the ciphertext "WRIVDETCEAEDSOEE LEA NE CRF O" and 3 rails, reconstruct the rails and then read off to get back to "WE ARE DISCOVERED FLEE AT ONCE".</p>
                    </li>
                </ol>

                <h3 className="text-xl font-semibold text-white mb-2">Key Points</h3>

                <ul className="list-disc list-inside text-gray-300 mb-4">
                    <li className="mb-2"><strong className="text-white">Number of Rails:</strong> The number of rails determines the complexity of the cipher. More rails provide greater obfuscation.</li>
                    <li><strong className="text-white">Simple Implementation:</strong> The Rail Fence Cipher is easy to implement and understand but provides a basic level of security.</li>
                </ul>

                <p className="text-lg mb-4 text-gray-300">
                    This method is named after the way the text is written in a zigzag pattern resembling a fence. It’s an example of a transposition cipher, where the positions of the characters are permuted to hide the message.
                </p>

            </div>


        </div>
    )
}

export default RailFence