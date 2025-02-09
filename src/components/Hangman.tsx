import { Container } from '@chakra-ui/react';
import React from 'react';
import { Body } from '../UI/Body.styles';
import { Scaffold } from '../UI/Scaffold.styles';

import { ReactComponent as Noose } from '../assets/noose.svg';

type Props = {
  incorrectGuesses: number;
};

const Hangman: React.FC<Props> = React.memo(({ incorrectGuesses }) => {
  return (
    <Container position='relative'>
      <Scaffold>
        <div className='bottom'></div>
        <div className='middle'></div>
        <div className='top-1'></div>
        <div className='top-2'></div>
        <div className='noose'>
          <div className='rope'></div>
          <Noose id='noose' />
        </div>
      </Scaffold>
      <Body>
        {incorrectGuesses >= 1 && <div className='left-leg'></div>}
        {incorrectGuesses >= 2 && <div className='right-leg'></div>}
        {incorrectGuesses >= 3 && (
          <>
            <div className='torso'></div>
            <div className='neck'></div>
          </>
        )}
        {incorrectGuesses >= 4 && <div className='left-arm'></div>}
        {incorrectGuesses >= 5 && <div className='right-arm'></div>}
        {incorrectGuesses >= 6 && <div className='head'></div>}
        {incorrectGuesses >= 7 && (
          <div className='face'>
            <div className='left-eye'>&#10060;</div>
            <div className='right-eye'>&#10060;</div>
            <div className='mouth'></div>
            <div className='tongue'></div>
          </div>
        )}
      </Body>
    </Container>
  );
});

export default Hangman;
