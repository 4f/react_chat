import types from 'constants/auth'


const token = localStorage.getItem('token')
const initialState = { isAuth: !!token, user: null, token }

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.signup.SUCCESS:
    case types.login.SUCCESS:
      return { ...state, isAuth: true, user: action.payload.user, token: action.payload.token }

    case types.session.SUCCESS:
      return { ...state, isAuth: true, user: action.payload.user }

    case types.signup.FAILURE:
    case types.login.FAILURE:
    case types.session.FAILURE:
    case types.logout.SUCCESS:
      return { ...state, isAuth: false, user:   null, token:  '' }

    default:
      return state
  }
}
