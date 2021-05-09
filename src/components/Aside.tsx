import React, { FC } from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import {
    FaTachometerAlt,
    FaGem,
    FaList,
    FaGithub,
    FaRegLaughWink,
    FaHeart,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                ></div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red">NEW</span>}
                    >
                        Home
                        <Link to="/" />
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>
                        Login
                        <Link to="/login" />
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>
                        Register <Link to="/register" />
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>
                        Jobs <Link to="/jobs" />
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>
                        Add New Job <Link to="/new-job" />
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        title="withSuffix"
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>Submenu 1</MenuItem>
                        <MenuItem>Submenu 2</MenuItem>
                        <MenuItem>Submenu 3</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span>Vire Source</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;
