import React from 'react'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreIcon from 'material-ui-icons/MoreVert'

class ChatMenu extends React.Component {
  state = { anchorEl: null }

  open = (event) => this.setState({ anchorEl: event.currentTarget })
  close = () =>  this.setState({ anchorEl: null })

  leave = () => {
    this.close()
    this.props.leave({id: this.props.chat._id})
  }

  remove = () => {
    this.close()
    this.props.delete({id: this.props.chat._id})
  }

  render() {
    const { user, disabled, chat } = this.props
    const { anchorEl } = this.state

    if (!chat) return <React.Fragment> DogeCodes React Chat#1 </React.Fragment>
    if (!user.isInChat) return null
    
    return (
      <React.Fragment>
        <div onMouseEnter={this.open} onClick={this.open}>
          { chat.title }
          <IconButton color="inherit" aria-haspopup="true"
            aria-owns={anchorEl ? 'simple-menu' : null}
            disabled={disabled}
          >
            <MoreIcon />
          </IconButton>
        </div>
        <Menu id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.close}
        >
            {user.isMember &&
          <MenuItem onClick={this.leave}>Leave</MenuItem>}
            {user.isCreator &&
          <MenuItem onClick={this.remove}>Delete</MenuItem>}
        </Menu>
      </React.Fragment>
    )
  }
}

export default ChatMenu
