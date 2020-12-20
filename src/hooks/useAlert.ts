import { useState } from 'react';

export const useAlert = (text: any, duration: any) => {
  const [alertText, setAlertText] = useState(text);

  setTimeout(() => {
    setAlertText('');
  }, 1000);

  return [alertText, setAlertText];
};
