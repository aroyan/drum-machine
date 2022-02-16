import React from 'react';

const audioBank = [
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

function PadKey(clip) {
  const playAudio = () => {
    const audio = document.getElementById(clip.keyTrigger);
  };
}

export default function NewKeys() {
  return (
    <div>
      <h1>Drum Machine</h1>
      {/* audioBank.map */}
    </div>
  );
}
