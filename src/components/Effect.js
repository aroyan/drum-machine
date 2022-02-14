import React, { useState, useEffect } from 'react';

export default function Effect() {
  const [count, setCount] = useState(0);
  const [keyCode, setKeyCode] = useState('');
  const keyCodes = [
    'KeyA',
    'KeyB',
    'KeyC',
    'KeyD',
    'KeyE',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyI',
    'KeyJ',
    'KeyK',
    'KeyL',
    'KeyM',
    'KeyN',
    'KeyO',
    'KeyP',
    'KeyQ',
    'KeyR',
    'KeyS',
    'KeyT',
    'KeyU',
    'KeyV',
    'KeyW',
    'KeyX',
    'KeyY',
    'KeyZ',
  ];

  const handleKeyPress = (e) => {
    for (let i in keyCodes) {
      if (e.code === keyCodes[i]) {
        setKeyCode(`${e.code}, ${e.keyCode}`);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
      <p>{keyCode}</p>
    </div>
  );
}
