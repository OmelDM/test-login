import React, {ChangeEventHandler, FC, MouseEventHandler, useState} from 'react';
import {useHistory} from 'react-router'

import {useAuth} from "../hooks/useAuth";
import {RoutePaths} from "../app/routeConfigs";

export const AccountActivation: FC = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const {addUser, loginUser} = useAuth()

    const validateUserName = (userName: string) => userName.length > 0
    const validatePassword = (password: string) => password.length > 0

    const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (event) => setUserName(event.target.value)
    const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => setPassword(event.target.value)

    const handleActivation: MouseEventHandler<HTMLButtonElement> = () => {
        if (validateUserName(userName) && validatePassword(password)) {
            addUser({userName, password})
            loginUser({userName, password})
            history.push(RoutePaths.dashboard)
        }
    }

    return (
        <div>
            <div>
                <label htmlFor='user-name'>Username:</label>
                <input type='text' value={userName} onChange={handleChangeUsername} name='user-name'/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' value={password} onChange={handleChangePassword} name='password'/>
            </div>
            <button onClick={handleActivation}>Activate</button>
        </div>
    );
};
