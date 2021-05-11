import App from './App';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import GlobalStyle from './GlobalStyles';
import '../node_modules/react-pro-sidebar/dist/scss/styles.scss';
import 'typeface-roboto';

function Root(props: any) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <GlobalStyle />
            <App props={props} />
            <ColorModeSwitcher />
        </ChakraProvider>
    );
}

export default Root;
