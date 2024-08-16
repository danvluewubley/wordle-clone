import React from "react";

function Tile({ letter, className }) {
  return (
    <div
      className={`w-[100px] h-[100px] ${className} flex justify-center items-center`}
    >
      {letter}
    </div>
  );
}

function Row({ guess = "", solution, currentRow, rowIndex }) {
  const letters = [];

  for (let i = 0; i < 5; i++) {
    letters.push(guess[i] || "");
  }

  return (
    <div className="flex gap-2">
      {letters.map((letter, i) => {
        let tileClassName = "bg-slate-500";

        if (currentRow > rowIndex) {
          if (solution[i] === letter) {
            tileClassName = "bg-green-500";
          } else if (solution.includes(letter)) {
            tileClassName = "bg-yellow-500";
          }
        }

        return <Tile key={i} letter={letter} className={tileClassName} />;
      })}
    </div>
  );
}

export default Row;