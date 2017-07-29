const isType = type => `APP.USUARIO.${type}`;

const INITAL_STATE = {
    items: [],
    page: 1
};


export default function usuario(state = INITAL_STATE, action) {

    const { type, items, error } = action;

    switch (type) {

        case isType("LOAD_ALL_FETCHING"):
            return { ...state, loading: true, error: null };

        case isType("LOAD_ALL_FETCH_SUCCESS"):
            return { ...state, items, loading: false }

        case isType("LOAD_ALL_FETCH_ERROR"):
            return { ...state, error, loading: false }

        default:
            return state;
    }


}