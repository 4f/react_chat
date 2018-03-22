export default theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  error: {
    margin: theme.spacing.unit,
    background: 'red'
  },
  success: {
    margin: theme.spacing.unit,
    background: 'green'
  },
  notifyCloseIcon: {
    pointer: 'hand'
  },
  loader: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    background: "white",
    zIndex: "1999",
    opacity: ".8"
  }
})
