import { createTheme } from '@mui/material';
import { Rubik } from "next/font/google"


const rubik = Rubik({
    weight: ['400', '600', '800'],
    subsets: ['arabic'],
    display: 'swap',
    variable: '--font-rubik',
});
const theme = createTheme({
    colorSchemes: { dark: true },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    typography: {
        fontFamily: rubik.style.fontFamily,
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { severity: 'info' },
                            style: {
                                backgroundColor: '#60a5fa',
                            },
                        },
                    ],
                },
            },
        }
    },
    shape: {
        borderRadius: 4
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffc107',
            light: '#ffcc36',
            dark: '#b18603',
            contrastText: '#000000',
        },
        secondary: {
            main: '#f43f5e',
            light: '#f7647e',
            dark: '#aa293f',
            contrastText: '#ffffff',
        },
        background: {
            default: '#18170d',
            paper: '#1d1e0b',
        },
    }
});


export default theme;