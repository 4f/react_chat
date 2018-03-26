import types from 'constants/chats';
import sockets from './sockets';
import { redirect } from './services';
import { generateRegisters } from 'utils/helpers';


const active = ({ _id }) => (dispatch, getState) => {
  const chat = getState().chats.chat;
  const _active = () => {
    dispatch({ type: types.active, payload: { _id } });
    if (_id) dispatch(sockets.mountChat(_id));
    if (chat) dispatch(sockets.unmountChat(chat._id));
    return Promise.resolve('Ok');
  };
  if (_id == (chat && chat._id)) return Promise.resolve('nothing to change');// eqeqeq
  if (_id) {
    if (chat === 0 && !getState().chats.hash[_id]) return dispatch(redirect('/chat'));
    return dispatch(chats.get({ _id })).then(data => (!data || !data.error) && _active());
  } return _active();
};

const chats = { ...generateRegisters(types), active };
export default chats;
