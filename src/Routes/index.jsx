import React from 'react'
import Overview from 'pages/Overview'
import Statistics from 'pages/Statistics'
import Login from 'pages/Login'
import HomeIcon from '@material-ui/icons/Home'
import EqualizerIcon from '@material-ui/icons/Equalizer';


const iconStyle = {
    marginRight: 4,
    width: 20,
    height: 20,
}
export const routes = [
    {
        path: "/",
        name: "OVERVIEW",
        icon: <HomeIcon color={"primary"} fontSize={"large"} />,
        breadCrumbIcon: <HomeIcon style={iconStyle} color={"primary"} />,
        exact: true,
        isPublic: false,
        component: () => <Overview />
    },
    {
        path: "/statistics",
        name: "STATISTICS",
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
];
