import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffc962',
            main: '#F49831',
            dark: '#bc6a00',
            contrastText: '#000000',


        },
        secondary: {
            light: '#3b4c89',
            main: '#00255B',
            dark: '#000031',
            contrastText: '#ffffff',

        }
    },
    typography: {
        fontFamily: "'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif"
    }
});
