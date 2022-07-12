import React, { FC, InputHTMLAttributes } from 'react';
import { ErrorMessage } from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    label?: string;
    touched?: boolean;
    error?: string;
}

const Input: React.FC<InputProps> = ({
    name,
    label,
    touched = false,
    error = '',
    ...rest
}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} {...rest} />
            {!!error && touched && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    );
};

export default Input;
