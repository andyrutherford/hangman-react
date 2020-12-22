import { useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Game from './components/Game';
import Header from './components/Header';

function App() {
  const [gameWord, setGameWord] = useState('');

  const newGameHandler = (str: string) => {
    setTimeout(() => {
      setGameWord(str);
    }, 150);
  };

  const resetGameHandler = () => setGameWord('');

  return (
    <ChakraProvider>
      {gameWord === '' && (
        <Header startNewGame={newGameHandler} resetGame={resetGameHandler} />
      )}
      {gameWord && <Game word={gameWord} resetGame={resetGameHandler} />}
    </ChakraProvider>
  );
}

export default App;
