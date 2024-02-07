export function handleKeyDown({ keyCode, key }) {
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
