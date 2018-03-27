import React from 'react'

import ComponentAvatar from 'components/ava'

const User = ({ _id, username, firstName, lastName }) => {
  const firstLast = () => {
    if (firstName)
      return lastName ? `${firstName} ${lastName}` : `${firstName}`
    else
      return lastName ? '${lastName' : ""
  }
  const name = () => firstName && lastName ? firstLast() : username
  const fullName = () => `${username} ${firstLast()}`
  const Avatar = <ComponentAvatar colorFrom={username} label={name()} />
  return {
    _id,
    name,
    fullName,
    firstLast,
    Avatar
  }
}

export default User
