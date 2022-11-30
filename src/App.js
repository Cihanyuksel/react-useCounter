import "./App.css";
import { useEffect, useRef } from "react";
import useCounter from "./useCounter";

function App() {
  const intervalIdRef = useRef();
  const h1Color = useRef();
  const { countValue, onMouseDown, onMouseLeave } = useCounter({
    intervalIdRef,
    delay: 20,
    incrementCountValue: 10,
    initialCountValue: 5,
  });

  useEffect(() => {
    countValue % 4 === 0 ? (h1Color.current.style.color = "brown") : (h1Color.current.style.color = "darkcyan");
  }, [countValue]);

  return (
    <div className="App">
      <button onMouseDown={onMouseDown} onMouseLeave={onMouseLeave} onClick={onMouseLeave}>
        Click
      </button>
      <h1 ref={h1Color}>{countValue}</h1>
    </div>
  );
}

export default App;
