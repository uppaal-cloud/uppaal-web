import App from './App';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import GlobalStyle from './GlobalStyles';
import '../node_modules/react-pro-sidebar/dist/scss/styles.scss';
import 'typeface-roboto';

function Root(props: any) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <GlobalStyle />
            <App props={props} />
        </ChakraProvider>
    );
}

export default Root;
