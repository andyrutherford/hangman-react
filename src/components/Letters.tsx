import { Input } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

import { StyledLetter } from '../UI/Letter.styles';

const LettersWrapper = styled.div`
  outline: 1px solid green;
  display: flex;
  justify-content: space-evenly;
`;

type Props = {
  word: string[];
  matches: boolean[];
};

const Letters: React.FC<Props> = ({ word, matches }) => {
  return (
    <LettersWrapper>
      {word.map((a, b) => (
        <Input
          key={b}
          type='text'
          value={matches[b] ? a : '?'}
          disabled={matches[b] ? false : true}
          w='60px'
          py={8}
          textAlign='center'
          fontSize={32}
        />
      ))}
    </LettersWrapper>
  );
};

export default Letters;
