import React from 'react'
import classNames from 'classnames'
import moment from 'moment'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Avatar from 'components/Avatar'

import Color from 'utils/color-from'

const ChatMessage = ({ classes, sender, user, content, createdAt, statusMessage }) => {
  const isMessageFromMe = user && sender._id === user._id
  const userAvatar = <Avatar colorFrom={sender.username} label={sender.username} />

  if (statusMessage) return (
    <div className={classes.messageWrapper}>
      <Typography className={classes.statusMessage}>
        <Typography variant="caption" style={{ color: Color(sender._id) }} className={classes.statusMessageUser}>
          {sender.username}
        </Typography>
        {content}
        <Typography variant="caption" component="span">
          {moment(createdAt).fromNow()}
        </Typography>
      </Typography>
    </div>
  )

  return (
    <div className={classNames(classes.messageWrapper, isMessageFromMe && classes.messageWrappperFromMe)}>
      {!isMessageFromMe && userAvatar}
      <Paper className={classes.message}>
        <Typography variant="caption" style={{ color: Color(sender._id)}}>
          {sender.username}
        </Typography>
        <Typography variant="body1">
          {content}
        </Typography>
        <Typography variant="caption" className={classes.time}>
          {moment(createdAt).fromNow()}
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  )
}

export default ChatMessage
