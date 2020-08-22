import {
    ANIME_GET_HOME_REQUEST, 
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

const getHomeReducer = (state = {payload: []}, action) => {
    switch(action.type){
        case ANIME_GET_HOME_REQUEST:
            return {loading: true};
        case ANIME_GET_HOME_SUCCESS:
            return {loading: false, payload: action.payload};
        case ANIME_GET_HOME_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

const getInfoReducer = (state = {payload: []}, action) => {
    switch(action.type){
        case ANIME_GET_INFO_REQUEST:
            return {loading: true};
        case ANIME_GET_INFO_SUCCESS:
            return {loading: false, payload: action.payload};
        case ANIME_GET_INFO_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

const getRatingReducer = (state = {payload: []}, action) => {
    switch(action.type){
        case ANIME_GET_RATING_REQUEST:
            return {loading: true};
        case ANIME_GET_RATING_SUCCESS:
            return {loading: false, payload: action.payload};
        case ANIME_GET_RATING_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

const getFavoritesReducer = (state = {payload: {}}, action) => {
    switch(action.type){
        case ANIME_GET_FAVORITE_REQUEST:
            return {loading: true};
        case ANIME_GET_FAVORITE_SUCCESS:
            return {loading: false, payload: action.payload};
        case ANIME_GET_FAVORITE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

const getCategoriesReducer = (state = {payload: []}, action) => {
    switch(action.type){
        case ANIME_GET_CATEGORIES_REQUEST:
            return {loading: true};
        case ANIME_GET_CATEGORIES_SUCCESS:
            return {loading: false, payload: action.payload};
        case ANIME_GET_CATEGORIES_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

const searchAnimeReducer = (state = {payload: []}, action) => {
    switch(action.type){
        case ANIME_GET_SEARCH_ANIME_REQUEST:
            return {loading: true};
        case ANIME_GET_SEARCH_ANIME_SUCCESS:
            return {loading: false, payload: action.payload};
        case ANIME_GET_SEARCH_ANIME_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

const getEpisodeReducer = (state = {payload: {}}, action) => {
    switch(action.type){
        case ANIME_GET_EPISODE_REQUEST:
            return {loading: true};
        case ANIME_GET_EPISODE_SUCCESS:
            return {loading: false, payload: action.payload};
        case ANIME_GET_EPISODE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export {
    getHomeReducer,
    getInfoReducer,
    getRatingReducer,
    getFavoritesReducer,
    getCategoriesReducer,
    searchAnimeReducer,
    getEpisodeReducer
}