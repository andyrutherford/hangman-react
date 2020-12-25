import { theme } from '@chakra-ui/react';

const globalTheme = {
  ...theme,
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'teal.500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
      button: {
        color: 'red',
        backgroundColor: 'red',
      },
    },
  },
};

export default globalTheme;
