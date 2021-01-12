import React from 'react';
import './modal.scss'
import {setmodalActive} from "../../redux/reducer";
import {useDispatch} from "react-redux";

const Modal = ({active,children}) => {
    const dispatch = useDispatch()

    return (
        <div className={active ? 'modal actives' : "modal "} onClick={() => dispatch(setmodalActive(false))}>
            <div onClick={(e) => e.stopPropagation()} className={active ? 'modal-content actives' : "modal-content "}>
                {children}
            </div>
        </div>
    );
};

export default Modal;