import './info.css';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getInfoAction } from '../../redux/actions/animesActions';
import EpisodeList from '../../components/episodeList/EpisodeList';

function Info() {
    const info = useSelector(state => state.info);
    const {loading, error, payload} = info;

    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() => {
        dispatch(getInfoAction(id))
    },[])
    return (
        <>
        <div className="helpId">
            <small className="c-text-danger text-center c-font-2">
                {error && `${error}`}
                {loading && 'Loading...'}
            </small> 
        </div>
        <div className="anime-box">
            {payload && 
            <>
            <div className="anime-card-main">
                <div className="anime-card">
                    <div className="anime-image c-border">
                        <img src={payload.image_url} alt={payload.title} />
                    </div>
                    <div className="anime-body c-border">
                        <div className="anime-title">
                            <h1>{payload.title}</h1>
                        </div>
                        <div className="anime-description">
                            {payload.synopsis}
                        </div>
                        <div className="anime-moreInfo">
                            <ul>
                                <li>Type: {payload.type}</li>
                                <li>Source: {payload.source}</li>
                                <li>Episodes: {payload.episodes}</li>
                                <li>Score: {payload.score}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="options">
                <div className="state text-center mr-3 c-font-2 c-border">
                    State: {payload.airing ?  
                            <p className="c-text-success">Emission</p> 
                            : <p className="c-text-danger">Finish</p>}
                </div>
                <div className="button-danger state text-center c-font-2">
                    {true ? <p className="c-text-danger">Remove <br/>
                                <span className="c-text-muted">Favorite</span>
                            </p> 
                          : <p className="c-text-success">Add <br/>
                                <span className="c-text-muted">Favorite</span>
                            </p>} 
                </div>
            </div>
            <EpisodeList id={id} title={payload.title}></EpisodeList>
            </>
            }
        </div>
        </>
    )
}

export default Info
