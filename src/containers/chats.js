import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { logout } from 'actions/auth'
import Chats from 'components/chats'
import actions from 'actions/chats'

// import { editUser } from '../actions/users'

import { construct as ChatMethods } from 'reducers/chats'
import { construct as GlobalMethods } from 'reducers'

const mapStateToProps = state => {
  // const activeChat = fromChats.getById(state.chats, state.chats.activeId);
  let Chat = ChatMethods(state)
  let Global = GlobalMethods(state)

  return {
  //   isAuthenticated: state.auth.isAuthenticated,
    chats: Chat.all(),
    chat:  Chat.active(),
  //     my: fromChats.getByIds(state.chats, state.chats.myIds),
    user:  Global.getCurrentUser(),
    messages: state.chats.messages
  }
}

const mapDispatchToProps = dispatch => ( {
  actions: {
    logout: bindActionCreators( logout, dispatch),
    Chat:  bindActionCreators( actions, dispatch)
  }
} )


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats)
