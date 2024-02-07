import { useState, useEffect } from "react";

export function Timer({ setStatus, setCurrInput, seconds }) {
  const [countDown, setCountDown] = useState(seconds);

  useEffect(() => {
    let interval = setInterval(() => {
      setCountDown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
          setStatus("finished");
          setCurrInput("");
          return seconds;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setStatus, setCurrInput]);

  return <h2>{countDown}</h2>;
}
