export default theme => ({
  moreIcon: {
    "&:hover": {
      background: theme.palette.grey[100],
      color: "#11f",
      border: "1px outset white"
    }
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingTop:  theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  tab: {
    '&:hover': {
      background: "lightgrey",
      color: "black"
    }
  },
  activeItem: {
    backgroundColor: theme.palette.grey[200]
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll'
  },
  noChats: {
    textAlign: 'center'
  },
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
