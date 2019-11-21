import React from 'react'
import ServerOverView from 'pages/ServerOverView'
import Statistics from 'pages/Statistics'
import Server from 'pages/Server'
import Login from 'pages/Login'
import HomeIcon from '@material-ui/icons/Home'
import EqualizerIcon from '@material-ui/icons/Equalizer'


const iconStyle = {
    marginRight: 4,
    width: 20,
    height: 20,
}
export const routes = [
    {
        path: "/server",
        name: "SERVER",
        icon: <HomeIcon color={"primary"} fontSize={"large"} />,
        isSideBar: true,
        breadCrumbIcon: <HomeIcon style={iconStyle} color={"primary"} />,
        exact: true,
        isPublic: false,
        component: () => <ServerOverView />
    },
    {
        path: "/server/:id",
        name: "Server",
        icon: <EqualizerIcon color={"primary"} fontSize={"large"} />,
        breadCrumbIcon: <EqualizerIcon style={iconStyle} color={"primary"} fontSize={"large"} />,
        exact: false,
        isPublic: false,
        component: () => <Server />
    },
    {
        path: "/statistics",
        name: "STATISTICS",
        isSideBar: true,
        icon: <EqualizerIcon color={"primary"} fontSize={"large"} />,
        breadCrumbIcon: <EqualizerIcon style={iconStyle} color={"primary"} fontSize={"large"} />,
        exact: true,
        isPublic: false,
        component: () => <Statistics />
    },
    {
        path: "/login",
        exact: true,
        isPublic: true,
        component: () => <Login />
    },
]
