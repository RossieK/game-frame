import axios from 'axios';
import { returnErrors } from '../actions/errorAction';

//Check token & load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({
        type: "USER_LOADING"
    });

    axios.get('http://localhost:5000/user', tokenConfig(getState))
        .then(res => dispatch({
            type: "USER_LOADED",
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));

            dispatch({
                type: "AUTH_ERROR"
            });
        })
}

//Register user
export const register = ({ email, password, rePassword }) => dispatch => {
    //Header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request Body
    const body = JSON.stringify({ email, password, rePassword });

    axios.post("http://localhost:5000/register", body, config)
        .then(res => dispatch({
            type: "REGISTER_SUCCESS",
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: "REGISTER_FAIL"
            });

            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        })
}

//Login User
export const login = ({ email, password }) => dispatch => {
    //Header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request Body
    const body = JSON.stringify({ email, password });

    axios.post("http://localhost:5000/login", body, config)
        .then(res => dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: "LOGIN_FAIL"
            });

            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
        })
}

//Logout User
export const logout = () => {
    return {
        type: "LOGOUT_SUCCESS"
    }
}

//Setup config/headers and token
export const tokenConfig = getState => {
    //Get token from local storage
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //If there's a token, add it to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}