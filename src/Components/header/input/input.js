import React from 'react';
import './input.scss'
const Input = ({className,props}) => {

    return (
        <div>
            <input type="text" className={`input ${className}`} {...props}/>
        </div>
    );
};

export default Input;