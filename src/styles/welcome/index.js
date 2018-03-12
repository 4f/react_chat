export const Welcome = theme => ({
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

export const Login = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2
  },
  hide: {
    display: 'none'
  }
})

export const Signup = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2
  }
})

