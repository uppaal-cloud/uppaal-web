import { useEffect, useState } from 'react';
// import Sidebar from './components/Sidebar';
import AuthService from './services/auth.service';
import Aside from './components/Aside';
// import './components/App.scss';
import styled from 'styled-components';

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
        <AppContainer className={`app ${toggled ? 'toggled' : ''}`}>
            <Aside collapsed={collapsed} toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
            <>{props.children}</>
        </AppContainer>
    );
};

const AppContainer = styled.div`
    height: 100%;
    display: flex;
    position: relative;
`;
//  <Main
//     collapsed={collapsed}
//     toggled={toggled}
//     handleToggleSidebar={handleToggleSidebar}
//     handleCollapsedChange={handleCollapsedChange}
// />
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
// return <Button onClick={login('dsadasd', 'asdasdad')} />;

export default App;
