import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ChatsComponent from 'components/chats';
import RedirectMiddlewer from 'middlewer/redirect';
import Actions from 'actions';

import { redirects } from 'constants/config';
import { construct as ChatMethods } from 'reducers/chats';
import { construct as GlobalMethods } from 'reducers';


const mapState = (state) => {
  const Chat = ChatMethods(state);
  return {
    middlewer: {
      redirect: state.auth.isAuth === false ? redirects.chats.path : false,
      Component: ChatsComponent,
    },
    chats: Chat.all(),
    chat: Chat.active(),
    myHash: Chat.my(),
    user: GlobalMethods(state).getCurrentUser(),
    isSocket: state.services.isSocket,
  };
};

const mapDispatch = dispatch => ({
  actions: {
    logout: bindActionCreators(Actions.auth.logout, dispatch),
    userEdit: bindActionCreators(Actions.auth.edit, dispatch),
    Chat: bindActionCreators(Actions.chats, dispatch),
    redirect: bindActionCreators(Actions.services.redirect, dispatch),
    Socket: bindActionCreators(Actions.sockets, dispatch),
  },
});


export default connect(mapState, mapDispatch)(RedirectMiddlewer);
