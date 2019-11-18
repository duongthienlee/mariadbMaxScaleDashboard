import React from 'react'
import Overview from 'pages/Overview'
import Login from 'pages/Login'

export const routes = [
    {
        path: "/",
        exact: true,
        isPublic: false,
        component: () => <Overview />
    },
    {
        path: "/login",
        exact: true,
        isPublic: true,
        component: () => <Login />
    },
];
