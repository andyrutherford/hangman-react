import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIcon,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  type: 'info' | 'warning' | 'success' | 'error' | undefined;
  text: string;
};

const Alert: React.FC<Props> = ({ text, type }) => {
  return (
    <ChakraAlert status={type} my={3}>
      <AlertIcon />
      <AlertDescription>{text}</AlertDescription>
    </ChakraAlert>
  );
};

export default Alert;
