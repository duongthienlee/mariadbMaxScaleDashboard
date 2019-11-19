
import { push as Menu } from 'react-burger-menu'
import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { routes } from '../routes'
import logo from 'assets/icon/MaxScaleIcon.svg'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'


import './sidebar.scss'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    breadcrumbs: {
        padding: theme.spacing(1, 2),
        background: 'transparent'
    },
    link: {
        display: 'flex',
        textDecoration: 'none',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const Layout = (props) => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    let location = useLocation();
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    function handleStateChange(state) {
        setMenuOpen(state.isOpen)

    }
    // This can be used to close the menu, e.g. when a user clicks a menu item
    function closeMenu() {
        setMenuOpen(false)
    }

    // check the current path to assign active class to each li tag.
    function activeRoute(routeName) {
        return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    const classes = useStyles();
    return (
        <div id="outer-container" style={{ height: '100%' }}>
            <Menu isOpen={menuOpen}
                onStateChange={(state) => handleStateChange(state)} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                <div>
                    <div className="nav-username">Thien Ly</div>
                    <div className="nav-username_divider" />
                    <ul>
                        {routes.map((route, key) => {
                            /* sidebar section */
                            if (!route.isPublic)
                                return (
                                    <li
                                        className={activeRoute(route.path)}
                                        key={key}
                                    >
                                        <NavLink
                                            to={route.path}
                                            className="nav-link"
                                            activeClassName="active"
                                            onClick={() => closeMenu()}
                                        >
                                            {route.icon}
                                            <p>{route.name}</p>
                                        </NavLink>
                                    </li>
                                );
                            return null;
                        })
                        }
                    </ul>
                    <span className="nav-footer"><img src={logo} alt="mariaDbMaxScaleLogo" /></span>
                </div>
            </Menu>

            <main id="page-wrap" className={"main-panel-wrapper"} style={{ height: '100vh' }}>
                {/* Navbar section */}
                <AppBar position="static">
                    <Toolbar>

                    </Toolbar>
                </AppBar>
                <Paper elevation={0} className={classes.breadcrumbs}>
                    <Breadcrumbs aria-label="breadcrumb">
                        {routes.map((route, key) => {
                            /* breadcrumbs section */
                            if (!route.isPublic && activeRoute(route.path) === "active")
                                return (
                                    <NavLink key={key} to={route.path} onClick={() => console.log("breadcrumb click")} className={classes.link}>
                                        {route.breadCrumbIcon}
                                        {route.name}
                                    </NavLink>
                                );
                            return null;
                        })
                        }
                    </Breadcrumbs>
                </Paper>
                {props.children}

            </main>
        </div>


    );
}
export default Layout;