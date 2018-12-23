import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper } from './style';



const Input = ({ type, name, text, onChange, value, onClick, required, placeHolder, width }) => {
    return (
        <div>
            <label htmlFor={name} >{text}</label>
            <InputWrapper 
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

