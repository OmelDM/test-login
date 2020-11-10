import {RouteProps} from "react-router";

import {Dashboard} from "../pages/Dashboard";
import {Login} from "../pages/Login";
import {AccountActivation} from "../pages/account_activation/AccountActivation";
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
