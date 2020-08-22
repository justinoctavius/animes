import './episodeList.css';

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getEpisodeAction } from '../../redux/actions/animesActions';
import { Link } from 'react-router-dom';
import NavPage from '../navPage/NavPage'

function EpisodeList(props) {
    const {id, title} = props;
    const [page, setPage] = useState(1)

    const episodes = useSelector(state => state.episode);
    const {loading, error, payload} = episodes;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEpisodeAction(id, page));
    },[page])

    return (
        <div className="c-mt-5">
            <div className="episode-header text-center c-border p-3">
                <h2 className="c-font-3">Episodes List</h2>
                <div className="c-mt-1">
                    <NavPage setPage={setPage} page={page} limit={payload && payload.episodes_last_page}></NavPage>
                </div>
            </div>
            <div className="episode-body">
                {
                    payload && payload.episodes && payload.episodes.length > 0 ? 
                        payload.episodes.map(episode => {
                            return <Link to={`/watch/${id}/${title}/${episode.episode_id}`} 
                                         key={episode.episode_id} 
                                         className="d-block text-center 
                                                    c-text-muted episode 
                                                    c-font-2 c-border p-3">
                                <h3 className="text-info" >{episode.title}</h3>
                                <p>Episode: 
                                    <span className="c-text-warning"> {episode.episode_id}</span> 
                                </p> 
                            </Link>
                        })
                    : !loading && <div className="helpId">
                        <small className="w-100 c-text-danger text-center c-font-2">
                            Episodes not founds
                        </small> 
                    </div>
                }
            </div>
            <div className="helpId">
                <small className="w-100 c-text-danger text-center c-font-2">
                    {error && `${error}`}
                    {loading && 'Loading...'}
                </small> 
            </div>
        </div>
    )
}

export default EpisodeList
