// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  let [guess, setGuess] = useState([]);
  let [currentGuess, setCurrentGuess] = useState([]);

  async function submitGuess() {
    let result = await fetch(`http://localhost:3001/play/${guess}`, {
      method: "POST",
    });
    result = await result.json();
    if (result.correctGuess) {
      console.log(result);

      setCurrentGuess(result.currentWord);
      console.log(currentGuess);
    }
  }

  // _ e _

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ letterSpacing: "1rem" }}>{currentGuess.join("")}</h1>

        <input
          onChange={(e) => setGuess(e.target.value)}
          type="text"
          placeholder="Enter a character"
          maxLength={1}
          minLength={1}
        />
        <button onClick={submitGuess}>Guess</button>

        <p>Guess a correct letter to fill in the word.</p>
      </header>
    </div>
  );
}

export default App;
