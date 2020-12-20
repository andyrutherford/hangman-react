import { useState } from 'react';

import './App.css';
import Game from './components/Game';
import Header from './components/Header';

function App() {
  const [gameWord, setGameWord] = useState('');

  const newGameHandler = (str: string) => {
    setGameWord(str);
  };

  return (
    <div className='App'>
      <Header startNewGame={newGameHandler} />
      {gameWord && <Game word={gameWord} />}
    </div>
  );
}

export default App;
