import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Keys from './components/Keys';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Keys />
      </div>
    </ChakraProvider>
  );
}

export default App;
