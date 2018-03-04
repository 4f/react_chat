import React from 'react'
import classNames from 'classnames'
import moment from 'moment'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Avatar from 'components/Avatar'

import randomColor from 'utils/color-from'

import styles from 'styles/ChatMessage'

const ChatMessage = ({ classes, sender, content }) => {
  const isMessageFromMe = sender === 'me'

  const userAvatar = <Avatar colorFrom={sender}>{sender}</Avatar>

  return (
    <div className={classNames(classes.messageWrapper, isMessageFromMe && classes.messageWrappperFromMe)}>
      {!isMessageFromMe && userAvatar}
      <Paper className={classNames(classes.message, isMessageFromMe && classes.messageFromMe)}>
        <Typography variant="caption" style={{ color: randomColor(sender)}}>
          {sender}
        </Typography>
        <Typography variant="body1">
          {content}
        </Typography>
        <Typography variant="caption" className={classes.time}>
          {moment().fromNow()}
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
}

export default withStyles(styles)(ChatMessage)
