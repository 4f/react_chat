import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';

import WelcomeComponent from 'components/welcome';
import RedirectMiddlewer from 'middlewer/redirect';
import { redirects } from 'constants/config';

import auth from 'actions/auth';
import { Welcome as styles } from 'styles/welcome';


const mapState = ({ auth: { isAuth } }) => ({
  middlewer: {
    redirect: isAuth === true ? redirects.welcome.path : 0,
    Component: withStyles(styles)(WelcomeComponent),
  },
}
);

const mapDispatch = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
  },
});

export default connect(mapState, mapDispatch)(RedirectMiddlewer);
