import React from "react";

export function WordsDisplay({ words }) {
  return (
    <div>
      {words.map((word, i) => (
        <span key={i}>
          <span>{word}</span>
          <span> </span>
        </span>
      ))}
    </div>
  );
}
