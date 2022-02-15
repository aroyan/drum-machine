import { useState, useEffect } from 'react';

export default function Effect() {
  const [keyCode, setKeyCode] = useState('KeyCode');
  const [key, setKey] = useState('Press Key');
  const keyCodes = [
    'KeyQ',
    'KeyW',
    'KeyE',
    'KeyA',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyZ',
    'KeyX',
    'KeyC',
  ];
  const bankOne = [
    {
      code: 'KeyQ',
      keyTrigger: 'Q',
      id: 'clap',
      url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921660/drum-kit/clap_fpaljk.wav',
    },
    {
      code: 'KeyW',
      keyTrigger: 'W',
      id: 'hiHat',
      url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921660/drum-kit/hihat_hekzcw.wav',
    },
    {
      code: 'KeyE',
      keyTrigger: 'E',
      id: 'kick',
      url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921660/drum-kit/kick_tvzxxx.wav',
    },
    {
      code: 'KeyA',
      keyTrigger: 'A',
      id: 'openHat',
      url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921661/drum-kit/openhat_rhdmxs.wav',
    },
    {
      code: 'KeyS',
      keyTrigger: 'S',
      id: 'boom',
      url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921661/drum-kit/boom_cryry3.wav',
    },
    {
      code: 'KeyD',
      keyTrigger: 'D',
      id: 'ride',
      url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921660/drum-kit/ride_wxk7tm.wav',
    },
    {
      code: 'KeyZ',
      keyTrigger: 'Z',
      id: 'snare',
      url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921660/drum-kit/snare_rxs6c1.wav',
    },
    {
      code: 'KeyX',
      keyTrigger: 'X',
      id: 'tom',
      url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921661/drum-kit/tom_gbapkt.wav',
    },
    {
      code: 'KeyC',
      keyTrigger: 'C',
      id: 'tink',
      url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921659/drum-kit/tink_csse00.wav',
    },
  ];

  const listItems = bankOne.map((a) => {
    return (
      <div
        key={a.code}
        id={a.keyTrigger}
        style={{
          padding: '1rem',
          background: 'maroon',
          color: 'white',
          width: '100px',
          margin: '0 auto',
          border: '1px solid green',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        className="drum-pad"
      >
        <audio src={a.url} id={a.keyTrigger} className="clip" />
        {a.keyTrigger}
      </div>
    );
  });

  function playAudio(e) {
    for (let i in bankOne) {
      if (e.code === bankOne[i].code) {
        setKey(bankOne[i].id);
        const audio = new Audio(bankOne[i].url);
        audio.currentTime = 0;
        audio.play();
      }
    }
  }

  function playAudioClick(e) {
    for (let i in bankOne) {
      if (bankOne[i].keyTrigger === e.target.id) {
        setKey(bankOne[i].id);
        const audio = new Audio(bankOne[i].url);
        audio.currentTime = 0;
        audio.play();
      }
    }
  }

  // useEffect(() => {
  //   document.addEventListener('click', playAudioClick);
  // });

  useEffect(() => {
    document.addEventListener('keydown', playAudio);
  });

  // useEffect hooks is used to fire a function on every render
  useEffect(() => {
    const handleKeyPress = (e) => {
      for (let i in keyCodes) {
        if (e.code === keyCodes[i]) {
          setKeyCode(`${e.code}, ${e.keyCode}`);
        }
      }
    };
    document.addEventListener('keypress', handleKeyPress);
  });

  return (
    <main>
      <div id="drum-machine">
        <div id="display">
          <div>
            <p>{keyCode}</p>
            <p id="display">{key}</p>
            <div onClick={playAudioClick}>{listItems}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
