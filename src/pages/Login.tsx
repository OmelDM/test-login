import React, {ChangeEventHandler, MouseEventHandler, useState} from 'react';
import {useHistory} from "react-router";

import {useAuth} from "../hooks/useAuth";
import {RoutePaths} from "../app/routeConfigs";
import {Card} from '../components/Card';
import {Button} from '../components/Button';
import {Input} from "../components/Input";

import './Login.css'

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
        <Card>
            <div className='login'>
                <div className='login__item'>
                    <Input type='text' value={userName} onChange={handleChangeUsername} placeholder='User Name'/>
                </div>
                <div className='login__item'>
                    <Input type='password' value={password} onChange={handleChangePassword} placeholder='Password'/>
                </div>
                {errors && (
                    <div className='login__item login__item_errors'>
                        {errors}
                    </div>
                )}
                <div className='login__item login__item_button'><Button onClick={handleLogin}>Login</Button></div>
            </div>
        </Card>
    );
};
