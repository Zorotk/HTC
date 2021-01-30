import React from 'react';
import './input.scss'

const Input = ({className, type, placeholder, width = 320, onChange, value}) => {

    return (
        <div>
            <input style={{width: `${width}px`}} value={value}
                   placeholder={placeholder}
                   type={type||'text'}
                   onChange={onChange}  className={`input ${className}`}/>
        </div>
    );
};

export default Input;