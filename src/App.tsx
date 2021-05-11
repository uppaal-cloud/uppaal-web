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
            <Contents>{props.children}</Contents>
        </AppContainer>
    );
};

const AppContainer = styled.div`
    height: 100%;
    display: flex;
    /* position: relative; */
`;

const Contents = styled.div`
    width: 100%;
    margin-left: 270px;
`;

export default App;
