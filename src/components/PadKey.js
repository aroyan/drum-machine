import { useEffect } from 'react';
import { Text, Box } from '@chakra-ui/react';

export default function PadKey(props) {
  //Handle keypress event and play sound
  function handleKeyPress(e) {
    if (
      e.key === props.keyTrigger.toLowerCase() ||
      e.key === props.keyTrigger
    ) {
      props.setDisplay(props.clipId);
      playAudio();
    }
  }
  //Play audio
  function playAudio() {
    const audio = document.getElementById(props.keyTrigger);
    const pad = document.getElementById(props.clipId);
    audio.currentTime = 0;
    audio.play();
    // Add style while playing
    setTimeout(() => {
      pad.style = 'border: 3px solid #b25438; color: #b25438;';
    }, 100);
    // Remove style after playing
    setTimeout(() => {
      pad.style = 'border: 2px solid #38B2AC';
    }, 200);
    props.setDisplay(props.clipId);
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
    <Box
      className="drum-pad"
      id={props.clipId}
      onClick={playAudio}
      border={'2px solid #38B2AC'}
      p={'6'}
      m={'2'}
      borderRadius={'0.5rem'}
      // tabIndex={'0'}
      // _focus={{
      //   outline: '2px solid cyan',
      //   border: 'none',
      // }}
    >
      <audio src={props.clip} className="clip" id={props.keyTrigger} />
      <Text
        fontSize="2xl"
        fontWeight="bold"
        userSelect={'none'}
        cursor={'pointer'}
      >
        {props.keyTrigger}
      </Text>
    </Box>
  );
}
