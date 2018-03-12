import * as types from 'constants/services'
import Chat from 'constants/chats'
import history from 'utils/history'

export const redirect = (to) => (dispatch) => {
    history.push(to)
    dispatch({ type: types.REDIRECT, payload: { to } })
  dispatch({ type: Chat.notActive })
  }

export default { redirect }
