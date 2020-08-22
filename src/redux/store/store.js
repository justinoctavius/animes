import {createStore, 
        combineReducers, 
        applyMiddleware,
        compose    
} from 'redux';
import thunk from 'redux-thunk';
import cookie from 'js-cookie';
import { loginReducer, registerReducer } from '../reducers/userReducers';
import {getInfoReducer, 
        getRatingReducer, 
        getCategoriesReducer, 
        getFavoritesReducer, 
        searchAnimeReducer, 
        getHomeReducer, 
        getEpisodeReducer } from '../reducers/animeReducers';

const userInfo = cookie.getJSON('userInfo') || null;
const initialState = {login: {userInfo}};

const reducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    info: getInfoReducer,
    rating: getRatingReducer,
    categories: getCategoriesReducer,
    favorites: getFavoritesReducer,
    search: searchAnimeReducer,
    home: getHomeReducer,
    episode: getEpisodeReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;