import { atom } from 'recoil';

export const gameWord = atom({
  key: 'gameWord',
  default: '',
});
export const gameStatus = atom({
  key: 'gameStatus',
  default: {
    win: false,
    lose: false,
  },
});
