import React from 'react';

function Tile({ letter, className }) {
  return (
    <div
      className={`w-[100px] h-[100px] ${className} flex justify-center items-center`}
    >
      {letter}
    </div>
  );
}

export default Tile;