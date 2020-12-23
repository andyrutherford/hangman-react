import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Game from './components/Game';
import Header from './components/Header';

import { gameWord as gameWordAtom } from './atoms/atoms';
import { useRecoilValue } from 'recoil';

function App() {
  const gameWord = useRecoilValue(gameWordAtom);

  return (
    <ChakraProvider>{gameWord === '' ? <Header /> : <Game />}</ChakraProvider>
  );
}

export default App;
