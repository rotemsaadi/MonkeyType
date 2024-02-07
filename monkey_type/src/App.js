import { useState, useEffect, useRef } from "react";
import { generate } from "random-words";
import { Statistics } from "./Statistics";
import { GameSection } from "./GameSection";
import { InputSection } from "./InputSection";

const NUMB_OF_WORDS = 200;
const SECONDS = 30;

function App() {
  const [words, setWords] = useState([]);
  const [currInput, setCurrInput] = useState("");
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currCharIndex, setCurrCharIndex] = useState(-1);
  const [currChar, setCurrChar] = useState("");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [status, setStatus] = useState("waiting");
  const textInput = useRef(null);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  useEffect(() => {
    if (status === "started") {
      textInput.current.focus();
    }
  }, [status]);

  function generateWords() {
    return new Array(NUMB_OF_WORDS).fill(null).map(() => generate());
  }

  function start() {
    if (status === "finished") {
      setWords(generateWords());
      setCurrWordIndex(0);
      setCorrect(0);
      setIncorrect(0);
      setCurrCharIndex(-1);
      setCurrChar("");
    }

    if (status !== "started") {
      setStatus("started");
    }
  }

  function handleKeyDown({ keyCode, key }) {
    if (keyCode === 32) {
      checkMatch();
      setCurrInput("");
      setCurrWordIndex(currWordIndex + 1);
      setCurrCharIndex(-1);
    } else if (keyCode === 8) {
      setCurrCharIndex(currCharIndex - 1);
      setCurrChar("");
    } else {
      setCurrCharIndex(currCharIndex + 1);
      setCurrChar(key);
    }
  }

  function checkMatch() {
    const wordToCompare = words[currWordIndex];
    const doesItMatch = wordToCompare === currInput.trim();
    if (doesItMatch) {
      setCorrect(correct + 1);
      console.log(true);
    } else {
      setIncorrect(incorrect + 1);
      console.log(false);
    }
  }

  return (
    <div className="App">
      <InputSection
        textInput={textInput}
        status={status}
        handleKeyDown={handleKeyDown}
        currInput={currInput}
        setCurrInput={setCurrInput}
        start={start}
      />
      {status === "started" && (
        <div>
          <GameSection
            setStatus={setStatus}
            setCurrInput={setCurrInput}
            words={words}
            seconds={SECONDS}
          />
        </div>
      )}
      {status === "finished" && (
        <Statistics correct={correct} incorrect={incorrect} />
      )}
    </div>
  );
}

export default App;
