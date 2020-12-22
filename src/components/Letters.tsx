import { Flex, Input } from '@chakra-ui/react';
import React from 'react';

type Props = {
  word: string[];
  matches: boolean[];
};

const Letters: React.FC<Props> = ({ word, matches }) => {
  return (
    <Flex
      align='center'
      justify='space-evenly'
      border='1px'
      borderColor='gray.200'
      borderRadius='8px'
      maxW='1000px'
      mx='auto'
    >
      {word.map((a, b) => (
        <Input
          variant='flushed'
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
    </Flex>
  );
};

export default Letters;
