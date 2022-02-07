import React, { useState } from 'react';

export default function Drum() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount((count = 0))}>Reset</button>
      <p>{count}</p>
    </div>
  );
}
