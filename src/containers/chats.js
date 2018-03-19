import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ChatsComponent from 'components/chats'
import RedirectMiddlewer from 'components/middlewer/redirect'
import Actions from 'actions'

// import { editUser } from '../actions/users'

import { construct as ChatMethods } from 'reducers/chats'
import { construct as GlobalMethods } from 'reducers'


const mapState = state => {
  const Chat = ChatMethods(state)
  return {
    middlewer: {
      name:       'chats',
      isAuth:     state.auth.isAuth,
      Component:  ChatsComponent
    },
    chats:      Chat.all(),
    chat:       Chat.active(),
    myHash:     Chat.my(),
    user:       GlobalMethods(state).getCurrentUser(),
    isSocket:   state.services.isSocket
  }
}

const mapDispatch = dispatch => ( {
  actions: {
    logout:   bindActionCreators(Actions.auth.logout,       dispatch),
    userEdit: bindActionCreators(Actions.users.edit,        dispatch),
    Chat:     bindActionCreators(Actions.chats,             dispatch),
    redirect: bindActionCreators(Actions.services.redirect, dispatch),
    Socket:   bindActionCreators(Actions.sockets,           dispatch)
  }
} )


export default connect( mapState, mapDispatch )( RedirectMiddlewer )
