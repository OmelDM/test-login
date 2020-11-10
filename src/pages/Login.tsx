import React, {ChangeEventHandler, MouseEventHandler, useState} from 'react';
import {useHistory} from "react-router";

import {useAuth} from "../hooks/useAuth";
import {RoutePaths} from "../app/routeConfigs";

export const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const history = useHistory()
    const {isRegisteredUser, loginUser} = useAuth()

    const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (event) => setUserName(event.target.value)
    const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => setPassword(event.target.value)

    const handleLogin: MouseEventHandler<HTMLButtonElement> = () => {
        if (isRegisteredUser(userName)) {
            loginUser({userName, password})
            history.push(RoutePaths.dashboard)
        } else {
            setErrors(`There is no user with name "${userName}"`)
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
            {errors && (
                <div>
                    {errors}
                </div>
            )}
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
