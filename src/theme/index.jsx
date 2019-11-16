import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffd587',
            main: '#E0A458',
            dark: '#ab752b',
            contrastText: '#fff',


        },
        secondary: {
            light: '#ffffff',
            main: '#EBEBEB',
            dark: '#b9b9b9',
            contrastText: '#000',

        }
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'"
    }
});
