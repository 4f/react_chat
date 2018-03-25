import PT from 'prop-types'

export const container = (comp) => {
  comp.propTypes = {
    isAuth:  PT.oneOfType([PT.bool, PT.oneOf([0])]).isRequired,
    notify:  PT.object.isRequired,
    session: PT.func.isRequired
  }
  return comp
}

export const avatar = (comp) => {
  comp.propTypes = {
    classes:   PT.object,
    label:     PT.string.isRequired,
    colorFrom: PT.string.isRequired
  }
  return comp
}

export const notice = (comp) => {
  comp.propTypes = {
    notify:    PT.shape({
      message:   PT.string,
      status:    PT.string
    })
  }
  return comp
}


export default {
  container,
  avatar,
  notice
}
