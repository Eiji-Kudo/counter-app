import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const minCount = -5; // 最小値を設定
  const maxCount = 5; // 最大値を設定

  const handleIncrement = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0); // カウントを0にリセット
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
