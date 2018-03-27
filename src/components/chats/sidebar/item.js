import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from 'material-ui/List'
import Tooltip from 'material-ui/Tooltip'
import MoreIcon from 'material-ui-icons/MoreVert'

import senderName from 'utils/sender-name'

import Avatar from 'components/ava'

import { item as applyPropTypes } from 'prop_types/chats/sidebar'

const ChatListItem = ({ classes, chat, active, user, member, openMenu }) => {
  const className = () => ( active && active._id === chat._id ? classes.activeItem : classes.item )
  const wrapTooltip = (str) => str ? (str.match(/[^ ]{1,49}/g) || []).join(" ") : str
  const strCountMembers = () => "members: " + (chat.members.length + 1)
  const secondary = () => {
    let name, cls
    if (chat.creator._id === user._id){
      name = "creator"
      cls  = classes[name]
    }
    else if (member){
      name = "member"
      cls  = classes[name]
    }
    else {
      name = senderName(chat.creator)
      cls  = classes['alian']
    }
    return (
      <React.Fragment>
        <Tooltip title={wrapTooltip( senderName(chat.creator) )} placement="bottom-start">
          <span className={cls} > {name} </span>
        </Tooltip>
        <span> {moment(chat.createdAt).fromNow()} </span>
      </React.Fragment>
    )
  }

  const onClickMenu = (ev) => {
    ev.preventDefault()
    openMenu(ev.currentTarget, chat)
  }
  return (
    <ListItem button
      component={Link}
      to={`/chat/${chat._id}`}
      className={className()}
    >
      <Tooltip title={wrapTooltip(chat.title) } placement="bottom-start">
        <Avatar colorFrom={chat._id} label={chat.title} />
      </Tooltip>
      <Tooltip title={strCountMembers()} placement="bottom-start" >
        <MoreIcon className={classes.moreIcon} onClick={onClickMenu} />
      </Tooltip>
      <ListItemText
        primary={ chat.title }
        classes={{ primary: classes.itemText, secondary: classes.itemText2, root: classes.itemRoot }}
        secondary={secondary()}
      />
    </ListItem>
  )
}

export default applyPropTypes( ChatListItem )
