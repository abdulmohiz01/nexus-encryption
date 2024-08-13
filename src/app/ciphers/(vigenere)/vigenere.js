'use client';
import { useState } from 'react';
import { TextField} from '@mui/material';
import Button from '../../../components/button';

const Vigenere = () => {
  const [text, setText] = useState('');
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState('');
  const [isEncryptMode, setIsEncryptMode] = useState(true);
  const [helper, setHelper] = useState('');

  const vigenereCipher = (text, keyword, encrypt = true) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const textUpper = text.toUpperCase();
    const keywordUpper = keyword.toUpperCase();
    let result = '';
    let keywordIndex = 0;

    for (let i = 0; i < textUpper.length; i++) {
      const textChar = textUpper[i];
      const keywordChar = keywordUpper[keywordIndex % keywordUpper.length];

      if (alphabet.includes(textChar)) {
        const textPos = alphabet.indexOf(textChar);
        const keywordPos = alphabet.indexOf(keywordChar);
        const shift = encrypt ? keywordPos : -keywordPos;
        const newPos = (textPos + shift + 26) % 26;
        result += alphabet[newPos];
        keywordIndex++;
      } else {
        result += textChar;
      }
    }

    return result;
  };

  const handleEncrypt = () => {
    if (text.trim() === '' || keyword.trim() === '') {
      setHelper('Please enter both text and keyword.');
      return;
    }
    if (/[^A-Z\s]/i.test(text) || /[^A-Z\s]/i.test(keyword)) {
      setHelper('Text and keyword should contain only letters and spaces.');
      return;
    }
    setHelper('');
    setResult(vigenereCipher(text, keyword, isEncryptMode));
  };

  const handleModeToggle = () => {
    setIsEncryptMode(!isEncryptMode);
    setResult('');
  };

  return (
    <div className="lg:ml-[150px] xl:w-[60%] lg:w-[80%] flex flex-col gap-5 items-start h-auto  p-5">
      <h1 className='text-3xl font-semibold'>Vigenère Cipher: Decoder and Encoder</h1>

      <TextField
        autoComplete='off'
        className='sm:w-full xl:w-[100%]'
        label="Text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={text}
        multiline
        minRows={2}
        maxRows={10}
        onChange={(e) => setText(e.target.value)}
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
      <TextField
        autoComplete='off'
        className='xl:w-[100%] sm:w-full '
        label="Keyword"
        variant="outlined"
        fullWidth
        margin="normal"
        value={keyword}
        helperText={helper}
        onChange={(e) => setKeyword(e.target.value)}
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
      <Button onClick={handleEncrypt} buttonText={isEncryptMode ? 'Encrypt' : 'Decrypt'} type={isEncryptMode ? 1 : 2}/>
      <Button onClick={handleModeToggle} buttonText={isEncryptMode ? 'Switch to Decrypt Mode' : 'Switch to Encrypt Mode'}/>
      <div className={`sm:w-full lg:w-[80%] rotations-container ${result ? 'open' : 'closed'}`}>
        <div className="w-full">
          <div className="xl:w-[100%] sm:w-full">
            <hr className="w-full border-t border-gray-300 my-5" />
            <h1 className="text-2xl font-semibold mb-3 sm:px-2">Result</h1>
            <div className="flex flex-wrap justify-around h-auto items-center bg-gray-100 md:m-3 sm:p-2 px-6 mb-2 rounded-md shadow gap-3">
              <p className="text-gray-700 w-full sm:w-[69%]">{result}</p>
            </div>
          </div>
        </div>
      </div>
      <p className='text-lg mb-4 w-full  text-gray-300'>
        The Vigenère cipher is a method of encrypting text using a series of different Caesar ciphers based on the letters of a keyword. It is a polyalphabetic substitution cipher that provides better security than a simple Caesar cipher by using a repeating key. This cipher is named after Blaise de Vigenère, who popularized it in the 16th century.
      </p>
    </div>
  );
};

export default Vigenere;
