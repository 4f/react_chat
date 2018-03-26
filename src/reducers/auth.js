import types from 'constants/auth';


const User = {
  _user: _user => (_user.payload ? _user.payload.user : _user),
  update: (in_state, _user) => {
    let token = _user.payload && _user.payload.token;
    if (token) localStorage.setItem('token', token);
    token = token || in_state.token;
    const user = User._user(_user);
    const out_state = { isAuth: true, user, token };
    localStorage.setItem('user', JSON.stringify(user));
    return out_state;
  },
  remove: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return { isAuth: false, user: null, token: '' };
  },
  getLocal: () => {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch (e) {
      return null;
    }
  },
};

const token = localStorage.getItem('token');
const user = User.getLocal();
const initialState = { isAuth: !!token && !!user, user, token };

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.signup.SUCCESS:
    case types.login.SUCCESS:
    case types.edit.SUCCESS:
    case types.session.SUCCESS: return User.update(state, action);
    case types.signup.REQUEST:
    case types.login.REQUEST:
    case types.logout.REQUEST:
    case types.session.REQUEST: return { ...state, isAuth: 0 };
    case types.logout.SUCCESS: return User.remove();
    case types.signup.FAILURE:
    case types.login.FAILURE:
    case types.session.FAILURE: return { ...state, isAuth: false };
    default: return state;
  }
}
