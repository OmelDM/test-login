import React, {FC} from 'react';
import {useHistory} from "react-router";
import {useLocation} from 'react-router-dom'
import {parseUrl} from 'query-string'

import {ActivationForm} from "./ActivationForm";
import {useAuth} from "../../hooks/useAuth";
import {RoutePaths} from "../../app/routeConfigs";

interface AccountActivationQueryParams {
    magicHash?: string
    name?: string
}

export const AccountActivation: FC = () => {
    const location = useLocation()
    const history = useHistory()
    const {magicHash, name} = parseUrl(location.search).query as AccountActivationQueryParams
    const {isRegisteredUser} = useAuth()

    if(name && isRegisteredUser(name)) {
        history.push(RoutePaths.login)
    }

    return !magicHash ? <h1>Wrong link</h1> : <ActivationForm name={name}/>
};
