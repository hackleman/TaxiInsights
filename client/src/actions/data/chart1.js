import axios from 'axios';

import {
    DATA_LOADING,
    DATA_SUCCESS,
    DATA_FAIL
  } from '../types';


// Authenticate User
export const login = ({ username, password }) => dispatch => {

    // Request body
    const body = JSON.stringify({ username, password });

    axios.post('http://localhost:5000/users/authenticate', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
};
