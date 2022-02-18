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
    audio.currentTime = 0;
    audio.play();
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
