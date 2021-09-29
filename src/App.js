// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  let [guess, setGuess] = useState([]);
  let [currentGuess, setCurrentGuess] = useState([]);
  let [successMsg, setSuccessMsg] = useState("");

  async function submitGuess() {
    let result = await fetch(`http://localhost:3001/play/${guess}`, {
      method: "POST",
    });
    result = await result.json();
    if (result.correctGuess) {
      setCurrentGuess(result.currentWord);
      if (result.success) {
        setSuccessMsg("You Win! Guess Again to Start a New Game");
      }
    }
  }

  // _ e _

  return (
    <div className="App">
      <header className="App-header">
        <h1>Guess a letter to begin!</h1>
        <h3 style={{ letterSpacing: "1rem" }}>{currentGuess.join("")}</h3>

        <input
          onChange={(e) => setGuess(e.target.value)}
          type="text"
          placeholder="Enter a character"
          maxLength={1}
          minLength={1}
        />
        <button onClick={submitGuess}>Guess</button>

        <p>{successMsg}</p>
      </header>
    </div>
  );
}

export default App;
