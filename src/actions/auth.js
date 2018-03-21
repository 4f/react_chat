import types from 'constants/auth'
import {generateRegisters} from 'utils/helpers'

const thens = {
  signup:  (json) => localStorage.setItem('token', json.token),
  login:   (json) => localStorage.setItem('token', json.token),
  logout:  (json) => localStorage.removeItem('token'),
}

export default { ...generateRegisters(types, thens) }
