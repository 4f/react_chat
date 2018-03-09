import React from 'react'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'
import RestoreIcon from 'material-ui-icons/Restore'
import ExploreIcon from 'material-ui-icons/Explore'
import List from './list'
import NewButton from './new'
import {Sidebar as styles} from 'styles/chats/sidebar'


class Sidebar extends React.Component {
  state = { activeTab: 0, searchValue: '' }

  onTabChange = (event, value) => this.setState({ activeTab: value })

  
  render() {
    const { create, classes, chats, chat, user } = this.props
    const { activeTab, searchValue } = this.state

    return (
      <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" >

        <div className={classes.drawerHeader}>
          <TextField value={searchValue} fullWidth margin="normal" placeholder="Search chats..." />
        </div>

        <Divider />
        <List chats={chats} user={user} active={chat} />
        <NewButton create={create} />

        <BottomNavigation value={activeTab} onChange={this.onTabChange} showLabels >
          <BottomNavigationAction className={classes.tab} label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction className={classes.tab} label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>

      </Drawer>
    )
  }
}

export default withStyles(styles)(Sidebar)
