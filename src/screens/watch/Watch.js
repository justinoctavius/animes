import './watch.css';

import React from 'react'
import { useParams } from 'react-router-dom';

function Watch() {
    const {id, episode, title} = useParams();

    return (
        <div className="text-center">
            <div className='iframe-box'>
            <iframe scrolling="no"
                    src={`https://myanimelist.net/anime/${id}/${title}/episode/${episode}`} 
                    className="iframe"
                    title={title}
                    >
            </iframe>
            </div>
        </div>
    )
}

export default Watch
