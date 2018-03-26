import React from 'react';
import { Redirect } from 'react-router-dom';

class RedirectMiddlewer extends React.Component {
  shouldComponentUpdate(next) { return next.middlewer.redirect !== 0; }
  render() {
    const { middlewer: { redirect, Component }, ...props } = this.props;
    return (
      redirect ?
        <Redirect to={redirect} />
        :
        <Component {...props} />
    );
  }
}

export default RedirectMiddlewer;
