import { useState } from 'react';

type Props = {
  startNewGame: (arg0: string) => void;
};

const Header: React.FC<Props> = ({ startNewGame }) => {
  const [newGame, setNewGame] = useState(false);
  const [word, setWord] = useState('');
  const [ready, setReady] = useState(false);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setReady(true);
  };

  const startGameHandler = () => {
    setNewGame(false);
    setWord('');
    setReady(false);
    startNewGame(word);
  };

  return (
    <div>
      Hangman <button onClick={() => setNewGame(true)}>New Game</button>
      {newGame && (
        <form onSubmit={submitHandler}>
          <label htmlFor='new-game-input'>Create a word: </label>
          <input
            id='new-game-input'
            type='text'
            onChange={(e) => setWord(e.target.value)}
          />{' '}
          <input type='submit' />
        </form>
      )}
      {word}
      {ready && <button onClick={startGameHandler}>Start Game!</button>}
    </div>
  );
};

export default Header;
