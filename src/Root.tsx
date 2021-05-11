import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import '../node_modules/react-pro-sidebar/dist/scss/styles.scss';
import GlobalStyle from './GlobalStyles';
// import 'react-pro-sidebar/dist/scss/styles.scss';
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
