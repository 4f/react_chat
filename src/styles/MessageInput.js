export default theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 320px)`,
    padding: theme.spacing.unit * 3
  },
  messageInput: {
    padding: theme.spacing.unit * 2
  }
})
