import PT from 'prop-types'

export const index = (comp) => {
  comp.propTypes = {
    actions: PT.shape({
      auth: PT.shape({
        login:  PT.func.isRequired,
        signup: PT.func.isRequired
      }).isRequired
    }).isRequired
  }
  return comp
}

export const form = (comp) => {
  comp.propTypes = {
    handles: PT.shape({
      trySubmit:  PT.func.isRequired,
      setInput:   PT.func.isRequired,
      change:     PT.func.isRequired,
      check:      PT.func.isRequired,
      reset:      PT.func.isRequired,
      submit:     PT.func.isRequired
    }).isRequired,
    classes: PT.object,
    form:    PT.oneOf(['signup', 'login']),
    user:    PT.object.isRequired,
  }
  return comp
}


export default {
  index,
  form
}
