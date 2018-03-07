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
  state = {
    activeTab: 0,
    searchValue: ''
  }

  handleTabChange = (event, value) => this.setState({ activeTab: value })


  render() {
    const { classes, chats } = this.props
    const { activeTab, searchValue } = this.state

    return (
      <Drawer
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <TextField
            fullWidth
            margin="normal"
            placeholder="Search chats..."
            value={searchValue}
          />
        </div>
        <Divider />
        <List
          chats={chats}
          activeChat={chats.active}
        />
        <NewButton onClick={alert} />
        <BottomNavigation value={activeTab} onChange={this.handleTabChange} showLabels >
          <BottomNavigationAction className={classes.tab} label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction className={classes.tab} label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </Drawer>
    )
  }
}

export default withStyles(styles)(Sidebar)
