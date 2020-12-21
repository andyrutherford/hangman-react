import { useState } from 'react';

import './App.css';
import Game from './components/Game';
import Header from './components/Header';

function App() {
  const [gameWord, setGameWord] = useState('');

  const newGameHandler = (str: string) => {
    setGameWord(str);
  };

  const resetGameHandler = () => setGameWord('');

  return (
    <div className='App'>
      <Header startNewGame={newGameHandler} resetGame={resetGameHandler} />
      {gameWord && <Game word={gameWord} />}
    </div>
  );
}

export default App;
