import { useState } from 'react';
import { Box, Container, Divider, useColorModeValue } from '@chakra-ui/react';

import Header from './components/Header';
import QRForm from './components/QRForm';
import QRList from './components/QRList';
import { ZippedUrlAndQR } from './types';
import SettingsProvider from './context/Settings.context';

function App() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const [zippedCodes, setZippedCodes] = useState<ZippedUrlAndQR>([]);

  return (
    <SettingsProvider>
      <Box minH="full" bg={bg}>
        <Header />

        <Container maxW="container.xl" pt="10">
          <QRForm onSubmit={setZippedCodes} />
          <Divider my="10" />
          {!!zippedCodes.length && (
            <QRList key={zippedCodes.length} zippedCodes={zippedCodes} />
          )}
        </Container>
      </Box>
    </SettingsProvider>
  );
}

export default App;
