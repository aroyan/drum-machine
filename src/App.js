import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import DrumPad from './components/DrumPad';

function App() {
  const [display, setDisplay] = useState('press');
  return (
    <ChakraProvider>
      <div className="App">
        <div id="drum-machine">
          <div id="display">
            <h2>Drum Machine</h2>
            <DrumPad display={display} setDisplay={setDisplay} />
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
