import { useState, useRef, useEffect } from 'react';
import { useAlert } from '../hooks/useAlert';
import { InputLetter } from '../UI/InputLetter.styles';
import Hangman from './Hangman';
import Letters from './Letters';
import Alert from './Alert';

import {
  Container,
  Heading,
  Input,
  Button,
  useDisclosure,
  Collapse,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
  Alert as ChakraAlert,
  AlertIcon,
  AlertDescription,
  Fade,
  SlideFade,
  ScaleFade,
} from '@chakra-ui/react';

type Props = {
  word: string;
};

const ALERT_TIMEOUT_DURATION = 3000;

const Game: React.FC<Props> = ({ word }) => {
  const [char, setChar] = useState('');
  const [alertText, alertType, setAlert] = useAlert({
    text: '',
    type: 'warning',
    duration: ALERT_TIMEOUT_DURATION,
  });
  const myRef = useRef(word.split(''));
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
  const [playerWin, setPlayerWin] = useState(false);
  const [playerLose, setPlayerLose] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (guesses.correct.length === word.length) {
      setPlayerWin(true);
    }
    if (guesses.incorrect.length === 7) {
      setPlayerLose(true);
    }
  }, [guesses.correct, guesses.incorrect, word.length]);

  useEffect(() => {}, []);

  const letterHandler = (letter: string) => {
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
        // setAlertText('Match!', 'success', ALERT_TIMEOUT_DURATION);
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

    setTimeout(() => setChar(''), 1000);
  };

  return (
    <ScaleFade in={true} initialScale={0.9}>
      <Container centerContent>
        <label htmlFor='guess-letter'>Guess a letter: </label>
        <Input
          id='guess-letter'
          autoFocus
          maxLength={1}
          type='text'
          onChange={(e) => letterHandler(e.target.value)}
          value={char}
          w='60px'
          py={8}
          textAlign='center'
          fontSize={32}
        />
      </Container>
      {alertText && <Alert text={alertText} type={alertType} />}
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
