import React, { useState } from 'react';
import Flashcard from './Flashcard';
import flashcards from './flashcards';
import './App.css';

function App() {
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [user, setAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswer, setAnswerAsCorrect] = useState(false);

  const currentCard = flashcards[currentCardIndex];

  //reset variables
  const resetState = () => {
    setAnswer('');
    setAnswerAsCorrect(false);
    setShowAnswer(false);
  };

  //input change
  const inputChange = (event) => {
    setAnswer(event.target.value);
    setAnswerAsCorrect(false);
  };

  //checking answer
  const handleAnswer = () => {
    if(user.trim().toLowerCase() === currentCard.answer.trim().toLowerCase()) {
        setAnswerAsCorrect(true);
        setShowAnswer(true);
    }else{
      setAnswerAsCorrect(false);
    }
  };

  //move onto next card if answer is correct
  const handleNext = () => {
    if(!correctAnswer) return;
    const nextIndex = (currentCardIndex + 1) % flashcards.length;
    setCurrentCardIndex(nextIndex);
    resetState();
  };

  //handle moving back a card
  const handleBack = () => {
    const prevIndex = currentCardIndex- 1 < 0 ? flashcards.length - 1: currentCardIndex - 1;
    setCurrentCardIndex(prevIndex);
    resetState();
  };

  const inputClass = correctAnswer ? 'user-input correct'
  : user && !correctAnswer
  ? 'user-input incorrect'
  : 'user-input';
  
  return (
    <div className="app">
      <header>
        <h1>Country Capital City Flashcard Set</h1>
        <p>Flashcards of country's capital cities!</p>
        <p>Number of cards: {flashcards.length}</p>
      </header>
      <main>
        <div className="flashcard-container">
        <Flashcard card={currentCard} showAnswer={showAnswer}/>
          <div className="input-section">
            <input
              type="text"
              value={user}
              onChange={inputChange}
              placeholder= "Guess the answer here"
              className={inputClass}
              />
              <button onClick={handleAnswer}>Submit</button>
          </div>
          <div className="navigation">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext} disabled={!correctAnswer}>Next</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;