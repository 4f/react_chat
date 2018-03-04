export default theme => ({
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