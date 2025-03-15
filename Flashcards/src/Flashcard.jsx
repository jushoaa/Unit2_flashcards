import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ card }) {
  const [showQuestion, setShowQuestion] = useState(true);

  // Toggle between question and answer
  const handleCardClick = () => {
    setShowQuestion(prev => !prev);
  };

  return (
    <div className="flashcard" onClick={handleCardClick}>
      {showQuestion ? card.question : card.answer}
    </div>
  );
}

export default Flashcard;