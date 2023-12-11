
import { MAINPAGE_ROUTE , TREES_ROUTE , EXPLANATION_ROUTE , SETTINGS_ROUTE , EXAMPLES_ROUTE } from "./utils/const"

import ExamplePage from './pages/ExamplesPage'
import MainPage from './pages/MainPage'
import ExplanationPage from "./pages/ExplanationPage";
import SettingsPage from "./pages/SettingsPage";
import TreesPage from "./pages/TreesPage";

export const publicRoutes  = [
    {
        path: MAINPAGE_ROUTE,
        Component: MainPage
    },
    {
        path: EXAMPLES_ROUTE,
        Component: ExamplePage
    },
    {
        path: EXPLANATION_ROUTE,
        Component: ExplanationPage
    },
    {
        path: SETTINGS_ROUTE,
        Component: SettingsPage
    },
    {
        path: TREES_ROUTE,
        Component: TreesPage
    },
];