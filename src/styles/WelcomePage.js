export default theme => ({
  paper: {
    marginTop: 64 + theme.spacing.unit * 3,
    width: 500
  },
  tabContent: {
    padding: theme.spacing.unit * 3
  },
  tab: {
    '&:hover': {
      background: 'yellow'
    }
  }
})
