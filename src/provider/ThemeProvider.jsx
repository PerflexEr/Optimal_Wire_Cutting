import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0766AD',
      dark: '#29ADB2', 
    },
    secondary: {
      main: '#3498db', 
    },
    info: {
      main: '#1abc9c', 
    },
    success: {
      main: '#2ecc71',
      dark: '#27ae60', 
    },
    warning: {
      main: '#f39c12',
    },
    error: {
      main: '#e74c3c', 
    },
  },
});

export const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};