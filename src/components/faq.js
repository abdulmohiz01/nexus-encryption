'use client';
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { backIn } from "framer-motion";

const questionsAndAnswers = [
  {
    question: "What is the most common cipher?",
    answer: "The Caesar cipher is one of the most iconic classical ciphers due to its simplicity.",
  },
  {
    question: "What are modern encryption techniques?",
    answer: "Modern methods include AES, RSA, and hash functions.",
  },
  {
    question: "How do cipher tools work?",
    answer: "These tools follow predefined algorithms to systematically encrypt or decrypt text.",
  },
  {
    question: "What is the difference between encoding and encryption?",
    answer: "Encoding ensures data is readable by specific systems, while encryption secures it against unauthorized access.",
  },
  {
    question: "Are online cipher tools safe?",
    answer: "Yes, credible platforms adhere to strict privacy and security protocols to protect user data.",
  },
];

export default function FAQSection() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-8" >
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {questionsAndAnswers.map((qa, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-400 rounded-lg bg-transparent text-white" >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleQuestion(index)} >
            <h3 className="font-semibold">{qa.question}</h3>
            <IconButton
              sx={{
                color: "white",
                transition: "transform 0.3s",
                transform: activeQuestion === index ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
          <Collapse in={activeQuestion === index}>
            <p className="mt-2 text-gray-300">{qa.answer}</p>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
