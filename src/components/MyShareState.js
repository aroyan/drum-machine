import { useState, useEffect } from 'react';

//Di component MyShareState ini nanti yang render cuma component Out
export default function MyShareState() {
  const [display, setDisplay] = useState('display');
  return (
    <div>
      <Out display={display} setDisplay={setDisplay} />
    </div>
  );
}

//Component Pad ada props-nya
function Pad(props) {
  function handleKeyPress(e) {
    props.setDisplay(e.code);
  }

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  });

  return (
    <div>
      <h2>Press any key</h2>
    </div>
  );
}

//Component Pad nanti akan di render di component Out
function Out({ display, setDisplay }) {
  return (
    <div>
      <Pad setDisplay={setDisplay} />
      <h3>{display}</h3>
    </div>
  );
}
