export const Header = theme => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
    marginLeft: 320
  },
  appBarTitle: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText
  }
})

export const UserMenu = theme => ({
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    width: '30%',
    minWidth: '300px',
    padding: theme.spacing.unit * 3
  },
  menuItem: {
    "&:hover $icon": {
      color: "blue"
    }
  },
  icon: {
    color: "lightblue"
  },
  appBarTitle: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText
  }
})
