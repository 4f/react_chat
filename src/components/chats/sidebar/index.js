import React from 'react'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'
import RestoreIcon from 'material-ui-icons/Restore'
import ExploreIcon from 'material-ui-icons/Explore'
import CloseIcon from 'material-ui-icons/Close'
import Input, { InputAdornment } from 'material-ui/Input';

import List from './list'
import NewButton from './new'
import styles from 'styles/chats/sidebar'


class Sidebar extends React.Component {
  state = { activeTab: 0, search: '' }

  onTabChange = (event, value) => this.setState({ activeTab: value })

  onChange = (event) => this.setState({ search: event.target.value })
  onTab = (event, value) =>  this.setState({ activeTab: value })
  
  filter = (chats) => {
    const search = this.state.search.toLowerCase()

    return chats
      .filter(chat =>
        (chat.title || "").toLowerCase().includes(search) 
      &&
        (this.state.activeTab === 1 || this.props.myHash[chat._id])
      )
      // .sort((one, two) => one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1 )
  } 

  render() {
    const { create, classes, chats, chat, user } = this.props
    const { activeTab, search } = this.state

    return (
      <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" >


        <div className={classes.drawerHeader}>
          <Input type='text' fullWidth margin="dense" placeholder="Search chats..."
            value={search}
            onChange={this.onChange}
            endAdornment={
              <InputAdornment position="end">
                <CloseIcon />
              </InputAdornment>
            }
          />
        </div>

        <Divider />
        <List classes={classes} chats={this.filter(chats)} user={user} active={chat} />
        <NewButton classes={classes} create={create} />

        <BottomNavigation value={activeTab} onChange={this.onTabChange} showLabels >
          <BottomNavigationAction className={classes.tab} label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction className={classes.tab} label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>

      </Drawer>
    )
  }
}

export default withStyles(styles)(Sidebar)
