import types from 'constants/auth'


const token        = localStorage.getItem('token')
const initialState = { isAuth: !!token, user: null, token }
const User = {
  _user:  (_user) => _user.payload ? _user.payload.user : _user,
  update: (in_state, _user) => {
  let out_state    = { isAuth: true, user: User._user(_user) }
  out_state.token  = ( _user.payload && _user.payload.token ) || in_state.token
  return out_state
} }

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.signup.SUCCESS:
    case types.login.SUCCESS:    localStorage.setItem('token', action.payload.token)//no-fallthrough
    case types.edit.SUCCESS:
    case types.session.SUCCESS:  return User.update(state, action)
    case types.signup.REQUEST:
    case types.login.REQUEST:
    case types.logout.REQUEST:
    case types.session.REQUEST:  return { ...state, isAuth: 0 }
    case types.logout.SUCCESS:   localStorage.removeItem('token')
                                 return { isAuth: false, user: null, token: '' }
    case types.signup.FAILURE:
    case types.login.FAILURE:
    case types.session.FAILURE:  return { ...state, isAuth: false }
    default:                     return state
  }
}
