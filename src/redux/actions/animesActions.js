import axios from 'axios';
import  {API} from '../../config';
import {ANIME_GET_HOME_REQUEST, 
        ANIME_GET_HOME_SUCCESS, 
        ANIME_GET_HOME_FAIL,
        ANIME_GET_INFO_REQUEST,
        ANIME_GET_INFO_SUCCESS,
        ANIME_GET_INFO_FAIL,
        ANIME_GET_RATING_REQUEST,
        ANIME_GET_RATING_SUCCESS,
        ANIME_GET_RATING_FAIL,
        ANIME_GET_FAVORITE_REQUEST,
        ANIME_GET_FAVORITE_SUCCESS,
        ANIME_GET_FAVORITE_FAIL,
        ANIME_GET_CATEGORIES_REQUEST,
        ANIME_GET_CATEGORIES_SUCCESS,
        ANIME_GET_CATEGORIES_FAIL,
        ANIME_GET_SEARCH_ANIME_REQUEST,
        ANIME_GET_SEARCH_ANIME_SUCCESS,
        ANIME_GET_SEARCH_ANIME_FAIL,
        ANIME_GET_EPISODE_REQUEST,
        ANIME_GET_EPISODE_SUCCESS,
        ANIME_GET_EPISODE_FAIL
    } from '../constants/animeConstants';

const getHomeAction = () => async (dispatch) => {
    dispatch({type: ANIME_GET_HOME_REQUEST, payload: {}});
    const {data} = await axios.get(API + 'api/');
    if(!data.error){
        dispatch({type: ANIME_GET_HOME_SUCCESS, payload: data.data});
    }else{
        dispatch({type: ANIME_GET_HOME_FAIL, payload: data.error});
    }
}

const getInfoAction = (id) => async (dispatch) => {
    dispatch({type: ANIME_GET_INFO_REQUEST, payload: {}});
    const {data} = await axios.get(`${API}api/info/${id}`);
    if(!data.error){
        dispatch({type: ANIME_GET_INFO_SUCCESS, payload: data.data});
    }else{
        dispatch({type: ANIME_GET_INFO_FAIL, payload: data.error})
    }
}

const getRatingAction = (page = 1) => async (dispatch) => {
    dispatch({type: ANIME_GET_RATING_REQUEST, payload: {}});
    const {data} = await axios.get(API + 'api/rating/?page=' + page);
    if(!data.error){
        dispatch({type: ANIME_GET_RATING_SUCCESS, payload: data.data});
    }else{
        dispatch({type: ANIME_GET_RATING_FAIL, payload: data.error})
    }
}

const getFavoritesAction = (animeName) => async (dispatch, getState) => {
    dispatch({type: ANIME_GET_FAVORITE_REQUEST, payload: {}});
    const {login: {userInfo}} = getState();
    const {data} = await axios.post(API + 'api/favoritos', {
        animeName,
        headers: {
            'Authorization': 'bearer ' + userInfo.token
        }
    });
    if(!data.error){
        dispatch({type: ANIME_GET_FAVORITE_SUCCESS, payload: data.data});
    }else{
        dispatch({type: ANIME_GET_FAVORITE_FAIL, payload: data.error})
    }
}

const getCategoriesAction = 
    (genres, year, type, status, order, page = 1) => 
        async (dispatch) => {
    dispatch({type: ANIME_GET_CATEGORIES_REQUEST, payload: {}});
    const {data} = await axios.post(`${API}api/categorias/?page=${page}`, 
    {
        genres, 
        year, 
        type,
        status,
        order
    });
    if(!data.error){
        dispatch({type: ANIME_GET_CATEGORIES_SUCCESS, payload: data.data});
    }else{
        dispatch({type: ANIME_GET_CATEGORIES_FAIL, payload: data.error})
    }
}

const searchAnimeAction = (animeName, page = 1) => async (dispatch) => {
    dispatch({type: ANIME_GET_SEARCH_ANIME_REQUEST, payload: []});
    const {data} = await axios.post(`${API}api/searchAnime/?page=${page}`,{animeName});
    if(!data.error){
        dispatch({type: ANIME_GET_SEARCH_ANIME_SUCCESS, payload: data.data});
    }else{
        dispatch({type: ANIME_GET_SEARCH_ANIME_FAIL, payload: data.error})
    }
}

const getEpisodeAction = (id, page = 1) => async (dispatch) => {
    dispatch({type: ANIME_GET_EPISODE_REQUEST, payload: {}});
    console.log('hola')
    const {data} = await axios.post(`${API}api/getEpisode/?page=${page}`,{id});
    if(!data.error){
        dispatch({type: ANIME_GET_EPISODE_SUCCESS, payload: data.data});
    }else{
        dispatch({type: ANIME_GET_EPISODE_FAIL, payload: data.error})
    }
}

export {
    getHomeAction, 
    getInfoAction, 
    getRatingAction,
    getFavoritesAction,
    getCategoriesAction,
    searchAnimeAction,
    getEpisodeAction
}