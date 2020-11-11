import React, {FC} from 'react';

import {useAuth} from "../hooks/useAuth";
import {Card} from '../components/Card';

import './Dashboard.css'

export const Dashboard: FC = () => {
    const {currentUserName} = useAuth()

    return (
        <Card>
            <div className='dashboard'>
                <h1>Welcome!</h1>
                <h2>{currentUserName}</h2>
            </div>
        </Card>
    );
};
