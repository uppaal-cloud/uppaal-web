import {
    ProSidebar,
    Menu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    MenuItem,
} from 'react-pro-sidebar';
import {
    FaSignOutAlt,
    FaHome,
    FaSignInAlt,
    FaTasks,
    FaPlus,
    FaUserPlus,
    FaAngleDoubleRight,
    FaAngleDoubleLeft,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import authService from '../services/auth.service';
import useFindUser from '../hooks/useFindUser';

// const handleLogout = (event: BaseSyntheticEvent) => {
// };

const Aside: any = ({ collapsed, setCollapsed }: any) => {
    const { user, setUser, isLoading } = useFindUser();

    return (
        <ProSidebar collapsed={collapsed} breakPoint="md">
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

                    {!user && (
                        <MenuItem icon={<FaSignInAlt />}>
                            Login
                            <Link to="/login" />
                        </MenuItem>
                    )}

                    {!user && (
                        <MenuItem icon={<FaUserPlus />}>
                            Register <Link to="/register" />
                        </MenuItem>
                    )}
                    {/* <MenuItem icon={<FaTasks />} suffix={<span className="badge red">1</span>}> */}

                    {user && (
                        <MenuItem icon={<FaTasks />}>
                            Jobs <Link to="/jobs" />
                        </MenuItem>
                    )}
                    {user && (
                        <MenuItem icon={<FaPlus />}>
                            Add New Job <Link to="/new-job" />
                        </MenuItem>
                    )}
                    <MenuItem icon={<ColorModeSwitcher />}>Change theme</MenuItem>
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
                        href="/"
                        onClick={(event) => {
                            event.preventDefault();
                            authService.logout();
                            setUser(null);
                        }}
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaSignOutAlt />
                        {!collapsed ? <span>Logout</span> : ''}
                    </a>
                    {collapsed ? (
                        <FaAngleDoubleRight onClick={() => setCollapsed(false)} />
                    ) : (
                        <FaAngleDoubleLeft onClick={() => setCollapsed(true)} />
                    )}
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;
