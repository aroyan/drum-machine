import './App.css';
import { useEffect } from 'react';
// import { ChakraProvider } from '@chakra-ui/react';

//todo use useState to display an id of display
function PadKey(props) {
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

const audioBank = [
  {
    keyCode: '81',
    code: 'KeyQ',
    keyTrigger: 'Q',
    id: 'clap',
    url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921660/drum-kit/clap_fpaljk.wav',
  },
  {
    keyCode: '87',
    code: 'KeyW',
    keyTrigger: 'W',
    id: 'hiHat',
    url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921660/drum-kit/hihat_hekzcw.wav',
  },
  {
    keyCode: '69',
    code: 'KeyE',
    keyTrigger: 'E',
    id: 'kick',
    url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921660/drum-kit/kick_tvzxxx.wav',
  },
  {
    keyCode: '65',
    code: 'KeyA',
    keyTrigger: 'A',
    id: 'openHat',
    url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921661/drum-kit/openhat_rhdmxs.wav',
  },
  {
    keyCode: '83',
    code: 'KeyS',
    keyTrigger: 'S',
    id: 'boom',
    url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921661/drum-kit/boom_cryry3.wav',
  },
  {
    keyCode: '68',
    code: 'KeyD',
    keyTrigger: 'D',
    id: 'ride',
    url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921660/drum-kit/ride_wxk7tm.wav',
  },
  {
    keyCode: '90',
    code: 'KeyZ',
    keyTrigger: 'Z',
    id: 'snare',
    url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921660/drum-kit/snare_rxs6c1.wav',
  },
  {
    keyCode: '88',
    code: 'KeyX',
    keyTrigger: 'X',
    id: 'tom',
    url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921661/drum-kit/tom_gbapkt.wav',
  },
  {
    keyCode: '67',
    code: 'KeyC',
    keyTrigger: 'C',
    id: 'tink',
    url: 'https://res.cloudinary.com/dmgrxm78p/video/upload/v1644921659/drum-kit/tink_csse00.wav',
  },
];

function DrumPad() {
  let padBank;
  padBank = audioBank.map((clip) => {
    return (
      <PadKey
        clip={clip.url}
        clipId={clip.id}
        key={clip.keyCode}
        keyTrigger={clip.keyTrigger}
      />
    );
  });
  return <div className="pad-bank">{padBank}</div>;
}

function App() {
  return (
    // <ChakraProvider>
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <h2>Drum Machine</h2>
          <DrumPad />
        </div>
      </div>
    </div>
    // </ChakraProvider>
  );
}

export default App;
