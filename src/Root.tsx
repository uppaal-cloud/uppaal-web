import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './components/Nav';

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
            <ColorModeSwitcher />
            <div style={{ display: 'flex' }}>
                <Sidebar history={props.history} />
                <div style={{ maxWidth: '800px' }}>
                    <Nav />
                    {props.children}
                </div>
            </div>
        </ChakraProvider>
    );
}

export default Root;
