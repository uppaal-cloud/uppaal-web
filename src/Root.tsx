import * as React from 'react';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';

import App from './App';

export const Root = () => (
    <ChakraProvider theme={theme}>
        <CSSReset />
        <App />
    </ChakraProvider>
);
