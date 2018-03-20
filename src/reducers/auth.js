import types from 'constants/auth'
import users from 'constants/users'


const token = localStorage.getItem('token')
const initialState = { isAuth: !!token, user: null, token }

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.signup.SUCCESS:
    case types.login.SUCCESS:     return { ...state,
                                    isAuth: true, user: action.payload.user,
                                    token: action.payload.token }
    case types.session.SUCCESS:   return { ...state,
                                    isAuth: true, user: action.payload.user }
    case types.signup.REQUEST:
    case types.login.REQUEST:
    case types.logout.REQUEST:
    case types.session.REQUEST:   return { ...state, isAuth: 0 }
    case types.signup.FAILURE:
    case types.login.FAILURE:
    case types.session.FAILURE:
    case types.logout.SUCCESS:    return { isAuth: false, user: null, token:  '' }
    case users.edit.SUCCESS:      return { ...state, user: action.payload.user }
    default:                      return state
  }
}
