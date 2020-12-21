import React from 'react';
import styled from 'styled-components';
import { Body } from '../UI/Body.styles';
import { Scaffold } from '../UI/Scaffold.styles';

const HangmanWrapper = styled.div`
  position: relative;
  border: 2px dashed #000;
`;

type Props = {
  incorrectGuesses: number;
};

const Hangman: React.FC<Props> = React.memo(({ incorrectGuesses }) => {
  console.log('hangman render');
  return (
    <HangmanWrapper>
      <Scaffold>
        <div className='bottom'></div>
        <div className='middle'></div>
        <div className='top'></div>
      </Scaffold>
      <Body>
        {incorrectGuesses >= 1 && <div className='left-leg'></div>}
        {incorrectGuesses >= 2 && <div className='right-leg'></div>}
        {incorrectGuesses >= 3 && <div className='torso'></div>}
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
    </HangmanWrapper>
  );
});

export default Hangman;
