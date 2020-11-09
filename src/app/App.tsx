import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AppRoutes} from "./AppRoutes";

export const App: FC = () => {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    );
}
