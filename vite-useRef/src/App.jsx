import { useRef, useState } from "react";
import cat1 from "./assets/cat1.jfif";
import cat2 from "./assets/cat2.jfif";
import cat3 from "./assets/cat3.jfif";

function App() {
  return (
    <div className="flex flex-col gap-1">
      <StopWatch />
      <Form />
      <CatFriends />
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
    <div className="flex flex-row gap-2">
      <p>time passed: {time.toFixed(3)}</p>
      <button
        className="px-4 py-2 rounded-lg font-medium bg-blue-500 text-white 
hover:bg-blue-600 active:scale-95 
focus:outline-none focus:ring-2 focus:ring-blue-400 
disabled:opacity-50 disabled:cursor-not-allowed 
transition duration-200"
        onClick={isStart ? handleStart : handleStop}
      >
        {isStart ? "Start" : "Stop"}
      </button>
      <button
        className="px-4 py-2 rounded-lg font-medium bg-blue-500 text-white 
hover:bg-blue-600 active:scale-95 
focus:outline-none focus:ring-2 focus:ring-blue-400 
disabled:opacity-50 disabled:cursor-not-allowed 
transition duration-200"
        onClick={handleClearTime}
      >
        clear
      </button>
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
      <p className="bg-green-300">Form</p>
      <input className="h-10 w-150" type="text" ref={inputRef} />
      <button
        className="px-4 py-2 rounded-lg font-medium bg-blue-500 text-white 
hover:bg-blue-600 active:scale-95 
focus:outline-none focus:ring-2 focus:ring-blue-400 
disabled:opacity-50 disabled:cursor-not-allowed 
transition duration-200 h-10 w-150 "
        onClick={handleFocus}
      >
        Focus the input
      </button>
    </>
  );
}
function CatFriends() {
  return (
    <>
      <p className="text-center">CatFriends</p>
      <nav>
        <button
          className="px-4 py-2 rounded-lg font-medium bg-blue-500 text-white 
hover:bg-blue-600 active:scale-95"
        >
          cat1
        </button>
        <button
          className="px-4 py-2 m-2 rounded-lg font-medium bg-blue-500 text-white 
hover:bg-blue-600 active:scale-95"
        >
          cat2
        </button>
        <button
          className="px-4 py-2 rounded-lg font-medium bg-blue-500 text-white 
hover:bg-blue-600 active:scale-95"
        >
          cat3
        </button>
      </nav>
      <ul className="flex gap-10">
        <li>
          <img src={cat1} alt="cat1" />
        </li>
        <li>
          <img src={cat2} alt="cat2" />
        </li>
        <li>
          <img src={cat3} alt="cat3" />
        </li>
      </ul>
    </>
  );
}
