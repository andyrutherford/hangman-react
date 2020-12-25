import { useState, useRef, useEffect } from 'react';
import { useAlert } from '../hooks/useAlert';
import Hangman from './Hangman';
import Letters from './Letters';
import Alert from './Alert';

import {
  Container,
  Input,
  ScaleFade,
  Flex,
  Divider,
  Text,
  Button,
} from '@chakra-ui/react';

import {
  gameWord as gameWordAtom,
  gameStatus as gameStatusAtom,
} from '../atoms/atoms';
import { useRecoilState } from 'recoil';
import { lettersOnly } from '../utils';
import { useResetRecoilState } from 'recoil';

const ALERT_TIMEOUT_DURATION = 3000;
const GUESS_INTERVAL = 2000;

const Game: React.FC = () => {
  const [gameWord] = useRecoilState(gameWordAtom);
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusAtom);
  const resetGameWord = useResetRecoilState(gameWordAtom);
  const resetGameStatus = useResetRecoilState(gameStatusAtom);
  const [char, setChar] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [alertText, alertType, setAlert] = useAlert();
  const currentGameWord = useRef(gameWord.split(''));
  const [matches, setMatches] = useState(() =>
    Array(currentGameWord.current.length).fill(false)
  );
  const [guesses, setGuesses] = useState<{
    correct: string[];
    incorrect: string[];
  }>({
    correct: [],
    incorrect: [],
  });

  const inputRef = useRef<any>();

  // If player wins/loses game
  useEffect(() => {
    if (guesses.correct.length === gameWord.length) {
      setGameStatus((prevGameStatus) => ({ ...prevGameStatus, win: true }));
    }
    if (guesses.incorrect.length === 7) {
      setGameStatus((prevGameStatus) => ({ ...prevGameStatus, lose: true }));
    }
  }, [guesses.correct, guesses.incorrect, gameWord.length, setGameStatus]);

  // Refocus input after alert goes away and previous guess is cleared
  useEffect(() => {
    if (!alertText && inputRef.current) {
      inputRef.current.focus();
    }
  }, [alertText]);

  // If game is over display alert
  useEffect(() => {
    if (gameStatus.win) {
      setAlert({
        text: 'Congrats, you won!',
        type: 'success',
      });
    }
    if (gameStatus.lose) {
      setAlert({
        text: 'You lost, too bad!',
        type: 'error',
      });
    }
  }, [gameStatus, setAlert]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      resetGameWord();
      resetGameStatus();
    };
  }, [resetGameWord, resetGameStatus]);

  const letterHandler = (letter: string) => {
    setGuessCount(guessCount + 1);
    setChar(letter);

    if (currentGameWord.current.includes(letter)) {
      if (guesses.correct.includes(letter)) {
        setAlert({
          text: 'You already chose this letter.',
          type: 'warning',
          duration: ALERT_TIMEOUT_DURATION,
        });
      } else {
        setAlert({
          text: 'Match!',
          type: 'success',
          duration: ALERT_TIMEOUT_DURATION,
        });
        const matchIndexes = currentGameWord.current.reduce(
          (a: number[], curr: string, index: number) => {
            if (curr === letter) {
              a.push(index);
            }
            return a;
          },
          []
        );
        const newMatchesArr = [...matches];
        matchIndexes.forEach((a: number) => (newMatchesArr[a] = true));
        setGuesses((currentGuesses) => ({
          ...currentGuesses,
          correct: [
            ...currentGuesses.correct,
            ...Array(matchIndexes.length).fill(letter),
          ],
        }));
        setMatches(newMatchesArr);
      }
    } else {
      setGuesses((currentGuesses) => ({
        ...currentGuesses,
        incorrect: [...currentGuesses.incorrect, letter],
      }));
      setAlert({
        text: 'Nope!',
        type: 'error',
        duration: ALERT_TIMEOUT_DURATION,
      });
    }

    setTimeout(() => setChar(''), GUESS_INTERVAL);
  };

  return (
    <ScaleFade in={true} initialScale={0.9}>
      <Flex justify='space-between' align='center' px={2} mb={3}>
        <Text>Guesses: {guessCount}</Text>
        <Button
          onClick={() => {
            resetGameWord();
            resetGameStatus();
          }}
        >
          New game
        </Button>
      </Flex>
      <Flex
        align='center'
        justify='space-between'
        height='100px'
        border='1px'
        borderColor='gray.200'
        borderRadius='10px'
        maxW='1000px'
        mx='auto'
      >
        <Container centerContent>
          <Flex align='center'>
            {gameStatus.win || gameStatus.lose ? (
              <Text fontSize='2xl'>Game over.</Text>
            ) : (
              <>
                <Text fontSize='2xl'>Guess a letter: </Text>
                <Input
                  variant='flushed'
                  id='guess-letter'
                  autoFocus
                  maxLength={1}
                  type='text'
                  onChange={(e) =>
                    lettersOnly(e.target.value) !== '' &&
                    letterHandler(lettersOnly(e.target.value))
                  }
                  value={char}
                  w='60px'
                  py={8}
                  ml={5}
                  textAlign='center'
                  fontSize={32}
                  disabled={!!alertText}
                  ref={inputRef}
                />
              </>
            )}
          </Flex>
        </Container>
        <Divider orientation='vertical' height='80%' />
        <Container>
          <ScaleFade in={alertText} initialScale={0.9}>
            <Alert text={alertText} type={alertType} />
          </ScaleFade>
        </Container>
      </Flex>

      <Hangman incorrectGuesses={guesses.incorrect.length} />
      <Letters word={currentGameWord.current} matches={matches} />
    </ScaleFade>
  );
};

export default Game;
