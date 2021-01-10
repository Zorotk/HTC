import React, {useEffect} from 'react';
import './filmsPage.scss'
import {Provider, useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/reducer";

import photoOne from '../../assets/img/smile.png'
import photoTwo from '../../assets/img/sad.png'
import photoThree from '../../assets/img/alien.png'
import photoFour from '../../assets/img/ghost.png'
import Nav from "../navigation/nav";

const FilmsPage = () => {

    const films = useSelector(state => state.film.films)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchData('films'))
    }, [dispatch])
    return (
        <article>
            <Nav/>
            <div className={'films-news'}>
                <div className={'films-news-title'}>Новинки</div>
            </div>
            <div className={'films-cards'}>

                {films.map(el => (<div key={el.id}>
                    <div className={'film-card'}>

                        <img src={el.photoSrc} alt="imgFilm"/>
                        {el.title}
                    </div>
                </div>))}
            </div>

            <aside className={'films-genre-cards'}>
                <div className={'films-genre-cards-bg-y genre-card'}>
                    <img src={photoOne} alt=""/>
                    <div>Комедии</div>
                </div>
                <div className={'films-genre-cards-bg-p genre-card'}>
                    <img src={photoTwo} alt=""/>
                    <div>
                        Драмы
                    </div>
                </div>
                <div className={'films-genre-cards-bg-b genre-card'}>
                    <img src={photoThree} alt=""/>
                    <div>
                        Фантастика
                    </div>

                </div>
                <div className={'films-genre-cards-bg-g genre-card'}>
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