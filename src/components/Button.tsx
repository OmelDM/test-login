import React, {FC, MouseEventHandler} from "react";

import './Button.css'

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> = ({onClick, children}) => (
    <button className='button' onClick={onClick}>{children}</button>
)
