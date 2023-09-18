import React, { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import 'tailwindcss/tailwind.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FrequentlyAskedQuestions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const questions: FAQItem[] = [
    {
      question: 'How do I sign up for an offer?',
      answer: 'To sign up for an offer, follow these steps , To sign up for an offer, follow these steps , To sign up for an offer, follow these steps...',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept credit cards, PayPal, and more , We accept credit cards, PayPal, and more , We accept credit cards, PayPal, and more...',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time , Yes, you can cancel your subscription at any time , Yes, you can cancel your subscription at any time ...',
    },
  ];

  return (
    <div className="w-full mx-auto p-8 m-4"> 
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div>
        {questions.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-300 p-4 rounded-md cursor-pointer mb-4 ${
              activeIndex === index ? 'bg-white' : ''
            }`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex justify-between items-center">
              <div
                className={`text-lg font-semibold w-4/5 not-italic ${
                  activeIndex === index ? 'text-cyan-500' : 'text-black'
                }`}
              >
                {item.question}
              </div>
              <ExpandMore
                className={`transition-transform transform ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
            {activeIndex === index && (
              <p className={`mt-2 ${activeIndex === index ? 'text-black' : 'hidden'}`}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
