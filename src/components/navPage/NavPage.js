import './navPage.css';

import React from 'react'

function NavPage(props) {
    const {setPage, page, limit} = props;

    
    const prev = () => {
        if(page > 1){
            setPage(page - 1)
        }
    }
    
    const next = () => {
        if(limit && page < limit){
            setPage(page + 1)
        }else if(!limit){
            setPage(page + 1)
        }
    }
    
    const home = () => {
        setPage(1)
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="navPage">
                {page > 5 && <button type="button" 
                        className={
                            page > 1 ? "button-sm mr-3" : "button-sm mr-3 disabled"
                        } 
                        onClick={home}
                        >Home</button>}
                <button type="button" 
                        className={
                            page > 1 ? "button-sm mr-3" : "button-sm mr-3 disabled"
                        } 
                        onClick={prev}
                        >Prev</button>
                <button type="button" 
                        className={
                            page < limit || !limit ? "button-sm" : "button-sm mr-3 disabled"
                        } 
                        onClick={next}
                        >Next</button>
            </div>
        </div>
    )
}

export default NavPage
