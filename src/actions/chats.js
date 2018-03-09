import callApi from '../utils/call-api'
import { redirect } from './services'

import types from 'constants/chats'
import { http } from 'utils/call-api'

const log = function (error) { console.info(error) }

const thens = {
  all: { method: "POST", path: "/all" },
  my: { method: "POST", path: "/my" },
  item: {
    // catch: (e) => dispatch(redirect('/chat'))
  },
  create: { 
    // then: (data) => dispatch(redirect(`/chat/${data.chat._id}`))
   },
  join: { 
    // then: (data) => dispatch(redirect(`/chat/${data.chat._id}`))
  },
  leave: { 
    // then: (data) => dispatch(redirect('/chat'))
   },
  remove: { method: "GET", path: "/delete" },
  send: { method: "GET", path: "/send" }
}

const register = (symbol) => (payload) => (dispatch, getState) => {
  const options = types[symbol]
  dispatch({ type: options.REQUEST })
  return http({ type: options, dispatch, getState, payload })
    // .then(thens[symbol])
    // .then(() => options.redirect && dispatch(redirect(options.redirect)))
    .catch(thens[symbol].catch ||log)
}

const signup = register("signup")
const all = register("all")
const my = register("my")
const item = register("item")
const create = register("create")
const join = register("join")
const leave = register("leave")
const remove = register("remove")
const send = register("send")

const active = (payload) => (dispatch) =>
  dispatch(item(payload))
    .then(data => {
      if (!data) dispatch(redirect('/chat'));
      dispatch({ type: types.active, payload: data })
    })

export default {
  all,
  my,
  item,
  create,
  join,
  leave,
  remove,
  send,
  active
}
