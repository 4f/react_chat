import { withStyles } from 'material-ui/styles'

const styles = theme => ({
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
  },
  signUpButton: {
    marginTop: theme.spacing.unit * 2
  },
  hide: {
    display: 'none'
  }
})

export default (comp) => withStyles(styles)(comp)
