import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AppRoutes} from "./AppRoutes";
import {AppLayout} from "./AppLayout";

import './App.css'

export const App: FC = () => {
    return (
        <BrowserRouter>
            <AppLayout>
                <AppRoutes/>
            </AppLayout>
        </BrowserRouter>
    );
}
