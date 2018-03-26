import PT from 'prop-types'

export const container = (comp) => {
  comp.propTypes = {
<<<<<<< HEAD
    isAuth:  PT.oneOfType([PT.bool, PT.number]).isRequired,
=======
    isAuth:  PT.oneOfType([PT.bool, PT.oneOf([0])]).isRequired,
>>>>>>> tmpp
    notify:  PT.object.isRequired,
    session: PT.func.isRequired
  }
  return comp
}

export const avatar = (comp) => {
  comp.propTypes = {
<<<<<<< HEAD
    classes:    PT.object,
    label:      PT.string.isRequired,
    colorFrom:  PT.string.isRequired
=======
    classes:   PT.object,
    label:     PT.string.isRequired,
    colorFrom: PT.string.isRequired
>>>>>>> tmpp
  }
  return comp
}

export const notice = (comp) => {
  comp.propTypes = {
    notify:    PT.shape({
<<<<<<< HEAD
      message:    PT.string,
      status:     PT.string
=======
      message:   PT.string,
      status:    PT.string
>>>>>>> tmpp
    })
  }
  return comp
}


<<<<<<< HEAD

=======
>>>>>>> tmpp
export default {
  container,
  avatar,
  notice
}
