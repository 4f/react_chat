import React from 'react'
import { Redirect } from 'react-router-dom'

import { redirects } from 'constants/config'


const RedirectMiddlewer = ({ middlewer: { isAuth, name, Component }, ...props }) => (
  <React.Fragment>
    { isAuth === redirects[name].isAuth ?
      <Redirect to={redirects[name].path} />
      :
      <Component {...props} />
    }
  </React.Fragment>
)

export default RedirectMiddlewer
