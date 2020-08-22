import React, { useState, useEffect } from 'react'
import './search.css'
import { useDispatch, useSelector } from 'react-redux';
import { searchAnimeAction } from '../../redux/actions/animesActions';

function Search(props) {
    const {set, setPage, page} = props
    const [animeName, setAnimeName] = useState('');

    const search = useSelector(state => state.search);
    const {loading, error, payload} = search;

    const dispatch = useDispatch()
    const submit = () => {
        dispatch(searchAnimeAction(animeName))
    }

    useEffect(() => {
        if(payload){
            set(payload)
        }
    },[payload])

    return (
        <div className="c-m-2">
            <div className="c-form-group">
                <input type="text" 
                        className="c-form-control-sm c-font-2" 
                        name="search" 
                        placeholder="Busca un anime" 
                        value={animeName}
                        onChange={e => setAnimeName(e.target.value)}
                        />
                <button type="button" 
                        className="button-md c-font-2" 
                        onClick={submit}
                        >Buscar</button>
            </div>
            <div className="helpId c-text-danger text-center c-font-2">
                <small>
                    {error && `${error}`}
                    {loading && 'cargando...'}
                </small> 
            </div>
        </div>
    )
}

export default Search
