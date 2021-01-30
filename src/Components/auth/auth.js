import React from 'react';
import './auth.scss'
import Button from "../button/button";
import Input from "../input/input";
import {setAuth, setLogin, setmodalActive, setPassword} from "../../redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import useLocalStorage from "../../hooks/localStorage";

const Auth = () => {
    const [, settoken] = useLocalStorage('tokenLogin')
    const login = useSelector(state => state.film.login)
    const password = useSelector(state => state.film.password)
    const dispatch = useDispatch()
    const setLogins = (e) => {
        e.preventDefault()
        settoken(login)
        dispatch(setmodalActive(false))
        dispatch(setAuth(true))
    }


    return (
        <div className={'auth-form'}>
            <div className={'auth-body'}>
                <h2>Вход</h2>
                <form>
                    <Input className={'header-input-search'}
                           value={login} onChange={(e) => dispatch(setLogin(e.target.value))
                    }
                           placeholder={'Логин'} width={232}/>
                    <Input className={'header-input-search'}
                           value={password} onChange={(e) => {
                        dispatch(setPassword(e.target.value))
                    }}
                           placeholder={'Пароль'} type={'number'} width={232}/>
                    <div className={'auth-form-checkbox'}>
                        <input type="checkbox"/>&nbsp;<span>{" Запомнить"}</span></div>
                    <Button onClick={setLogins} className={'auth-form-button'}>Войти</Button>
                </form>
            </div>
        </div>
    );
};

export default Auth;