import { useRef, useState } from "react";

function App() {
  return (
    <div>
      <StopWatch />
      <Form />
    </div>
  );
}

export default App;
function StopWatch() {
  const intervalRef = useRef(null);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [isStart, setIsStart] = useState(true);
  let time = 0;
  if (startTime != null && now != null) {
    time = (now - startTime) / 1000;
  }
  function handleStart() {
    setIsStart(false);
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  function handleStop() {
    setIsStart(true);

    clearInterval(intervalRef.current);
  }
  function handleClearTime() {
    setStartTime(Date.now());
    setNow(Date.now());
  }
  return (
    <div>
      <p>time passed: {time.toFixed(3)}</p>
      <button onClick={isStart ? handleStart : handleStop}>
        {isStart ? "Start" : "Stop"}
      </button>
      <button onClick={handleClearTime}>clear</button>
      {/* <button onClick={handleStop}>Stop</button> */}
    </div>
  );
}
function Form() {
  const inputRef = useRef(null);
  function handleFocus() {
    inputRef.current.focus();
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus the input</button>
    </>
  );
}
