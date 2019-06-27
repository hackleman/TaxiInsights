import {
    DATA_LOADING,
    DATA_SUCCESS,
    DATA_FAIL
  } from '../actions/types';

const initialState = {
    isLoading: false,
    isLoaded: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case DATA_LOADING:
            return {
                ...state,
                isLoading: true,
                isLoaded: false
            };
        case DATA_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                isLoading: false
            };
        case DATA_FAIL:
            return {
                ...state,
                isLoaded: false,
                isLoading: false
            }
        default: 
            return state;
    }
}
