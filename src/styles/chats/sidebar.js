export const Sidebar = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  tab: {
    '&:hover': {
      background: "lightgrey",
      color: "black"
    }
  }
})

export const Item = theme => ({
  activeItem: {
    backgroundColor: theme.palette.grey[200]
  }
})

export const List = theme => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll'
  },
  noChats: {
    textAlign: 'center'
  }
})

export const New = theme => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
    '&:hover': {
      background: "red"
    }
  },
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    width: '30%',
    minWidth: '300px',
    padding: theme.spacing.unit * 3
  }
})
