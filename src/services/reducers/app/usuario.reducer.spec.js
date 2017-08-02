import { 
    APP_USUARIO__LOAD_ALL_FETCHING,
    APP_USUARIO__LOAD_ALL_FETCH_SUCCESS,
    APP_USUARIO__LOAD_ALL_FETCH_FAIL
} from '../../contants/usuarios.contants'

import usuario from './usuario.reducer'

describe('usuarios reducer', () => {
  it('should handle initial state', () => {
    expect(
      usuario(undefined, {})
    ).toEqual({ items: [], page: 1 })
  })

  it('should handle fetching all records', () => {

    expect(
      usuario({ items: [], page: 1 }, {
        type: APP_USUARIO__LOAD_ALL_FETCHING
      })
    ).toEqual({
      items: [],
      page: 1,
      loading: true,
      error: null
    })

    expect(
      usuario({ items: [], page: 1, loading: true }, {
        type: APP_USUARIO__LOAD_ALL_FETCH_FAIL,
        error: '404'
      })
    ).toEqual({
      items: [],
      page: 1,
      loading: false,
      error: '404'
    })

    expect(
      usuario({ items: [1, 2, 3], page: 1, loading: true }, {
        type: APP_USUARIO__LOAD_ALL_FETCH_FAIL,
        error: '404'
      })
    ).toEqual({
      items: [1, 2, 3],
      page: 1,
      loading: false,
      error: '404'
    })

    expect(
      usuario({ items: [], page: 1, loading: true }, {
        type: APP_USUARIO__LOAD_ALL_FETCH_SUCCESS,
        items: [1, 2, 3, 4]
      })
    ).toEqual({
      items: [1, 2, 3, 4],
      page: 1,
      loading: false
    })
  })
})