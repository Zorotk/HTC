import React, {useEffect} from 'react';

import './channelsPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/reducer";
import Nav from "../navigation/nav";

const ChannelsPage = () => {
    const channels = useSelector(state => state.film.channels)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData('channels'))
    }, [dispatch])

    return (
        <div>
            <Nav/>
            <div className={'channel'}>
                <div className={'channel-cards'}>
                    {channels.map(el => (<div key={el.id} className={'channel-card-body'}>
                        <img className={'channel-card-body-img'} src={el.channelLogoSrc} alt="imgFilm"/>
                        <div className={'channel-card-body-content'}>
                            <h2>{el.title}</h2>
                            <div>
                                {el.tvProgram.map((el, i) => (
                                    <div key={i} className={i === 0 ? 'channel-card-time-one' : ' channel-card-time'}>
                                        <span>{el.time}</span>
                                        <span>{el.title}</span></div>))}
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default ChannelsPage;