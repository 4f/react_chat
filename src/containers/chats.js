import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { logout } from 'actions/auth'
import Chats from 'components/chats'

const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats)
