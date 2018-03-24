
import PropTypes from 'prop-types';

export const routes = (comp) => comp.propTypes = {
  isAuth:  PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  notify:  PropTypes.object.isRequired,
  session: PropTypes.func.isRequired
}

export default {
  routes
}
