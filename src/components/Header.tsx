import { useEffect, useState } from 'react';

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
  SlideFade,
} from '@chakra-ui/react';
import Alert from './Alert';

import { useAlert } from '../hooks/useAlert';
const ALERT_TIMEOUT_DURATION = 3000;

type Props = {
  startNewGame: (arg0: string) => void;
  resetGame: () => void;
};

const Header: React.FC<Props> = ({ startNewGame, resetGame }) => {
  const [word, setWord] = useState('abc');
  const [alertText, alertType, setAlert] = useAlert(
    '',
    'info',
    ALERT_TIMEOUT_DURATION
  );

  const [loading, setLoading] = useState(false);
  const {
    isOpen: componentVisible,
    onToggle: componentOnToggle,
  } = useDisclosure();
  const { isOpen, onToggle } = useDisclosure();

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (word.length < 3 || word.length > 15) {
      return setAlert({
        text: 'The word must be between 3 and 15 letters.',
        type: 'error',
        duration: ALERT_TIMEOUT_DURATION,
      });
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setWord('');
      componentOnToggle();
      startNewGame(word);
    }, 2000);
  };

  // const startGameHandler = () => {
  //   setNewGame(false);
  //   setWord('');
  //   setReady(false);
  //   startNewGame(word);
  // };

  const onChangeHandler = (e: any) => {
    let value = e.target.value;
    value = value.replace(/[^A-Za-z]/gi, '');
    setWord(value.toLowerCase());
  };

  useEffect(() => {
    componentOnToggle();
  }, []);

  return (
    <div>
      <SlideFade in={componentVisible} offsetY='20px' unmountOnExit>
        <Container
          centerContent
          pt={5}
          mx='auto'
          border='1px'
          borderColor='gray.200'
        >
          <Heading>Hangman</Heading>
          <Collapse in={!isOpen} animateOpacity>
            <Button
              m={5}
              colorScheme='blue'
              onClick={() => {
                resetGame();
                onToggle();
              }}
            >
              New Game
            </Button>
          </Collapse>
          <Collapse in={isOpen} animateOpacity>
            <Box py='20px' mt={1} rounded='md' shadow='md'>
              <FormControl>
                <form onSubmit={submitHandler}>
                  <FormLabel htmlFor='new-game-input'>
                    Create a word:{' '}
                  </FormLabel>
                  <Input
                    variant='flushed'
                    autoFocus
                    id='new-game-input'
                    type='text'
                    onInput={onChangeHandler}
                    value={word}
                    isInvalid={alertText}
                    errorBorderColor='crimson'
                  />
                  <FormHelperText my={2}>
                    Enter a word between 3 and 15 characters, without spaces.
                  </FormHelperText>
                  <Stack spacing={4} direction='row'>
                    <Button
                      colorScheme='blue'
                      onClick={() => {
                        setWord('');
                        onToggle();
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      colorScheme='blue'
                      type='submit'
                      isLoading={loading}
                      loadingText='Starting Game...'
                    >
                      Submit
                    </Button>
                  </Stack>
                </form>
              </FormControl>
              <Collapse in={alertText} animateOpacity>
                <Alert text={alertText} type={alertType} />
              </Collapse>
            </Box>
          </Collapse>
        </Container>
      </SlideFade>
    </div>
  );
};

export default Header;
