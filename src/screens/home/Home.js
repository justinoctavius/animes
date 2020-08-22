import './home.css';

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRatingAction} from '../../redux/actions/animesActions';
import AnimeCard from '../../components/animeCard/AnimeCard';
import Search from '../../components/search/Search';
import NavPage from '../../components/navPage/NavPage';

function Home() {
    const [animes, setAnimes] = useState([]);
    const [page, setPage] = useState(1);

    const home = useSelector(state => state.rating);
    const {loading, error, payload} = home

    console.log(payload)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRatingAction(page));
    },[page, animes])

    return (
        <div>
            <Search set={setAnimes} setPage={setPage} page={page}></Search>
            <NavPage setPage={setPage} page={page}></NavPage>
            <div>
                <div className="helpId">
                    <small className="c-text-danger text-center c-font-2">
                        {error && `${error}`}
                        {loading && 'Loading...'}
                    </small> 
                </div>
                <div className="animes">
                    {
                        !animes.length > 0 
                        ?
                            payload 
                            ?
                            payload.map(anime => {
                                return <AnimeCard
                                    key={anime.title}
                                    image={anime.image_url}
                                    title={anime.title} 
                                    label={anime.label} 
                                    rank={anime.rank}
                                    id={anime.mal_id}
                                    score={anime.score}
                                    type={anime.type}></AnimeCard>
                            })
                            : ''
                        : animes.map(anime => {
                            return <AnimeCard
                                key={anime.title}
                                image={anime.image_url}
                                title={anime.title} 
                                label={anime.label} 
                                rank={anime.rank}
                                id={anime.mal_id}
                                score={anime.score}
                                type={anime.type}></AnimeCard>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
