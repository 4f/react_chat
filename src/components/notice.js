import React from 'react'
import Snackbar, { SnackbarContent } from 'material-ui/Snackbar'
import CloseIcon from 'material-ui-icons/Close'
import { notice as applyPropTypes } from 'prop_types/app'


import { notice as applyPropTypes } from 'prop_types/app'

class Notice extends React.Component {
  state = { open: false, list: [] }

  componentWillReceiveProps({notify}) {
    if (notify !== this.props.notify && notify.message) {
      const obj = { open: true, list: [{ ...notify, id: new Date().getTime().toString() }, ...this.state.list] }
      this.setState(obj) 
    }
  }
<<<<<<< HEAD
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.notice !== nextProps.notice || this.state.open !== nextState.open
  // }
  
  close = () => {
    debugger
  this.setState({ open: false, list: [] })
  }
  render() {
    console.log("PRO", this.props)
    return (
      <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={this.state.open}
        autoHideDuration={90000}
        onClose={this.close.bind(this)}
      >
      <React.Fragment>
          {this.state.list.map( (notify)=> {
            console.log("FFF", notify)
            return(
        <SnackbarContent className={this.props.classes[notify.status]}
          key={notify.id}
          message={notify.message}
          action={[ <CloseIcon  classes={{ root: this.props.classes.notifyCloseIcon}} /> ]}
        />
          ) } ) }
      </React.Fragment>
    </Snackbar>
    
      )
} }
=======
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
        action={[ <CloseIcon onClick={this.close} classes={{ root: this.props.classes.notifyCloseIcon}} /> ]}
      />
        ) ) }
    </div>
  </Snackbar>
) } }
>>>>>>> tmpp

export default applyPropTypes(Notice)
