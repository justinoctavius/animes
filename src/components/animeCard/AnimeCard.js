import React from 'react';
import './animeCard.css';
import { Link } from 'react-router-dom';

function AnimeCard(props) {
    const {image, title, rank, type, id, score} = props;
    console.log(image);

    return (
        <div className="c-mt-1 box">
            <div className="anime-card text-center border c-m-1">
                <div className="anime-image border-bottom">
                    <img src={image} alt={title} className="w-100 h-100" />
                </div>
                <div className="anime-body  w-100">
                    <div className="anime-text">
                        <div className="anime-title c-font-2 border-bottom">
                            <h2 className="p-2"> <span className="c-text-warning">{rank}  </span> {title}</h2>
                        </div>
                        <div className="anime-info mx-3">
                            <div className="score c-font-2 ">
                                score: <span className="c-text-warning">{score}</span>
                            </div>
                            <div className="readMore c-font-2">
                                <Link className="c-text-warning" to={`/info/${id}`}>Ver</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard
