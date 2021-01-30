import React, {useEffect, useState} from 'react';
import './filmsPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchData, toggleDescription} from "../../redux/reducer";

import photoOne from '../../assets/img/smile.png'
import photoTwo from '../../assets/img/sad.png'
import photoThree from '../../assets/img/alien.png'
import photoFour from '../../assets/img/ghost.png'

import {useHistory} from 'react-router-dom'
import Nav from "../../Components/navigation/nav";

const FilmsPage = () => {
    const history = useHistory()
    const {films, search} = useSelector(({film}) => film)
    const dispatch = useDispatch()
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
                ? value === Number(search)
                : value.includes(search)
        )
    ).filter(item => genres === undefined ? item : item.genre === genres);


    return (
        <main className={'main-content'}>
            <Nav/>
            <div className={'content-container'}>
                <div className={'films-news'}>
                    <div className={'films-news-title'}>Новинки</div>
                </div>
            </div>
            <div className={'films-cards'}>
                {data.map(({id, photoSrc, description, title}) => (<div key={id}>
                    <div className={'film-card'} onClick={() => descriptionHandler(id)}>
                        <div className={'card'}>
                            <div className="film-card-info">{description}</div>
                            <img src={photoSrc} alt="imgFilm"/>
                        </div>
                        <div className={'film-card-name'}>{title}</div>
                    </div>
                </div>))}
            </div>
            <div className={'content-container'}>
                <div className={'films-genre'}>

                    <div className={'films-news-title'}>Жанры</div>


                </div>
            </div>
            <aside className={'films-genre-cards'}>
                <div className={'films-genre-cards-bg-y genre-card'} onClick={() => setgenres('комедия')}>
                    <img src={photoOne} alt=""/>
                    <div className={'genre-card-title'}>Комедии</div>
                </div>
                <div className={'films-genre-cards-bg-p genre-card'} onClick={() => setgenres('драма')}>
                    <img src={photoTwo} alt=""/>
                    <div className={'genre-card-title'}>
                        Драмы
                    </div>
                </div>
                <div className={'films-genre-cards-bg-b genre-card'} onClick={() => setgenres('Фантастика')}>
                    <img src={photoThree} alt=""/>
                    <div className={'genre-card-title'}>
                        Фантастика
                    </div>
                </div>
                <div className={'films-genre-cards-bg-g genre-card'} onClick={() => setgenres('ужасы')}>
                    <img src={photoFour} alt=""/>
                    <div className={'genre-card-title'}>
                        Ужасы
                    </div>
                </div>
            </aside>
        </main>
    );
};

export default FilmsPage;