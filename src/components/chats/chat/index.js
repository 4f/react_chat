import React from 'react';
import Messages from './messages';
import InputMessage from './input';

import styles from 'styles/chats/chat';
import { index as applyPropTypes } from 'prop_types/chats/chat';

const Chat = ({
  chat, classes, join, send, user,
}) => (
  <main className={classes.chatLayout}>
    <Messages chat={chat} user={user} classes={classes} />
    <InputMessage
      classes={classes}
      send={send}
      chat={chat}
      isJoinButton={!user.isInChat}
      join={join}
    />
  </main>
);

export default styles(applyPropTypes(Chat));
