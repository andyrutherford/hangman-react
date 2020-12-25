import {
  Box,
  ChakraProvider,
  Container,
  extendTheme,
  Flex,
} from '@chakra-ui/react';

import './App.css';
import Game from './components/Game';
import Header from './components/Header';

import {
  gameWord as gameWordAtom,
  gameStatus as gameStatusAtom,
} from './atoms/atoms';
import { useRecoilValue } from 'recoil';
import GameOver from './components/GameOver';

import globalTheme from './theme';

const theme = extendTheme(globalTheme);

function App() {
  const gameWord = useRecoilValue(gameWordAtom);
  const { win, lose } = useRecoilValue(gameStatusAtom);
  return (
    <ChakraProvider theme={theme}>
      <Box
        w='600px'
        align='center'
        justify='center'
        boxShadow='lg'
        p='6'
        rounded='md'
        bg='white'
      >
        {gameWord === '' ? <Header /> : <Game />}
        {(win || lose) && <GameOver />}
      </Box>
    </ChakraProvider>
  );
}

export default App;
