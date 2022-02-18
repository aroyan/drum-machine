import PadKey from './PadKey';
import { Box, Grid, Heading } from '@chakra-ui/react';

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
    id: 'hi-Hat',
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
    id: 'open-Hat',
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

export default function DrumPad({ display, setDisplay }) {
  let padBank;
  padBank = audioBank.map((clip) => {
    return (
      <PadKey
        clip={clip.url}
        clipId={clip.id.toUpperCase().replace(/-/g, ' ')}
        key={clip.keyCode}
        keyTrigger={clip.keyTrigger}
        setDisplay={setDisplay}
      />
    );
  });
  return (
    <Box>
      <Grid templateColumns={'repeat(3, 1fr)'} className="pad-bank" mb={'4'}>
        {padBank}
      </Grid>
      <Heading as={'h2'} fontSize={'xl'} id="display">
        {display}
      </Heading>
    </Box>
  );
}
