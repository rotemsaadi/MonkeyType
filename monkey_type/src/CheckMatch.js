export function checkMatch({
  words,
  setCorrect,
  setIncorrect,
  correct,
  incorrect,
  currWordIndex,
  currInput,
}) {
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
