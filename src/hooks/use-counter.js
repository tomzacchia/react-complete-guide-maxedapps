import { useState, useEffect } from "react";

// NOTE: component using the same hook do not share the same state instances
function useCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
}

export default useCounter;
