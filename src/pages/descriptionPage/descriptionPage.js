import React, {useState, useEffect} from 'react';
import './descriptionPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {addComment, fetchComments, fetchDeletedComment, setAuth, setLogin} from "../../redux/reducer";
import useLocalStorage from "../../hooks/localStorage";
import Button from "../../Components/button/button";


const DescriptionPage = () => {
    const {showDescription, films, loading, login, filmsComments, auth} = useSelector(({film}) => film)
    const dispatch = useDispatch()
    const [inputValue, setinputValue] = useState('')
    const [token,] = useLocalStorage('tokenLogin')
    useEffect(() => {
        dispatch(fetchComments())
        if (token !== ' ') {
            dispatch(setAuth(true))
            dispatch(setLogin(token))
        }
    }, [dispatch])
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addComment({'avtor': login, "comment": inputValue}))
    }

    useEffect(() => {
        if (token !== ' ') {
            dispatch(setLogin(token))
        }
    }, [token])

    return (
        <div className={'description'}>
            <div>
                {films.filter(el => el.id === showDescription - 1).map(({id, photoSrc, title, genre, description}) => (
                    <div className={'description-films'} key={id}>
                        <div className={'description-film-container'}>
                            <NavLink to="/films" className={'description-back'}>{'<'}</NavLink>
                            <img src={photoSrc} alt="imgFilm"/>
                        </div>
                        <div className={'description-film'}>
                            <div className={'description-name-container'}>
                                <div className={'description-name'}>
                                    <span>Название: </span><span>{title}</span>
                                </div>
                                <div className={'description-name'}>
                                    <span>Жанр: </span><span>{genre}</span>
                                </div>
                                <div className={'description-name'}>{description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="description-comments">
                <div>
                    <h2>Комментарии</h2>
                </div>

                {auth ? <form className={'description-comment-layout'}>
                    <textarea onChange={(e) => setinputValue(e.target.value)} className={'description-input'}
                              placeholder={'Введите комментарий...'} name="comments"
                              id="" cols="30" rows="10"></textarea>
                    <Button onClick={formHandler}>Опубликовать</Button>
                </form> : ""}
                {loading ? <div>Loading...</div> : <div>
                    {filmsComments.map(({id, comment, avtor}) =>
                        (
                            <div key={id} className={'description-comment-layout'}>
                                <div className={'description-comment-body'}>
                                    <div className={'description-comment-body-name'}>{avtor}</div>
                                    <div className="description-comment">{comment}</div>
                                </div>
                                {login === avtor && auth ? <span onClick={() => dispatch(fetchDeletedComment(id))}
                                                                 className="description-comment-x">X</span> : ""}
                            </div>
                        )
                    )}
                </div>}
            </div>
        </div>

    );
};

export default DescriptionPage;