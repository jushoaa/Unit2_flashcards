import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ card, showAnswer}) {

  return (
    <div className="flashcard" >
      {showAnswer ? card.answer : card.question}
    </div>
  );
}

export default Flashcard;