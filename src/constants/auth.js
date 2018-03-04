const names = ["SIGNUP", "LOGIN", "LOGOUT", "RECIEVE_AUTH"]
const methods = ["REQUEST", "SUCCESS", "FAILURE"]

/*names.reduce((r, i) => (
  { ...r, [i]: methods.reduce((r2, i2) => ({ ...r2, [i2]: Symbol(`auth/${i}_${i2}`) }), {}) }
), {} )*/

let default_return = {}
names.map( n => {
  default_return[n] = {}
  methods.map(m => default_return[n][m] = Symbol(`auth/${n}_${m}`) )
} )

export default default_return

/*
{
  SIGNUP:
    {
      REQUEST: Symbol('auth/SIGNUP_REQUEST'),
      SUCCESS: Symbol('auth/SIGNUP_SUCCESS'),
      FAILURE: Symbol('auth/SIGNUP_FAILURE')
    },
  LOGIN:
    {
      REQUEST: Symbol('auth/LOGIN_REQUEST'),
      SUCCESS: Symbol('auth/LOGIN_SUCCESS'),
      FAILURE: Symbol('auth/LOGIN_FAILURE')
    },
  LOGOUT:
    {
      REQUEST: Symbol('auth/LOGOUT_REQUEST'),
      SUCCESS: Symbol('auth/LOGOUT_SUCCESS'),
      FAILURE: Symbol('auth/LOGOUT_FAILURE')
    },
  RECIEVE_AUTH:
    {
      REQUEST: Symbol('auth/RECIEVE_AUTH_REQUEST'),
      SUCCESS: Symbol('auth/RECIEVE_AUTH_SUCCESS'),
      FAILURE: Symbol('auth/RECIEVE_AUTH_FAILURE')
    }
}
*/
