import React, { useState, useEffect, useRef } from "react";
//storing previous state without causing re-render 
//use in analyatic dashboard to track change over the time 
const StoringPreviousState = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count; 
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default StoringPreviousState;
