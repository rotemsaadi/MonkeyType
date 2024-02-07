import React from "react";
import { Timer } from "./Timer";
import { WordsDisplay } from "./WordsDisplay";

export function GameSection({ words, setStatus, setCurrInput, seconds }) {
  return (
    <div className="GameSection">
      <div className="section">
        <Timer
          setStatus={setStatus}
          setCurrInput={setCurrInput}
          seconds={seconds}
        />
        <WordsDisplay words={words} />
      </div>
    </div>
  );
}
