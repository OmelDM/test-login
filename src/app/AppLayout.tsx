import React, {FC} from "react";

import './AppLayout.css'

export const AppLayout: FC = ({children}) => (
    <div className='app-layout'>
        <div className="app-background"/>
        <div className="app-content">
            {children}
        </div>
    </div>
)
