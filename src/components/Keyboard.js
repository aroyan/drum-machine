import React from 'react';
import { Kbd } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import boom from './sounds/boom.wav';

export default function Keyboard() {
  return (
    <div>
      <Heading as="h3" size="xl" mb={4}>
        Keyboard
      </Heading>
      <Kbd>A</Kbd>
      <audio controls>
        <source src={boom} />
      </audio>
    </div>
  );
}
