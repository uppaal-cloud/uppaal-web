import { ChakraProvider, theme, CSSReset, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './components/Nav';
import GlobalStyle from './GlobalStyles';
// import 'react-pro-sidebar/dist/scss/styles.scss';
import '../node_modules/react-pro-sidebar/dist/scss/styles.scss';
import 'typeface-roboto';

// const Root = ({ props }: any) => (
//     <ChakraProvider theme={theme}>
//         <CSSReset />
//         <ColorModeSwitcher />
//         {/* <App /> */}
//         <Sidebar history={props.history} />
//         <div>
//             <Nav />
//             {/* {props.children} */}
//         </div>
//     </ChakraProvider>
// );

function Root(props: any) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <GlobalStyle />
            {/* <div style={{ display: 'flex' }}> */}
            <App props={props} />
            {/* <Sidebar history={props.history} /> */}
            {/* <Flex w="100%"> */}
            {/* <Nav /> */}
            {/* {props.children} */}
            {/* </Flex> */}
            {/* </div> */}
            <ColorModeSwitcher />
        </ChakraProvider>
    );
}

export default Root;
