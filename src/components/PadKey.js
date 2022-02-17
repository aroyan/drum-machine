import { useEffect, useState } from 'react';

export default function PadKey(props) {
  //Handle keypress event and play sound
  function handleKeyPress(e) {
    if (
      e.key === props.keyTrigger.toLowerCase() ||
      e.key === props.keyTrigger
    ) {
      playAudio();
    }
  }
  //Play audio
  function playAudio() {
    const audio = document.getElementById(props.keyTrigger);
    audio.currentTime = 0;
    audio.play();
  }
  //Add event listener using useEffect hook
  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    //Clean up event listener
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  });
  return (
    <div
      className="drum-pad"
      id={props.clipId}
      onClick={playAudio}
      style={{
        border: '1px solid orange',
        marginBottom: '8px',
        padding: '8px',
      }}
    >
      <audio src={props.clip} className="clip" id={props.keyTrigger} />
      {props.keyTrigger}
    </div>
  );
}
