import { 
         SET_LOGIN,
         SET_REGISTER,
         SET_OPENMENU,
         SET_CLOSEMENU,
         CLEAR_ROUTE
     } 
    from './types';


export const setLogin = () => {
    return {
        type: SET_LOGIN
    };
}

export const clearRoute = () => {
    return {
        type: CLEAR_ROUTE
    };
}

export const openMenu = () => {
    return {
        type: SET_OPENMENU
    }
}

export const closeMenu = () => {
    return {
        type: SET_CLOSEMENU
    }
}

export const setRegister = () => {
    return {
        type: SET_REGISTER
    };
}
