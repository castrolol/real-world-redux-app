import APP from '../contants/usuarios.contants'

import usuarioApi from '../api/usuario.api';

export function loadUsuarios(page = 1) {
    return function (dispatch, getState) {

        dispatch({
            type: APP.USUARIO.LOAD_ALL_FETCHING,
            page,
        });

        usuarioApi
            .getAll(page)
            .then(({ items, page, pageCount }) => {
                dispatch({
                    type: APP.USUARIO.LOAD_ALL_FETCH_SUCCESS,
                    items,
                    page,
                    pageCount
                });
            })
            .catch(err => {
                dispatch({
                    type: APP.USUARIO.LOAD_ALL_FETCH_FAIL,
                    error: err
                });
            })

    };
}