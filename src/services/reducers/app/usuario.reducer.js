import { 
    APP_USUARIO__LOAD_ALL_FETCHING,
    APP_USUARIO__LOAD_ALL_FETCH_SUCCESS,
    APP_USUARIO__LOAD_ALL_FETCH_FAIL
} from '../../contants/usuarios.contants'

const INITAL_STATE = {
    items: [],
    page: 1
};

export default function usuario(state = INITAL_STATE, action) {

    const { type, items, error } = action;

    switch (type) {

        case APP_USUARIO__LOAD_ALL_FETCHING:
            return { ...state, loading: true, error: null };

        case APP_USUARIO__LOAD_ALL_FETCH_SUCCESS:
            return { ...state, items, loading: false }

        case APP_USUARIO__LOAD_ALL_FETCH_FAIL:
            return { ...state, error, loading: false }

        default:
            return state;
    }


}