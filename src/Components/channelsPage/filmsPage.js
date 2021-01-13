import React, {useEffect, useState} from 'react';
import './filmsPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchData, toggleDescription} from "../../redux/reducer";

import photoOne from '../../assets/img/smile.png'
import photoTwo from '../../assets/img/sad.png'
import photoThree from '../../assets/img/alien.png'
import photoFour from '../../assets/img/ghost.png'
import Nav from "../navigation/nav";
import {useHistory} from 'react-router-dom'

const FilmsPage = () => {
    const history = useHistory()
    const films = useSelector(state => state.film.films)
    const dispatch = useDispatch()
    const searchText = useSelector(state => state.film.search)
    const [genres, setgenres] = useState()
    useEffect(() => {
        dispatch(fetchData('films'))
    }, [dispatch])
    const descriptionHandler = (id) => {
        dispatch(toggleDescription(id + 1))
        history.push(`/description/${id}`)
    }
    const data = films.filter((item) =>
        Object.values(item).some((value) =>
            typeof value !== "string"
                ? value === Number(searchText)
                : value.includes(searchText)
        )
    ).filter(item => genres === undefined ? item : item.genre === genres);


    return (
        <article>
            <Nav/>
            <div className={'films-news'}>
                <div className={'films-news-title'}>Новинки</div>
            </div>
            <div className={'films-cards'}>

                {data.map(el => (<div key={el.id}>
                    <div className={'film-card'} onClick={() => {
                        descriptionHandler(el.id)
                    }}>
                        <img src={el.photoSrc} alt="imgFilm"/>
                        {el.title}
                    </div>
                </div>))}
            </div>

            <aside className={'films-genre-cards'}>
                <div className={'films-genre-cards-bg-y genre-card'} onClick={() => setgenres('комедия')}>
                    <img src={photoOne} alt=""/>
                    <div>Комедии</div>
                </div>
                <div className={'films-genre-cards-bg-p genre-card'} onClick={() => setgenres('драма')}>
                    <img src={photoTwo} alt=""/>
                    <div>
                        Драмы
                    </div>
                </div>
                <div className={'films-genre-cards-bg-b genre-card'} onClick={() => setgenres('Фантастика')}>
                    <img src={photoThree} alt=""/>
                    <div>
                        Фантастика
                    </div>

                </div>
                <div className={'films-genre-cards-bg-g genre-card'} onClick={() => setgenres('ужасы')}>
                    <img src={photoFour} alt=""/>
                    <div>
                        Ужасы
                    </div>
                </div>
            </aside>
        </article>

    );
};

export default FilmsPage;