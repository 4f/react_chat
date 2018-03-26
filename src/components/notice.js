import React from 'react'
import Snackbar, { SnackbarContent } from 'material-ui/Snackbar'
import CloseIcon from 'material-ui-icons/Close'
import { notice as applyPropTypes } from 'prop_types/app'


class Notice extends React.Component {
  state = { open: false, list: [] }

  componentWillReceiveProps({notify}) {
    if (notify !== this.props.notify && notify.message) {
      const obj = { open: true, list: [notify, ...this.state.list] }
      this.setState(obj) 
    }
  }
  close = () => this.setState({ open: false, list: [] })
  render() { return (
    <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={this.state.open}
      autoHideDuration={90000}
      onClose={this.close}
    >
    <div>
        {this.state.list.map( (notify)=> (
      <SnackbarContent className={this.props.classes[notify.status]}
        key={notify.message}
        message={notify.message}
        action={<CloseIcon onClick={this.close} classes={{ root: this.props.classes.notifyCloseIcon}} /> }
      />
        ) ) }
    </div>
  </Snackbar>
) } }

export default applyPropTypes(Notice)
