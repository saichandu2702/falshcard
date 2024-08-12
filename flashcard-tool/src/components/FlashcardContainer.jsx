import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './FlashcardContainer.css';

const FlashcardContainer = () => {
  const flashcards = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is 2 + 2?', answer: '4' },
    { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    // Add more flashcards as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flashcard-container">
      <Flashcard flashcard={flashcards[currentIndex]} />
      <div className="navigation-buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardContainer;
