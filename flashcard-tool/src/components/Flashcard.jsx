import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-front">
        {flashcard.question}
      </div>
      <div className="flashcard-back">
        {flashcard.answer}
      </div>
    </div>
  );
};

export default Flashcard;
