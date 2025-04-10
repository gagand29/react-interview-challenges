import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1> Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
