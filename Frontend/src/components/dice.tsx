import { useState } from 'react';
import '../styles/dice.css';

export default function Dice() {
  const [number, setNumber] = useState(0);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 7); // 0 to 6 inclusive
    setNumber(randomNum);
  };

  return (
    <div className="dice-container">
      <div className="dice-number">
        {number}
      </div>
      <button className="dice-roll-btn" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
}