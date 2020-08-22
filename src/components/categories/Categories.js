import React from 'react'
import './categories.css'
import AnimeCard from '../animeCard/AnimeCard'

function Categories() {
    return (
        <div>
            <div>
                <div className="text-center c-font-5">
                    <h1 className="c-font-5 c-text-light c-mt-2">Categorías</h1>
                </div>
                <div className="categories-box c-text-muted text-center c-font-2 c-mt-3">
                    <div className="category">
                        <div className="button-muted border">Genero: {}</div>
                    </div>  
                    <div className="category">
                        <div className="button-muted border">Año: {}</div>
                    </div>  
                    <div className="category">
                        <div className="button-muted border">Tipo: {}</div>
                    </div>  
                    <div className="category">
                        <div className="button-muted border">Estado: {}</div>
                    </div>
                    <div className="category">
                        <div className="button-muted border">Orden: {}</div>
                    </div>
                    <div className="category">
                        <button type="button" className="button">Filtrar</button>
                    </div>
                </div>
            </div>
            <div className="animes-box">
                <div className="animes">
                    <AnimeCard></AnimeCard>
                </div>
            </div>
        </div>
    )
}

export default Categories
