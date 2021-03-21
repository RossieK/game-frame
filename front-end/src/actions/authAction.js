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