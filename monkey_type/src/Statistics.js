export function Statistics({ correct, incorrect }) {
  return (
    <div>
      <div>
        <p>Words per minute:</p>
        <p>{correct}</p>
      </div>
      <div>
        <p>Accuracy:</p>
        {correct !== 0 ? (
          <p>{Math.round((correct / (correct + incorrect)) * 100)}%</p>
        ) : (
          <p>0%</p>
        )}
      </div>
    </div>
  );
}
