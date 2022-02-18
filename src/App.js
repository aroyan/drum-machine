import { useState } from 'react';
import { ChakraProvider, Container, Flex, Heading } from '@chakra-ui/react';
import DrumPad from './components/DrumPad';

function App() {
  const [display, setDisplay] = useState('Press Key');
  return (
    <ChakraProvider>
      <Container
        className="App"
        bg="blackAlpha.900"
        color="whiteAlpha.800"
        minW={'full'}
        minH={'100vh'}
        textAlign={'center'}
      >
        <div id="drum-machine">
          <Flex
            id="display"
            flexDir={'column'}
            align={'center'}
            justify={'center'}
            minW={'full'}
            minH={'100vh'}
          >
            <Heading as={'h1'} mb={'10'}>
              Drum Machine
            </Heading>
            <DrumPad display={display} setDisplay={setDisplay} />
          </Flex>
        </div>
      </Container>
    </ChakraProvider>
  );
}

export default App;
