import { useState, useEffect, useRef } from "react";
import { generate } from "random-words";

const WORDS_NUMBER = 400;
const SECONDS = 30;

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  function generateWords() {
    return new Array(WORDS_NUMBER).fill(null).map(() => generate());
  }

  return (
    <div className="App">
      <div className="section">
        <div className="is-size-1 has-text-centered has-text-primary">
          <h2>{SECONDS}</h2>
        </div>
      </div>
      <div className="control is-expanded section">
        <input className="input" />
      </div>
      <div className="section">
        <button className="button is-info is-fullwidth">Start</button>
      </div>

      <div className="section">
        {words.map((word, i) => (
          <span key={i}>
            <span>{word}</span>
            <span> </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
