import './App.css';
import { useState } from 'react';
function App() {
  const [gameState, setGameState] = useState('menu');
  return (
    <div className="App">
      <h1>Quiz App</h1>
    </div>
  );
}

export default App;
