import './App.css';
import { useState } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizContext } from './helpers/Context';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); // Track all user answers

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore, userAnswers, setUserAnswers }}>
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
