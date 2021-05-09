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
import Aside from './components/Aside';
import './components/App.scss';
import Main from './components/Main';

const App: any = ({ props }: any) => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [toggled, setToggled] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const handleToggleSidebar = (value: any) => {
        setToggled(value);
    };
    const handleCollapsedChange = (checked: any) => {
        setCollapsed(checked);
    };

    return (
        <div className={`app ${toggled ? 'toggled' : ''}`}>
            <Aside
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <>{props.children}</>
            {/* <Main
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
            /> */}
        </div>
        // <SidebarExample />
        // <div>
        //     h1
        //     <div style={{ display: 'flex' }}>
        //         <Sidebar />
        //         <div>
        //             {/* <Nav /> */}
        //             {/* <Routes /> */}
        //         </div>
        //     </div>
        // </div>

        // <Login />
    );
    // return <Button onClick={login('dsadasd', 'asdasdad')} />;
};

export default App;
