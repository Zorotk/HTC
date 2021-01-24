import React, {useEffect} from 'react';
import './header.scss'
import Input from "../input/input";
import Button from "../button/button";
import Logo from "../logo/logo";
import Modal from "../modal/modal";
import Auth from "../auth/auth";
import useLocalStorage from "../../hooks/localStorage";
import {useDispatch, useSelector} from "react-redux";
import {setAuth, setLogin, setmodalActive, setSearch} from "../../redux/reducer";

const Header = () => {
    const [token, settoken] = useLocalStorage('tokenLogin')

    const modalActive = useSelector(state => state.film.modalActive)
    const auth = useSelector(state => state.film.auth)
    const dispatch = useDispatch()
    const login = useSelector(state => state.film.login)
    useEffect(() => {
        if (login.length > 0 && auth) {
            settoken(login)

        }
    }, [login, auth])

    const changeLogin = (value) => {
        dispatch(setLogin(value))
        settoken(value)
    }
    const authExit = () => {
        settoken(" ")
        dispatch(setAuth(false))
    }


    const search = useSelector(state => state.film.search)
    return (
        <header className="header-container">
            <div className="header-item logo">
                <Logo/>
            </div>
            <div className="header-item-search">
                <Input className={'header-input-search'}
                       onChange={(e) => dispatch(setSearch(e.target.value))}
                       value={search}
                       props={{placeholder: 'Поиск...', type: "text"}}/>
                <div className={'search-btn'}>Найти</div>
            </div>
            <div className="header-item auth">
                {token !== " "
                    ? <div className={'search-auth'}>
                        <input className={'search-auth-input'}
                               onChange={(e) => changeLogin(e.target.value)}
                               value={token}/>

                        <button className={'search-auth-btn'} onClick={authExit}>Выйти</button>
                    </div>
                    :
                    <Button onClick={() => dispatch(setmodalActive(!modalActive))}>
                        войти
                    </Button>
                }
                <Modal active={modalActive}>
                    <Auth/>
                </Modal>
            </div>
        </header>
    );
};

export default Header;