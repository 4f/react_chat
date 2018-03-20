import React from 'react'
import { Redirect } from 'react-router-dom'

import { redirects } from 'constants/config'

class RedirectMiddlewer extends React.Component {
  shouldComponentUpdate() { return this.props.isAuth !== 0 }
  render() { 
    const { middlewer: { isAuth, name, Component }, ...props } = this.props
    return (
      isAuth === redirects[name].isAuth ?
    <Redirect to={redirects[name].path} />
      :
    <Component {...props} />
    )
  }
}

export default RedirectMiddlewer
