import { useState, useEffect } from 'react';

export const useAlert = (
  text: string = '',
  type: any = 'info',
  duration?: number
) => {
  const [alert, setAlert] = useState({
    text,
    type,
    duration,
  });
  useEffect(() => {
    if (alert.duration) {
      const alertTimeout = setTimeout(() => {
        setAlert({ ...alert, text: '' });
      }, alert.duration);
      return () => clearTimeout(alertTimeout);
    }
  }, [duration, alert]);
  return [alert.text, alert.type, setAlert];
};
