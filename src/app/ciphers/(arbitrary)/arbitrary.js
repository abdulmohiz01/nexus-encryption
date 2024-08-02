'use client'
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const CaesarCipher = () => {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [results, setResults] = useState([]);
  const [isRotationsVisible, setIsRotationsVisible] = useState(false);
  const [isEncryptMode, setIsEncryptMode] = useState(true);
  const [helper, setHelper] = useState('');

  const generateKeywordAlphabet = (keyword) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let keyUpper = keyword.toUpperCase();
    let uniqueKey = [...new Set(keyUpper.split(''))].join(''); // Remove duplicates
    let remainingAlphabet = alphabet.split('').filter(letter => !uniqueKey.includes(letter)).join('');
    return uniqueKey + remainingAlphabet;
  };

  const generateRotations = (text, keyword, encrypt = true) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let baseAlphabet = generateKeywordAlphabet(keyword);
    let substitutions = [];

    for (let i = 0; i < 25; i++) {
      let substitution = baseAlphabet.slice(i) + baseAlphabet.slice(0, i);
      let cipher = {};
      if (encrypt) {
        for (let j = 0; j < alphabet.length; j++) {
          cipher[alphabet[j]] = substitution[j];
        }
      } else {
        for (let j = 0; j < alphabet.length; j++) {
          cipher[substitution[j]] = alphabet[j];
        }
      }
      substitutions.push(cipher);
    }

    return substitutions;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setText(value);
    if (value.includes("<script>") || value.includes("{") || value.includes("}") || value.includes(";")) {
      setHelper("Sorry, Special Characters are not allowed.");
    } else {
      setHelper("");
    }
  };

  const handleKeyChange = (e) => {
    const value = e.target.value;
    setKey(value);
    if (value.includes("<script>") || value.includes("{") || value.includes("}") || value.includes(";")) {
      setHelper("Sorry, Special Characters are not allowed.");
    } else {
      setHelper("");
    }
  };

  const handleClick = () => {
    if (text.trim() === "" || key.trim() === "") {
      setHelper("Please enter both text and key!");
      return;
    }

    const substitutions = generateRotations(text.toUpperCase(), key.toUpperCase(), isEncryptMode);
    let result = substitutions.map((substitution, index) => {
      let transformedText = text.toUpperCase().split('').map(char => {
        return substitution[char] || char;
      }).join('');
      return {
        rotation: index + 1,
        transformed: transformedText
      };
    });
    setResults(result);
    setIsRotationsVisible(true);
  };

  const handleModeToggle = () => {
    setIsEncryptMode(!isEncryptMode);
    setResults([]);
    setIsRotationsVisible(false);
  };

  return (
    <div className="lg:ml-[150px]  xl:w-[60%] lg:w-[80%] flex flex-col gap-5 items-start h-auto w-auto p-5">
      <TextField
        autoComplete='off'
        className='sm:w-full xl:w-full'
        label="Text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={text}
        multiline
        minRows={2}
        maxRows={10}
        onChange={handleInputChange}
        helperText={helper}
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
        className='sm:w-full xl:w-full'
        label="Key"
        variant="outlined"
        fullWidth
        margin="normal"
        value={key}
        onChange={handleKeyChange}
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
        variant="contained"
        onClick={handleClick}
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
            color: 'black',
          },
        }}
      >
        {isEncryptMode ? 'Encrypt' : 'Decrypt'}
      </Button>

      <Button
        variant="contained"
        onClick={handleModeToggle}
        sx={{
          backgroundColor: 'gray',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '0.5rem',
          mt: '1rem',
          padding: '0.5rem 1rem',
          width: 'auto',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'lightgray',
            color: 'black',
          },

        }}
      >
        {isEncryptMode ? 'Switch to Decrypt Mode' : 'Switch to Encrypt Mode'}
      </Button>

      <div className={`xl:w-[100%] sm:w-full rotations-container ${isRotationsVisible ? 'open' : 'closed'}`}>
        <div className="w-full">
          <div className="xl:w-[60%] sm:w-full">
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
            {results.map((result, index) => (
              <div key={index} className="flex flex-wrap justify-around h-auto items-center bg-gray-100 md:m-3 sm:p-2 px-6 mb-2 rounded-md  shadow gap-3">
                <h3 className="text-gray-700 h-full font-semibold w-[30%] sm:w-[52px] p-2">ROT{result.rotation}</h3>
                <div className='w-[2px] sm:h-[25px] md:h-[35px] bg-gray-800'></div>
                <p className="text-gray-700 w-[80%] sm:w-[69%] lowercase ">{result.transformed}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaesarCipher;
