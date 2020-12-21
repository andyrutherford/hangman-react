import React from 'react';
import styled from 'styled-components';
import { Body } from '../UI/Body.styles';
import { Scaffold } from '../UI/Scaffold.styles';

const HangmanWrapper = styled.div`
  position: relative;
  border: 2px dashed #000;
`;

const Hangman = () => {
  return (
    <HangmanWrapper>
      <Scaffold>
        <div className='bottom'></div>
        <div className='middle'></div>
        <div className='top'></div>
      </Scaffold>
      <Body>
        <div className='left-leg'></div>
        <div className='right-leg'></div>
        <div className='torso'></div>
        <div className='left-arm'></div>
        <div className='right-arm'></div>
        <div className='head'></div>
      </Body>
    </HangmanWrapper>
  );
};

export default Hangman;
