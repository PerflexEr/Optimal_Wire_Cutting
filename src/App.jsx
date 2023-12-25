import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import CssBaseline from '@mui/material/CssBaseline';
import { AppThemeProvider } from './provider/ThemeProvider';
import NavBar
 from './components/NavBar';
const App = observer(() => {
    return (
        <React.Fragment>
            <AppThemeProvider>
                <BrowserRouter>
                <CssBaseline />
                    <NavBar/>
                    <AppRouter/>
                </BrowserRouter>
            </AppThemeProvider>
        </React.Fragment>
    );
});

export default App;