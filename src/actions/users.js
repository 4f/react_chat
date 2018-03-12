import  types from 'constants/users'
import {http} from 'utils/call-api'

const log = function (error) { console.info(error) }
const thens = {}


const register = (symbol) => (payload) => (dispatch, getState) => {
  const options = types[symbol]
  dispatch({ type: options.REQUEST })
  return http({ type: options, dispatch, getState, payload })
    .then(thens[symbol])
    .catch(log)
}

const edit = register("edit")

export default { edit }
