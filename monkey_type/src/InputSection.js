import React from "react";
import { InputField } from "./InputField";
import { StartButton } from "./StartButton";

export function InputSection({
  textInput,
  status,
  handleKeyDown,
  currInput,
  setCurrInput,
  start,
}) {
  return (
    <div className="InputSection">
      <InputField
        textInput={textInput}
        status={status}
        handleKeyDown={handleKeyDown}
        currInput={currInput}
        setCurrInput={setCurrInput}
      />
      <div className="section">
        <StartButton start={start} />
      </div>
    </div>
  );
}
