import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from 'material-ui/List';
import Tooltip from 'material-ui/Tooltip';
import MoreIcon from 'material-ui-icons/MoreVert';

import Avatar from 'components/ava';

import { item as applyPropTypes } from 'prop_types/chats/sidebar';

const ChatListItem = ({
  classes, chat, active, user, member,
}) => {
  const className = () => (active && active._id === chat._id ? classes.activeItem : classes.item);
  const wrapTooltip = str => (str ? (str.match(/[^ ]{1,49}/g) || []).join(' ') : str);
  const secondary = () => {
    let first = 'alien';
    if (chat.creator._id === user._id) { first = 'creator'; } else if (member) { first = 'member'; }
    return (
      <React.Fragment>
        <span className={classes[first]} > {first} </span>
        <span> {moment(chat.createdAt).fromNow()} </span>
      </React.Fragment>
    );
  };


  return (
    <ListItem
      button
      component={Link}
      to={`/chat/${chat._id}`}
      className={className()}
    >
      <Tooltip title={wrapTooltip(chat.title)} placement="bottom-start">
        <Avatar colorFrom={chat._id} label={chat.title} />
      </Tooltip>
      <MoreIcon className={classes.moreIcon} />
      <ListItemText
        primary={chat.title}
        classes={{ primary: classes.itemText, secondary: classes.itemText2, root: classes.itemRoot }}
        secondary={secondary()}
      />
    </ListItem>
  );
};

export default applyPropTypes(ChatListItem);
