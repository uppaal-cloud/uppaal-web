import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';

import App from './App';

const Root = () => (
    <ChakraProvider theme={theme}>
        <CSSReset />
        <App />
    </ChakraProvider>
);

export default Root;
