import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  gameStatus as gameStatusAtom,
  gameWord as gameWordAtom,
} from '../atoms/atoms';

const GameOver: React.FC = () => {
  const [{ win }, setGameStatus] = useRecoilState(gameStatusAtom);
  const [gameWord, setGameWord] = useRecoilState(gameWordAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 3000);
  });

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return display ? (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{win ? 'Congratulations!' : 'Oh no!'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>You {win ? 'won! 🥳' : 'lost! 😞'}</p>
            <p> The word is {gameWord}.</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant='ghost'
              onClick={() => {
                setGameStatus({ win: false, lose: false });
                setGameWord('');
              }}
            >
              New Game
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  ) : (
    <></>
  );
};

export default GameOver;
