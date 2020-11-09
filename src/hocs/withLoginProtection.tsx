import React, {FC} from 'react';
import {useHistory} from "react-router";

import {useAuth} from "../hooks/useAuth";
import {RoutePaths} from "../app/routeConfigs";

export const withLoginProtection = (ProtectedComponent: FC): FC => ({...props}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isLoggedIn} = useAuth()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory()

    if (!isLoggedIn()) {
        history.push(RoutePaths.login)
    }

    return <ProtectedComponent {...props}/>;
}

