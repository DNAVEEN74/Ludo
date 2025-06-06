import '../styles/ludoBoard.css';

export default function LudoBoard() {
  const boxCount: number = 15;
  const cellSize: number = 40;

  const getCellClass = (row: number, col: number) => {
    if (row < 6 && col < 6) return 'ludo-box home-blue';
    if (row < 6 && col > 8) return 'ludo-box home-yellow';
    if (row > 8 && col < 6) return 'ludo-box home-red';
    if (row > 8 && col > 8) return 'ludo-box home-green';
    return 'ludo-box';
  };

  return (
    <div className="ludo-container">
      <div className="ludo-box-container">
        {Array.from({ length: boxCount * boxCount }, (_, index) => {
          const row = Math.floor(index / boxCount);
          const col = index % boxCount;
          return (
            <div
              key={index}
              className={getCellClass(row, col)}
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
              }}
            >{index}</div>
          );
        })}
      </div>
    </div>
  );
}