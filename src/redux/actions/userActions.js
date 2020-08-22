import axios from 'axios';
import cookies from 'js-cookie';
const {API} =  require('../../config');
const {USER_LOGIN_REQUEST, 
        USER_LOGIN_SUCCESS, 
        USER_LOGIN_FAIL,
        USER_REGISTER_REQUEST,
        USER_REGISTER_SUCCESS,
        USER_REGISTER_FAIL
    } = require('../constants/userConstants');

const loginAction = (email, password) => async (dispatch) => {
    dispatch({type: USER_LOGIN_REQUEST, payload: {}});
    const {data} = await axios.post(API + 'api/login', {email, password});
    if(!data.error){
        cookies.set('userInfo', JSON.stringify(data.data));
        dispatch({type: USER_LOGIN_SUCCESS, payload: data.data});
    }else{
        dispatch({type: USER_LOGIN_FAIL, payload: data.error});
    }
}

const registerAction = (name, email, password, password_confirmation) => async (dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload: {}});
    const {data} = await axios.post(API + 'api/register', {
        name,
        email,
        password,
        password_confirmation
    });
    console.log(data.error)
    if(!data.error){
        cookies.set('userInfo', JSON.stringify(data.data));
        dispatch({type: USER_REGISTER_SUCCESS, payload: data.msg});
    }else{
        console.log('hola')
        dispatch({type: USER_REGISTER_FAIL, payload: data.error});
    }
}

export {loginAction, registerAction};