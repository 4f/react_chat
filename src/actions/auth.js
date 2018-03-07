import types from 'constants/auth'
import {http} from 'utils/call-api'

const log = function(error){ console.info(error) }

const thens = {
  signup:  (json) => localStorage.setItem('token', json.token),
  login:   (json) => localStorage.setItem('token', json.token),
  logout:  (json) => localStorage.removeItem('token'),
  session: (json) => {}
}

const register = (symbol) => (username, password) => (dispatch, getState) => {
  dispatch({ type: types[symbol].REQUEST })
  let payload = !username ? undefined : {username, password}
  return http({ type: types[symbol], dispatch, getState, payload })
    .then(thens[symbol])
    .catch(log)
}

export const signup = register("signup")
export const login  = register("login")
export const logout  = register("logout")
export const session  = register("session")

export default {
  signup,
  login,
  logout,
  session
}
