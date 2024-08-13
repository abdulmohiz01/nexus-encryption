'use client'
import { useRef, useState, useEffect } from "react";
import { FiLock, FiUnlock } from "react-icons/fi";
import { motion } from "framer-motion";

const TARGET_TEXT = "Encrypt";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const Button = ({ onClick, buttonText, type }) => {
    const intervalRef = useRef(null);
    const [text, setText] = useState(buttonText || TARGET_TEXT);
    const originalText = useRef(buttonText || TARGET_TEXT); // Store original text
    const [animationActive, setAnimationActive] = useState(false); // State for controlling animation

    useEffect(() => {
        originalText.current = buttonText || TARGET_TEXT; // Update original text if buttonText changes
        setText(buttonText || TARGET_TEXT);
    }, [buttonText]);

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = originalText.current.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= originalText.current.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setText(originalText.current); // Restore original text
    };

    const handleOnHover = () => {
        setAnimationActive(true); // Activate animation on click
        // Stop the animation after 2 seconds
        setTimeout(() => {
            setAnimationActive(false);
        }, 2000);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            onClick={onClick}
            onHoverStart={handleOnHover}
            className="group relative overflow-hidden rounded-lg mb-4 border-[1px] border-gray-300 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-100 transition-colors hover:text-white"
        >
            <div className="relative z-10 flex items-center gap-2 ">
                {type == 1 ? <FiLock /> : null}
                {type == 2 ? <FiUnlock /> : null} 
                <span>{text}</span>
            </div>
            <motion.span
                initial={{ y: "100%" }}
                animate={animationActive ? { y: "-100%" } : { y: "100%" }} // Control animation based on state
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "linear",
                }}
                className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-white to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
            />
        </motion.button>
    );
};

export default Button;
