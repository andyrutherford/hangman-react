import { useState, useEffect } from 'react';

type Props = {
  text: string;
  type: string;
  duration: number;
};

export const useAlert = ({ text, type, duration }: any) => {
  // const [alertText, setAlertText] = useState(text);
  // const [alertType, setAlertType] = useState(type);
  const [alert, setAlert] = useState({
    text,
    type,
    duration,
  });
  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      setAlert({ ...alert, text: '' });
    }, duration);
    return () => clearTimeout(alertTimeout);
  }, [alert.text]);

  return [alert.text, alert.type, setAlert];
};
