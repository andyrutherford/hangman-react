import { useState, useRef, useEffect } from 'react';
import { useAlert } from '../hooks/useAlert';
import Hangman from './Hangman';
import Letters from './Letters';
import Alert from './Alert';

import {
  Container,
  Input,
  useDisclosure,
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

const ALERT_TIMEOUT_DURATION = 3000;

const Game: React.FC = () => {
  const [gameWord, setGameWord] = useRecoilState(gameWordAtom);
  const [gameStatus, setGameStatus] = useRecoilState(gameStatusAtom);
  const [char, setChar] = useState('');
  const [alertText, alertType, setAlert] = useAlert(
    '',
    'info',
    ALERT_TIMEOUT_DURATION
  );
  const myRef = useRef(gameWord.split(''));
  const [matches, setMatches] = useState(() =>
    Array(myRef.current.length).fill(false)
  );
  const [guesses, setGuesses] = useState<{
    correct: string[];
    incorrect: string[];
  }>({
    correct: [],
    incorrect: [],
  });

  const { isOpen, onToggle: componentOnToggle } = useDisclosure();
  const inputRef = useRef<any>();
  useEffect(() => {
    if (guesses.correct.length === gameWord.length) {
      setGameStatus({ ...gameStatus, win: true });
    }
    if (guesses.incorrect.length === 7) {
      setGameStatus({ ...gameStatus, lose: true });
    }
  }, [guesses.correct, guesses.incorrect, gameWord.length]);

  // Refocus input after alert goes away and previous guess is cleared
  useEffect(() => {
    if (!alertText) {
      inputRef.current.focus();
    }
  }, [alertText]);

  const letterHandler = (letter: string) => {
    console.log(letter);
    setChar(letter);
    if (myRef.current.includes(letter)) {
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
        setGuesses((currentGuesses) => ({
          ...currentGuesses,
          correct: [...currentGuesses.correct, letter],
        }));
        const matchIndex = myRef.current.findIndex((i) => i === letter);
        setMatches((matches) =>
          matches.map((m, i) => (i === matchIndex ? 'true' : m))
        );
      }
    } else {
      setGuesses((currentGuesses) => ({
        ...currentGuesses,
        incorrect: [...currentGuesses.incorrect, letter],
      }));
      // setAlertText('No Match', 1000);
      setAlert({
        text: 'Nope!',
        type: 'error',
        duration: ALERT_TIMEOUT_DURATION,
      });
    }

    setTimeout(() => setChar(''), 3000);
  };

  return (
    <ScaleFade in={true} initialScale={0.9}>
      <Button
        onClick={() => {
          componentOnToggle();
          setTimeout(() => {
            setGameWord('');
          }, 150);
        }}
      >
        Reset game
      </Button>
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
      <Letters word={myRef.current} matches={matches} />
      {JSON.stringify(matches)}
      <p>
        Correct: {guesses.correct}, Incorrect: {guesses.incorrect}
      </p>
    </ScaleFade>
  );
};

export default Game;
