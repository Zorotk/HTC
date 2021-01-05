import React, {useEffect, useState} from 'react';
import axios from "axios";

const FilmsPage = () => {
    const [films, setfilms] = useState([])

    useEffect(() => {
        axios('http://localhost:5000/films').then(response => response)
            .then(result => setfilms(result.data))
    }, [])

    console.log(films)
    return (
        <div>
            1
            {films.map(el => (<div key={el.id}>
                {el.title}
                <img src={el.photoSrc} alt="imgFilm"/>
            </div>))}
        </div>
    );
};

export default FilmsPage;