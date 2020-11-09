import {RouteProps} from "react-router";

import {Dashboard} from "../routes/Dashboard";
import {Login} from "../routes/Login";
import {AccountActivation} from "../routes/AccountActivation";
import {withLoginProtection} from "../hocs/withLoginProtection";

export enum RoutePaths {
    dashboard = '/dashboard',
    accountActivation = '/account-activation',
    login = '/login',
    home = '/',
}

export const routeConfigs: ReadonlyArray<RouteProps> = [
    {
        path: RoutePaths.dashboard,
        exact: true,
        component: withLoginProtection(Dashboard),
    },
    {
        path: RoutePaths.accountActivation,
        exact: true,
        component: AccountActivation,
    },
    {
        path: RoutePaths.login,
        exact: true,
        component: Login,
    },
    {
        path: RoutePaths.home,
        exact: true,
        component: withLoginProtection(Dashboard),
    }
]
