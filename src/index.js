import React from 'react'
import ReactDOM from 'react-dom'
import 'style/main.scss'
import App from './App'
import { Provider } from 'react-redux'
import store from 'store'
import { theme } from 'theme'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>
    , document.getElementById("app"))
