import React from 'react';
import { InputWrapper } from './style';



const Input = ({ type, name, text, onChange, value, onClick, required, placeHolder, width, ...props }) => {
    return (
        <div>
            <label htmlFor={name} >{text}</label>
            <InputWrapper 
               {...props}
                width={width}
                name={name}
                placeholder={placeHolder}
                autoComplete="off"
                id={name}
                type={type}
                onChange={onChange}
                onClick={onClick}
                // required={required}
                value={value}>
            </InputWrapper>
        </div>
    )
}

export default Input;

