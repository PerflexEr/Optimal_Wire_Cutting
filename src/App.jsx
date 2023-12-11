import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";
import CssBaseline from '@mui/material/CssBaseline';
import { AppThemeProvider } from './provider/ThemeProvider';
import AppRouter from './components/AppRouter';

const App = observer(() => {
    return (
        <React.Fragment>
            <AppThemeProvider>
                <BrowserRouter>
                <CssBaseline />
                    <AppRouter/>
                </BrowserRouter>
            </AppThemeProvider>
        </React.Fragment>
    );
});

export default App;
