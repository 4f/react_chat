import types from 'constants/auth'
import callApi from 'utils/call-api'

const register = (symbol) => (username, password) => (dispatch) => {
  dispatch({ type: types[symbol].REQUEST })
  return callApi(`/${symbol}`, undefined, { method: 'POST' }, { username, password })
    .then(json => {
      if (!json.token) throw new Error('Token has not been provided!');
      localStorage.setItem('token', json.token)
      dispatch({ type: types[symbol].SUCCESS, payload: json })
    })
    .catch(reason => dispatch({ type: types[symbol].FAILURE, payload: reason }))
}

export const signup = register("SIGNUP")
export const login  = register("LOGIN")


export function logout() {
  return (dispatch, getState) => { dispatch({ type: types.LOGOUT.REQUEST })
    return callApi('/logout')
      .then(json => {
        localStorage.removeItem('token')
        dispatch({ type: types.LOGOUT.SUCCESS, payload: json })
      })
      .catch(reason => dispatch({ type: types.LOGOUT.FAILURE, payload: reason }))
  }
}

export function recieveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth

    dispatch({ type: types.RECIEVE_AUTH.REQUEST })

    return callApi('/users/me', token)
      .then(json => dispatch({ type: types.RECIEVE_AUTH.SUCCESS, payload: json }))
      .catch(reason => dispatch({ type: types.RECIEVE_AUTH.FAILURE, payload: reason }))
  }
}
