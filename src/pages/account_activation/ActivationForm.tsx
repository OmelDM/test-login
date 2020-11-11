import React, {ChangeEventHandler, FC, MouseEventHandler, useState} from 'react';
import {useHistory} from "react-router";

import {useAuth} from "../../hooks/useAuth";
import {RoutePaths} from "../../app/routeConfigs";
import {Card} from '../../components/Card';
import {Input} from "../../components/Input";
import {Button} from '../../components/Button';

import './ActivationForm.css'

interface ActivationFormProps {
    name?: string
}

export const ActivationForm: FC<ActivationFormProps> = ({name}) => {
    const [userName, setUserName] = useState(name || '')
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
        <Card>
            <div className='activation'>
                <div className='activation__item'>
                    <div className='activation__item-title'>Username:</div>
                    <Input type='text' value={userName} onChange={handleChangeUsername}/>
                </div>
                <div className='activation__item'>
                    <div className='activation__item-title'>Password:</div>
                    <Input type='password' value={password} onChange={handleChangePassword}/>
                </div>
                <div className='activation__item'>
                    <Button onClick={handleActivation}>Activate</Button>
                </div>
            </div>
        </Card>
    );
};
