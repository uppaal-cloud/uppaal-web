import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
// import Sidebar from './components/Sidebar';
import SidebarExample from './components/SimpleSidebar';
import Routes from './routes';
import login from './services/auth.service';
import AuthService from './services/auth.service';

const App = ({ props }: any) => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        // <SidebarExample />
        <div>
            h1
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div>
                    {/* <Nav /> */}
                    {/* <Routes /> */}
                </div>
            </div>
        </div>

        // <Login />
    );
    // return <Button onClick={login('dsadasd', 'asdasdad')} />;
};

export default App;
