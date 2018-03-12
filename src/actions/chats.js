import types from 'constants/chats'
import { http } from 'utils/call-api'

const log = function (error) { console.info(error) }
const thens = {}


const register = (symbol) => (payload) => (dispatch, getState) => {
  const options = types[symbol]
  dispatch({ type: options.REQUEST })
  return http({ type: options, dispatch, getState, payload })
    .then(thens[symbol])
    .catch(log)
}

const all = register("all")
const my = register("my")
const active = register("active")
const create = register("create")
const join = register("join")
const leave = register("leave")
const remove = register("remove")
const send = register("send")
const notAcitve = () => ( { type: types.notAcitve })


export default {
  all,
  my,
  active,
  create,
  join,
  leave,
  remove,
  send,
  notAcitve
}
