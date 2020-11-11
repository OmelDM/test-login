import React, {FC} from "react";

import './Card.css'

export const Card: FC = ({children}) => (
    <div className='card'>
        {children}
    </div>
)
