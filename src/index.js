import React from "react";
import ReactDOM from "react-dom";
import "style/main.scss"
import App from "./App";
import { theme } from './theme'
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
    , document.getElementById("app"));
