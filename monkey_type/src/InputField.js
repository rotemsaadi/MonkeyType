export function InputField({
  textInput,
  status,
  handleKeyDown,
  currInput,
  setCurrInput,
}) {
  return (
    <div>
      <input
        ref={textInput}
        disabled={status !== "started"}
        type="text"
        className="input"
        onKeyDown={handleKeyDown}
        value={currInput}
        onChange={(e) => setCurrInput(e.target.value)}
      />
    </div>
  );
}
