import { 
    SET_LOGIN,
    CLEAR_ROUTE,
    SET_REGISTER,
    SET_OPENMENU,
    SET_CLOSEMENU
} from '../actions/types';

const initialState = {
    maps: false,
    charts: false,
    contact: false,
    register: false,
    login: false,
    menu: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_LOGIN:
            return {
                maps: false,
                charts: false,
                contact: false,
                register: false,
                login: true
            }
        case SET_REGISTER:
                return {
                    maps: false,
                    charts: false,
                    contact: false,
                    register: true,
                    login: false
                }
        case SET_OPENMENU:
                return {
                    menu: true
                }
        case SET_CLOSEMENU:
                return {
                    menu: false
                }
        case CLEAR_ROUTE:
                return {
                    maps: false,
                    charts: false,
                    contact: false,
                    register: false,
                    login: false,
                    menu: false
                }
        default:
            return state;
    }   
}