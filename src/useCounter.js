import { useState } from "react";

const useCounter = ({ intervalIdRef, initialCountValue = 0, incrementCountValue = 1, delay }) => {
  const [countValue, setCountValue] = useState(initialCountValue);

  const DELAY = delay;

  let onMouseDown = () => {
    intervalIdRef.current = false;
    const myInterval = setInterval(() => {
      setCountValue((state) => {
        if (intervalIdRef.current) {
          clearInterval(myInterval);
          state = -incrementCountValue;
        }
        return state + incrementCountValue;
      });
    }, DELAY);
  };

  const onMouseLeave = () => {
    intervalIdRef.current = true;
  };

  return {
    onMouseDown,
    onMouseLeave,
    countValue,
  };
};

export default useCounter;
