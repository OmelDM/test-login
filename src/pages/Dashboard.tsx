import React, {FC, MouseEventHandler} from 'react';
import {useHistory} from "react-router";

import {useAuth} from "../hooks/useAuth";
import {Card} from '../components/Card';

import {Button} from "../components/Button";
import {RoutePaths} from "../app/routeConfigs";

import './Dashboard.css'

export const Dashboard: FC = () => {
    const {currentUserName, logout} = useAuth()
    const history = useHistory()

    const handleLogout: MouseEventHandler<HTMLButtonElement> = () => {
        logout();
        history.push(RoutePaths.login)
    }

    return (
        <Card>
            <div className='dashboard'>
                <h1>Welcome!</h1>
                <h2>{currentUserName}</h2>
                <div className='dashboard__logout'>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            </div>
        </Card>
    );
};
