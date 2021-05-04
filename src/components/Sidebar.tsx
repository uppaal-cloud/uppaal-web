import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Routes from '../routes';
import SidebarItems from './SidebarItems';

function Sidebar(props: any, { defaultActive }: any) {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem('lastActiveIndex');
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(
        lastActiveIndex || defaultActive
    );

    function changeActiveIndex(newIndex: any) {
        localStorage.setItem('lastActiveIndex', newIndex);
        setActiveIndex(newIndex);
    }

    function getPath(path: any) {
        if (path.charAt(0) !== '/') {
            return '/' + path;
        }
        return path;
    }

    useEffect(() => {
        const activeItem = SidebarItems.findIndex(
            (item) => getPath(item.route) === getPath(location.pathname)
        );
        changeActiveIndex(activeItem);
    }, [location]);

    return (
        <>
            <SidebarParent>
                <div style={{ position: 'fixed' }}>
                    {SidebarItems.map((item, index) => {
                        return (
                            <Link to={item.route}>
                                <SidebarItem
                                    key={item.name}
                                    active={index === activeIndex}
                                >
                                    <p>{item.name}</p>
                                </SidebarItem>
                            </Link>
                        );
                    })}
                </div>
                <div className="behind-the-scenes" />
            </SidebarParent>
        </>
    );
}

interface Props {
    active: boolean;
}
const SidebarParent = styled.div`
    background: #cf3d2a;
    width: 250px;
    height: 100vh;
`;

const SidebarItem = styled.div`
    padding: 16px 24px;
    transition: all 0.25s ease-in-out;
    //Change the background color if 'active' prop is received

    background: ${(props: Props) => (props.active ? '#fff' : '')};
    margin: 4px 12px;
    border-radius: 4px;

    p {
        color: white;
        font-weight: bold;
        text-decoration: none;
    }

    &:hover {
        cursor: pointer;
    }

    &:hover:not(:first-child) {
        background: #c34a36;
    }
`;

export default Sidebar;
