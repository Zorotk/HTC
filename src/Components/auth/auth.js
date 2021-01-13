import React from 'react';
import './auth.scss'
import Button from "../header/button/button";
import Input from "../header/input/input";
import {setLogin, setmodalActive, setPassword} from "../../redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import useLocalStorage from "../../hooks/localStorage";

const Auth = () => {
    const [, settoken] = useLocalStorage('tokenLogin')
    const login = useSelector(state => state.film.login)
    const password = useSelector(state => state.film.password)
    const dispatch = useDispatch()
    const setLogins = () => {
        settoken(login)
        dispatch(setLogin(''))
        dispatch(setmodalActive(false))
    }

    return (
        <div className={'auth-form'}>
            <div className={'auth-body'}>
                <h2>Вход</h2>
                <form>
                    <Input className={'header-input-search'}
                           value={login} onChange={(e) => dispatch(setLogin(e.target.value))
                    }
                           props={{placeholder: 'Логин', type: "text"}} width={232}/>
                    <Input className={'header-input-search'}
                           value={password} onChange={(e) => {
                        dispatch(setPassword(e.target.value))
                    }}
                           props={{placeholder: 'Пароль', type: "text"}} width={232}/>
                    <div className={'auth-form-checkbox'}>
                        <input type="checkbox"/>&nbsp;<span>{" Запомнить"}</span></div>
                    <Button onClick={setLogins} className={'auth-form-button'}>Войти</Button>
                </form>
            </div>
        </div>
    );
};

export default Auth;