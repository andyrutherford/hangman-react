export const lettersOnly = (str: string): string => {
  let value = str;
  value = value.replace(/[^A-Za-z]/gi, '');
  return value.toLowerCase();
};
