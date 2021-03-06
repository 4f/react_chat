import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
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
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    '&:hover': {
      background: "#f5f5f5"
    }
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
    "& $message": {
      marginRight: theme.spacing.unit * 2,
      backgroundColor: '#e6dcff'
    },
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    cursor: "pointer",
    '&:hover': {
      background: "#f1f1f1"
    }
  },
  statusMessage: {
    background: "#f3f3f3",
    margin: "0 30%",
    width: '100%',
    textAlign: 'center'
  },
  statusMessageUser: {
    fontWeight: "700",
    display: 'inline'
  },
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px'
  },
  paper: {
    padding: theme.spacing.unit * 3
  }
})

export default (comp) => withStyles(styles)(comp)
