import React, {ChangeEventHandler, FC} from "react";

import './Input.css'

interface InputProps {
    placeholder?: string
    type: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const Input: FC<InputProps> = ({placeholder, type, value, onChange}) => (
    <input className='input' type={type} value={value} onChange={onChange} placeholder={placeholder}/>
)
