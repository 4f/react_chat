import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signup, login, recieveAuth } from 'actions'
import { withStyles } from 'material-ui'
import Welcome from 'components/welcome'
import styles from 'styles/WelcomePage'

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,
  recieveAuth
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)( withStyles(styles)(Welcome) )
