import { useState, useEffect } from 'react';

type Props = {
  text: string;
  type: string;
  duration: number;
};

type AlertType = {
  type: 'info' | 'warning' | 'success' | 'error' | undefined;
};

export const useAlert = (text: string, type: any, duration: number) => {
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
