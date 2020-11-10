import React, {FC} from 'react';
import {useAuth} from "../hooks/useAuth";

export const Dashboard: FC = () => {
    const {currentUserName} = useAuth()

    return (
        <h1>
            Welcome [{currentUserName}]!
        </h1>
    );
};
