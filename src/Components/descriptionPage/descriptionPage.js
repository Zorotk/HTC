import React, {useEffect} from 'react';
import './descriptionPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Button from "../header/button/button";

const DescriptionPage = () => {
    const showDescription = useSelector(state => state.film.showDescription)
    const films = useSelector(state => state.film.films)
    const dispatch = useDispatch()

    useEffect(() => {
        if (showDescription) {
            console.log('gg')
        }
    }, [showDescription])
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
                <form action="">
                    <textarea className={'description-input'} placeholder={'Введите комментарий...'} name="comments"
                              id="" cols="30" rows="10"></textarea>
                    <Button>Опубликовать</Button>
                </form>


                <div className="description-comment">
                    1
                </div>
                <div className="description-comment">
                    2
                </div>
            </div>
        </div>

    );
};

export default DescriptionPage;