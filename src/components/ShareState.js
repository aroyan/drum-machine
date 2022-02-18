import React, { useState } from 'react';

export default function App() {
  const [isDanger, setIsDanger] = useState(false);
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box setIsDanger={setIsDanger} />
      <Warning isDanger={isDanger} />
    </div>
  );
}

function Box({ setIsDanger }) {
  return (
    <div
      className="box"
      onMouseEnter={() => {
        setIsDanger(true);
      }}
      onMouseLeave={() => {
        setIsDanger(false);
      }}
      tabIndex="0"
      onFocus={() => {
        setIsDanger(true);
      }}
      onBlur={() => {
        setIsDanger(false);
      }}
      style={{
        padding: '1rem',
        background: 'pink',
        width: '10rem',
        marginBottom: '0.5rem',
      }}
    >
      Don't touch me!
    </div>
  );
}

function Warning({ isDanger }) {
  let message = 'hello';
  if (isDanger)
    message = (
      <div
        className={`warning red`}
        style={{
          background: 'red',
          color: 'white',
          padding: '1rem',
          width: '10rem',
        }}
      >
        DANGER
      </div>
    );
  return message;
}
