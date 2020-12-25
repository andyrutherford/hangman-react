import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

// Components
import Header from './components/Header';
import Game from './components/Game';
import GameOver from './components/GameOver';

// Atoms
import {
  gameWord as gameWordAtom,
  gameStatus as gameStatusAtom,
} from './atoms/atoms';

// Theme
import globalTheme from './theme';

const theme = extendTheme(globalTheme);

function App() {
  const gameWord = useRecoilValue(gameWordAtom);
  const { win, lose } = useRecoilValue(gameStatusAtom);
  return (
    <ChakraProvider theme={theme}>
      <Box
        w='650px'
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
