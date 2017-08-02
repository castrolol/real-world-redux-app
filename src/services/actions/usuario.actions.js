import { 
    APP_USUARIO__LOAD_ALL_FETCHING,
    APP_USUARIO__LOAD_ALL_FETCH_SUCCESS,
    APP_USUARIO__LOAD_ALL_FETCH_FAIL
} from '../contants/usuarios.contants'

import usuarioApi from '../api/usuario.api';

export function loadUsuarios() {
    return function (dispatch, getState) {

        dispatch({
            type: APP_USUARIO__LOAD_ALL_FETCHING,
        });

        usuarioApi
            .getAll()
            .then(usuarios => {
                dispatch({
                    type: APP_USUARIO__LOAD_ALL_FETCH_SUCCESS,
                    items: usuarios
                });
            })
            .catch(err => {
                dispatch({
                    type: APP_USUARIO__LOAD_ALL_FETCH_FAIL,
                    error: err
                });
            })

    };
}