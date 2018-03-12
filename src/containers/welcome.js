import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui'

import WelcomeComponent from 'components/welcome'
import RedirectMiddlewer from 'components/middlewer/redirect'

import auth from 'actions/auth'
import {Welcome as styles} from 'styles/welcome'


const mapState = (state) => ({
  middlewer: {
    isAuth:   state.auth.isAuth,
    name:     "welcome",
    Component: withStyles(styles)(WelcomeComponent)
  }
})

const mapDispatch = dispatch => ( {
  actions: {
    auth:     bindActionCreators(auth , dispatch)
} } )

export default connect( mapState, mapDispatch )( RedirectMiddlewer )
