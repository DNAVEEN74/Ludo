import '../styles/ludoBoard.css';
import { MapPin } from 'lucide-react';
import { GRID_SIZE, CELL_SIZE, tokenPositions } from '../constants/ludoConfig';
import Dice from './dice';

export default function LudoBoard() {
  const renderToken = (row: number, col: number) => {
    for (const color in tokenPositions) {
      if (
        tokenPositions[color as keyof typeof tokenPositions].some(
          ([r, c]) => r === row && c === col
        )
      ) {
        return <MapPin className={`token ${color}`} />;
      }
    }
    return null;
  };

  const getCellType = (row: number, col: number): string => {
    const inRange = (val: number, min: number, max: number) => val > min && val < max;

    const isCornerBox =
      (inRange(row, 0, 5) && inRange(col, 0, 5)) ||
      (inRange(row, 0, 5) && inRange(col, 9, 14)) ||
      (inRange(row, 9, 14) && inRange(col, 0, 5)) ||
      (inRange(row, 9, 14) && inRange(col, 9, 14));

    if (isCornerBox) return 'ludo-box';

    if (row < 6 && col < 6) return 'ludo-box home-blue';
    if (row < 6 && col > 8) return 'ludo-box home-yellow';
    if (row > 8 && col < 6) return 'ludo-box home-red';
    if (row > 8 && col > 8) return 'ludo-box home-green';

    if (col === 7 && row > 0 && row < 6) return 'ludo-box safe-path safe-yellow';
    if (row === 7 && col > 8 && col < 14) return 'ludo-box safe-path safe-green';
    if (row === 7 && col > 0 && col < 6) return 'ludo-box safe-path safe-blue';
    if (col === 7 && row > 8 && row < 14) return 'ludo-box safe-path safe-red';

    if (row === 6 && col === 1) return 'ludo-box safe-path safe-blue';
    if (row === 1 && col === 8) return 'ludo-box safe-path safe-yellow';
    if (row === 8 && col === 13) return 'ludo-box safe-path safe-green';
    if (row === 13 && col === 6) return 'ludo-box safe-path safe-red';

    if ((row < 6 && col < 9) || (row < 9 && col < 6) || (row > 8 && col < 9) || (row < 9 && col > 8)) {
      return 'ludo-box cell-lines';
    }

    if (inRange(row, 5, 9) && inRange(col, 5, 9)) return 'ludo-box center-box';

    return 'ludo-box';
  };

  return (
    <div className="ludo-container">
      <div className="ludo-box-container">
        {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
          const row = Math.floor(index / GRID_SIZE);
          const col = index % GRID_SIZE;
          return (
            <div
              key={index}
              className={getCellType(row, col)}
              style={{
                width: `${CELL_SIZE}px`,
                height: `${CELL_SIZE}px`,
              }}
            >
              {renderToken(row, col)}
            </div>
          );
        })}
      </div>
      <Dice />
    </div>
  );
}