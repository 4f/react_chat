import React from 'react'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Item from './item'
import Menu from './menu'


import { list as applyPropTypes } from 'prop_types/chats/sidebar'

class ChatList extends React.Component {
  state = { anchorEl: null, anchorChat: null }
  close = () => {
    // clearTimeout(this.stOpen)
    this.setState({ anchorEl: null })
    console.log("UURRJJR")
  }
  open = (el, chat) => {
    this.setState({ anchorEl: el, anchorChat: chat })
  }

  render() {
    const { classes, chats, user, active, myHash, join, remove, leave } = this.props
    return (
      <List className={classes.chatsList}>
        <Menu
          close={this.close}
          el={this.state.anchorEl}
          chat={this.state.anchorChat}
          user={user}
          classes={classes}
          join={join}
          remove={remove}
          leave={leave}
          myHash={myHash}
        />
        { chats && chats.length
          ? 
            chats.map((chat) => 
          <Item
            key={chat._id}
            classes={classes}
            chat={chat}
            active={active}
            user={user}
            member={myHash[chat._id]}
            openMenu={this.open}
          />)
          :
          <Empty classes={classes} /> }
      </List>
    )
  }
}


const Empty = (props) => (
  <Typography variant="subheading" className={props.classes.noChats}>
    There is no chats yet...
  </Typography>
)

export default applyPropTypes(ChatList)
