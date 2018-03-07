import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { session } from 'actions/auth';

const pathname = '/welcome'

class PrivateRoute extends React.Component {
  componentDidMount() { this.props.session() }

  render() {
    const { component, render, ...rest } = this.props
    return ( <Route {...rest} render={ render(component) } /> )
  }
}



const mapStateToProps = state => ({
  render: Component => props => 
    state.auth.isAuth ? <Component {...props} /> : <Redirect to={{ pathname }} />
})
const mapDispatchToProps = dispatch => bindActionCreators({
  session
}, dispatch)

export default withRouter( connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute) )
