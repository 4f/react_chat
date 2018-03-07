import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signup, login, session } from 'actions'
import auth from 'actions/auth'
import { withStyles } from 'material-ui'
import Welcome from 'components/welcome'
import {Welcome as styles} from 'styles/welcome'

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = dispatch => ( {
  actions: {
    auth: bindActionCreators( auth , dispatch)
} } )


export default connect(
  mapStateToProps,
  mapDispatchToProps
)( withStyles(styles)(Welcome) )
