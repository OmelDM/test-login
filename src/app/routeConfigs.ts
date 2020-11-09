import {RouteProps} from "react-router";

import {Dashboard} from "../routes/Dashboard";
import {Login} from "../routes/Login";
import {AccountActivation} from "../routes/AccountActivation";

export const routeConfigs: ReadonlyArray<RouteProps> = [
    {
        path: '/dashboard',
        exact: true,
        component: Dashboard,
    },
    {
        path: '/account-activation',
        exact: true,
        component: AccountActivation,
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
