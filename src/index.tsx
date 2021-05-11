import { ColorModeScript } from '@chakra-ui/react';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import Routes from './routes';
import axios from 'axios';

axios.defaults.baseURL = 'https://uppaal.mywire.org/v1';

ReactDOM.render(
    <React.StrictMode>
        <ColorModeScript initialColorMode="dark" />
        <Routes />
    </React.StrictMode>,
    document.getElementById('root')
);

console.log(theme);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
