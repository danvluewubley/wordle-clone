import { useEffect, useState } from "react";
import Row from "./Row";

function App() {
  const [guesses, setGuesses] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [solution, setSolution] = useState("");

  useEffect(() => {
    fetch("./src/words.json")
      .then((response) => response.json())
      .then((data) =>
        setSolution(data[Math.floor(Math.random() * data.length)].toLowerCase())
      )
      .catch((error) => console.error("Error fetching the JSON file:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let guess = e.target.querySelector("input").value.toLowerCase().trim();

    if (guess.length === 5) {
      setGuesses([...guesses, guess]);
      setCurrentRow(currentRow + 1);
      e.target.reset();
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      {guesses.map((guess, index) => (
        <Row
          key={index}
          guess={guess}
          solution={solution}
          currentRow={currentRow}
          rowIndex={index}
        />
      ))}
      {currentRow < 6 && (
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your guess" maxLength="5" />
          <button type="submit">Submit</button>
        </form>
      )}
      {currentRow === 6 && <p>The solution was {solution}</p>}
    </div>
  );
}

export default App;