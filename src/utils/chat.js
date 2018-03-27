import React from 'react'

import ComponentAvatar from 'components/ava'
import User from './user'

const Chat = ({ _id, creator, title }) => {
  const Avatar = <ComponentAvatar colorFrom={_id} label={title} />
  return {
    _id,
    title,
    creator: User(creator),
    Avatar
  }
}

export default Chat
