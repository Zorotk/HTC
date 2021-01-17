import React from 'react';
import './input.scss'

const Input = ({className, props, width=320,onChange,value}) => {

    return (
        <div>
            <input style={{width: `${width}px`}} value={value} onChange={onChange} type="text" className={`input ${className}`} {...props}/>
        </div>
    );
};

export default Input;