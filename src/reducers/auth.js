import types from 'constants/auth'


const token = localStorage.getItem('token')
const initialState = { isAuth: !!token, user: null, token }

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP.SUCCESS:
    case types.LOGIN.SUCCESS:
      return { ...state, isAuth: true, user: action.payload.user, token: action.payload.token }

    case types.RECIEVE_AUTH.SUCCESS:
      return { ...state, isAuth: true, user: action.payload.user }

    case types.SIGNUP.FAILURE:
    case types.LOGIN.FAILURE:
    case types.RECIEVE_AUTH.FAILURE:
    case types.LOGOUT.SUCCESS:
      return { ...state, isAuth: false, user:   null, token:  '' }

    default:
      return state
  }
}
