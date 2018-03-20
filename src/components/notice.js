import React from 'react'
import Snackbar from 'material-ui/Snackbar'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'

class Notice extends React.Component {
  state = { open: false }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notice !== this.props.notice && nextProps.notice.message)
      this.setState({ open: true }) 
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.notice !== nextProps.notice || this.state.open !== nextState.open
  }
  
  close = () => this.setState({ open: false })
  render() {
    const { notice: { message }, horizontal } = this.props
    if (!message) return null

    return (
      <Snackbar anchorOrigin={{ vertical: "bottom", horizontal }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.close}
        message={<span>{message}</span>}
        SnackbarContentProps={{ classes: { root: this.props.classes } }}
        action={[
          <IconButton key="close" aria-label="Close" color="inherit"
            onClick={this.close}
          > <CloseIcon />
          </IconButton>
        ]}
      />
    )
  }
}

export default Notice
