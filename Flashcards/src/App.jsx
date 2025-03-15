import React, { useState } from 'react'
import Flashcard from './Flashcard';
import flashcards from './flashcards';
import './App.css';
import './App.css'

function App() {
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Choose a random card index when the user clicks "Next Card"
  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className="app">
      <header>
        <h1>Coutry Capital City Flashcard Set</h1>
        <p>Flashcards of country's capital cities!</p>
        <p>Total Cards: {flashcards.length}</p>
      </header>
      <main>
        <Flashcard card={flashcards[currentCardIndex]} />
        <button onClick={nextCard}>Next</button>
      </main>
    </div>
  );
}

export default App
