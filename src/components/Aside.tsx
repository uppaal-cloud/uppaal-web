import React, { BaseSyntheticEvent, FC } from 'react';
import styled from 'styled-components';
import {
    ProSidebar,
    Menu,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    MenuItem,
} from 'react-pro-sidebar';
import {
    FaTachometerAlt,
    FaGem,
    FaList,
    FaSignOutAlt,
    FaRegLaughWink,
    FaHeart,
    FaHome,
    FaSignInAlt,
    FaTasks,
    FaPlus,
    FaUserPlus,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import authService from '../services/auth.service';
import { Button } from '@chakra-ui/button';

const handleLogout = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    authService.logout();
};

const Aside: any = ({ collapsed, rtl, toggled, handleToggleSidebar }: any) => {
    return (
        <ProSidebar
            rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Uppaal Cloud
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaHome />}>
                        Home
                        <Link to="/" />
                    </MenuItem>
                    <MenuItem icon={<FaSignInAlt />}>
                        Login
                        <Link to="/login" />
                    </MenuItem>
                    <MenuItem icon={<FaUserPlus />}>
                        Register <Link to="/register" />
                    </MenuItem>
                    <MenuItem
                        icon={<FaTasks />}
                        suffix={<span className="badge red">1</span>}
                    >
                        Jobs <Link to="/jobs" />
                    </MenuItem>
                    <MenuItem icon={<FaPlus />}>
                        Add New Job <Link to="/new-job" />
                    </MenuItem>
                </Menu>
                {/* <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        title="withSuffix"
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>Submenu 1</MenuItem>
                        <MenuItem>Submenu 2</MenuItem>
                        <MenuItem>Submenu 3</MenuItem>
                    </SubMenu>
                </Menu> */}
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="!#"
                        onClick={handleLogout}
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;

const SidebarParent = styled.div`
    background: #cf3d2a;
    width: 250px;
    height: 100vh;
`;