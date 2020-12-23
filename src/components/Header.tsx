import { useState } from 'react';
import { useRecoilState } from 'recoil';

import randomWords from 'random-words';

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

import { gameWord as gameWordAtom } from '../atoms/atoms';
import { lettersOnly } from '../utils';

const ALERT_TIMEOUT_DURATION = 3000;

const Header: React.FC = () => {
  const [gameWord, setGameWord] = useRecoilState(gameWordAtom);

  const [word, setWord] = useState('abc');
  const [alertText, alertType, setAlert] = useAlert(
    '',
    'info',
    ALERT_TIMEOUT_DURATION
  );

  const [loading, setLoading] = useState(false);

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
      setGameWord(word);
    }, 1500);
  };

  const onChangeHandler = (e: any) => {
    setWord(lettersOnly(e.target.value));
  };

  return (
    <div>
      <SlideFade in={!gameWord} offsetY='20px' unmountOnExit>
        <Container
          centerContent
          pt={5}
          mx='auto'
          border='1px'
          borderColor='gray.200'
        >
          <Heading>Hangman</Heading>
          <Collapse in={!isOpen} animateOpacity unmountOnExit>
            <Button
              m={5}
              colorScheme='blue'
              onClick={() => {
                setGameWord('');
                onToggle();
              }}
            >
              New Game
            </Button>
          </Collapse>
          <Collapse in={isOpen} animateOpacity unmountOnExit>
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
                      variant='outline'
                      colorScheme='blue'
                      onClick={() => {
                        setWord('');
                        onToggle();
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      variant='ghost'
                      colorScheme='blue'
                      onClick={() => {
                        setWord(randomWords());
                      }}
                    >
                      Randomword
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
