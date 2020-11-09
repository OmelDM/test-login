import {RouteProps} from "react-router";

import {Dashboard} from "../routes/Dashboard";
import {Login} from "../routes/Login";

export const routeConfigs: ReadonlyArray<RouteProps> = [
    {
        path: '/dashboard',
        exact: true,
        component: Dashboard,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/',
        exact: true,
        component: Dashboard,
    }
]
