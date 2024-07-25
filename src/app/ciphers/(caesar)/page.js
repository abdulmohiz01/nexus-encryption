'use client'
import React, { useState } from 'react'
import { TextField } from '@mui/material';


const Caesar = () => {
    const [inputText, setInputText] = useState("");
    const [rotations, setRotations] = useState([]);
    const [helper, setHelper] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        if (e.target.value.includes("<script>") || e.target.value.includes("{") || e.target.value.includes("}") || e.target.value.includes(";")) {
            setHelper("Sorry, Special Characters are not allowed.")
            return
        }
        setHelper("");
    };

    const handleEncrypt = () => {
        let text = inputText.toLowerCase();
        if (text == "" || text == " ") {
            setHelper("Please Enter text first!");
            return
        }
        else {
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
    };
    return (
        <div className='lg:ml-[150px]' >
            <h1 className=" p-5 text-3xl font-bold mb-5">Caesar Cipher Page</h1>

            <div className="flex flex-col gap-5  items-start h-auto w-full p-5 ">
                <TextField
                    className='sm:w-full xl:w-[60%] '
                    name='text'
                    value={inputText}
                    onChange={handleInputChange}
                    id="outlined-basic"
                    label="Enter Your Text Here"
                    variant="outlined"
                    helperText={helper}
                    multiline
                    minRows={2}
                    maxrows={10}
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
                <button onClick={handleEncrypt} className="bg-gray-300 font-semibold text-black p-2 rounded-md mt-3 hover:bg-gray-100 transition-all duration-300 w-[200px]">
                    Encrypt
                </button>
            </div>




            {/* ---------------------ROTATIONS--------------------- */}
            {rotations.length > 0 && (
                <div className="w-full">
                    <div className="xl:w-[60%]  sm:w-full ">
                        <hr className="w-full border-t border-gray-300 my-5" />
                        <h1 className="text-2xl font-semibold mb-3 sm:px-2">Transformation</h1>
                        <div className='flex items-center justify-around md:p-2 sm:py-1 sm:px-2 gap-2'>
                            <div className='sm:w-[20%]  md:w-[15%]'>
                                <h2>Rotations</h2>
                            </div>
                            <div className='sm:w-[70%] w-[80%]'>
                                <h2 >Transformed Text</h2>
                            </div>
                        </div>
                        {rotations.map((rotation, index) => (
                            <div key={index} className="flex flex-wrap justify-around h-auto items-center bg-gray-100 md:m-3 sm:p-2 px-6 mb-2 rounded-md shadow gap-3">
                                <h3 className=" text-gray-700 h-full font-semibold w-[30%] sm:w-[52px]  p-2">ROT{rotation.rotation}</h3>
                                <div className='w-[2px] sm:h-[25px] md:h-[35px] bg-gray-800'></div>
                                <p className="text-gray-700 w-[80%] sm:w-[69%]  ">{rotation.transformed}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Caesar