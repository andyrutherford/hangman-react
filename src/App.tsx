import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Game from './components/Game';
import Header from './components/Header';

import {
  gameWord as gameWordAtom,
  gameStatus as gameStatusAtom,
} from './atoms/atoms';
import { useRecoilValue } from 'recoil';
import GameOver from './components/GameOver';

function App() {
  const gameWord = useRecoilValue(gameWordAtom);
  const { win, lose } = useRecoilValue(gameStatusAtom);
  return (
    <ChakraProvider>
      {gameWord === '' ? <Header /> : <Game />}
      {(win || lose) && <GameOver />}
    </ChakraProvider>
  );
}

export default App;
