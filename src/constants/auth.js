import {generateRequestSymbols} from "utils/helper"

const types =  generateRequestSymbols( 'AUTH', {
  signup:       { method: "POST", path: "/signup" },
  login:        { method: "POST", path: "/login" },
  logout:       { method: "GET",  path: "/logout" },
  session:      { method: "GET",  path: "/users/me" }
} )

export default types

/*
{
  signup:
    {
      REQUEST: Symbol('AUTH/SIGNUP/REQUEST'),
      SUCCESS: Symbol('AUTH/SIGNUP/SUCCESS'),
      FAILURE: Symbol('AUTH/SIGNUP/FAILURE')
    },
  login:
    {
      REQUEST: Symbol('AUTH/LOGIN/REQUEST'),
      SUCCESS: Symbol('AUTH/LOGIN/SUCCESS'),
      FAILURE: Symbol('AUTH/LOGIN/FAILURE')
    },
  logout:
    {
      REQUEST: Symbol('AUTH/LOGOUT/REQUEST'),
      SUCCESS: Symbol('AUTH/LOGOUT/SUCCESS'),
      FAILURE: Symbol('AUTH/LOGOUT/FAILURE')
    },
  session:
    {
      REQUEST: Symbol('AUTH/SESSION/REQUEST'),
      SUCCESS: Symbol('AUTH/SESSION/SUCCESS'),
      FAILURE: Symbol('AUTH/SESSION/FAILURE')
    }
}
*/
