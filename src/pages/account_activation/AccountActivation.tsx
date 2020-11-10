import React, {FC} from 'react';
import {useLocation} from 'react-router-dom'
import {parseUrl} from 'query-string'

import {ActivationForm} from "./ActivationForm";

interface AccountActivationQueryParams {
    magicHash?: string
    name?: string
}

export const AccountActivation: FC = () => {
    const location = useLocation()
    const {magicHash, name} = parseUrl(location.search).query as AccountActivationQueryParams

    return !magicHash ? <h1>Wrong link</h1> : <ActivationForm name={name}/>
};
