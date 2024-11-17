import { createTheme } from '@mui/material/styles';

const BaseTheme = createTheme({
    palette: {
        primary: {
            main: '#076DFC',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#f4f4f4',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#555555',
        },
    },
    typography: {
        fontFamily: 'poppins, Roboto, Arial, sans-serif',
        h1: {
            fontSize: '1.8rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.2rem',
            fontWeight: 500,
        },
        p: {
            fontSize: '12px',
        },
        small: {
            fontSize: '10px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderColor: theme.palette.primary.main,
                }),
            },
        },

    },
});

export default BaseTheme;
