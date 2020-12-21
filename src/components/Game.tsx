import { useState, useRef } from 'react';
import { useAlert } from '../hooks/useAlert';
import Hangman from './Hangman';
import Letters from './Letters';

type Props = {
  word: string;
};

const Game: React.FC<Props> = ({ word }) => {
  const [char, setChar] = useState('');
  const [alertText, setAlertText] = useAlert('', 1000);
  const myRef = useRef(word.split(''));
  const [matches, setMatches] = useState(
    Array(myRef.current.length).fill(false)
  );

  const letterHandler = (letter: string) => {
    setChar(letter);
    if (myRef.current.includes(letter)) {
      setAlertText('Match', 1000);
      const matchIndex = myRef.current.findIndex((i) => i === letter);
      setMatches((matches) =>
        matches.map((m, i) => (i === matchIndex ? 'true' : m))
      );
    } else {
      setAlertText('No Match', 1000);
    }

    setTimeout(() => setChar(''), 1000);
  };

  return (
    <div>
      <label htmlFor='guess-letter'>Guess a letter: </label>
      <input
        type='text'
        onChange={(e) => letterHandler(e.target.value)}
        value={char}
      />
      {alertText && <p style={{ color: 'red' }}>{alertText}</p>}
      <Hangman />
      <Letters word={myRef.current} matches={matches} />
      {JSON.stringify(matches)}
    </div>
  );
};

export default Game;
