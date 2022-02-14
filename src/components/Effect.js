import React, { useState, useEffect } from 'react';

export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
    </div>
  );
}
