import types from 'constants/auth'
import {generateRegisters} from 'utils/helpers'

<<<<<<< HEAD
// const thens = {
//   signup:  (json) => localStorage.setItem('token', json.token),
//   login:   (json) => localStorage.setItem('token', json.token),
//   logout:  (json) => localStorage.removeItem('token'),
// }
=======
  // const thens = {
  //   signup:  (json) => localStorage.setItem('token', json.token),
  //   login:   (json) => localStorage.setItem('token', json.token),
  //   logout:  (json) => localStorage.removeItem('token'),
  // }
>>>>>>> tmpp

export default { ...generateRegisters(types) }
