import React, {useState, useEffect} from 'react';
import './descriptionPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {addComment, fetchComments, fetchDeletedComment, setLoading} from "../../redux/reducer";
import useLocalStorage from "../../hooks/localStorage";
import Button from "../../Components/header/button/button";


const DescriptionPage = () => {
    const showDescription = useSelector(state => state.film.showDescription)
    const films = useSelector(state => state.film.films)
    const loading = useSelector(state => state.film.loading)
    const filmsComments = useSelector(state => state.film.filmsComments)
    const dispatch = useDispatch()
    const [inputValue, setinputValue] = useState('')
    const [token,] = useLocalStorage('tokenLogin')
    useEffect(() => {
        dispatch(fetchComments()).then(() => dispatch(setLoading(false)))
    }, [dispatch])
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addComment({'avtor': token, "comment": inputValue}))
    }
    const deleteComment = (id) => {
        dispatch(fetchDeletedComment(id))
    }


    return (
        <div className={'description'}>
            <div className={'description-films'}>
                <div className={'description-film'}>
                    {films.filter(el => el.id === showDescription - 1).map(el => (
                        <div className={'description-film-container'} key={el.id}>
                            <NavLink to="/films" className={'description-back'}>{'<'}</NavLink>
                            <img src={el.photoSrc} alt="imgFilm"/>
                        </div>
                    ))}

                </div>
                <div className={'description-film'}>
                    {films.filter(el => el.id === showDescription - 1).map(el => (
                        <div className={'description-name-container'} key={el.id}>
                            <div className={'description-name'}>
                                <span>Название: </span><span>{el.title}</span>
                            </div>
                            <div className={'description-name'}>
                                <span>Жанр: </span><span>{el.genre}</span>
                            </div>
                            <div className={'description-name des-style'}>{el.description}</div>
                        </div>
                    ))}

                </div>
                <div className={'description-film'}>

                </div>
            </div>


            <div className="description-comments">
                <h2>Комментарии</h2>
                <form className={'description-comment-layout'}>
                    <textarea onChange={(e) => setinputValue(e.target.value)} className={'description-input'}
                              placeholder={'Введите комментарий...'} name="comments"
                              id="" cols="30" rows="10"></textarea>
                    <Button onClick={formHandler}>Опубликовать</Button>
                </form>
                {loading ? <div>Loading...</div> : <div>
                    {filmsComments.flat().map((el, i) => {
                            return (
                                <div key={i} className={'description-comment-layout'}>
                                    <div className={'description-comment-body'}>
                                        <div className={'description-comment-body-name'}>{el.avtor}</div>
                                        <div className="description-comment">{el.comment}</div>
                                    </div>
                                    {token === el.avtor ? <span onClick={() => deleteComment(el.id)}
                                                                className="description-comment-x">X</span> : ""}
                                </div>
                            )
                        }
                    )}
                </div>}
            </div>
        </div>

    );
};

export default DescriptionPage;