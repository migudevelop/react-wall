import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ROUTES_LINKS } from './constants'

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: ROUTES_LINKS.LOGIN }} />
      )
    }
  />
)

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool,
  component: PropTypes.object.isRequired,
}

PrivateRoute.defaultProps = {
  isAuth: false,
}

export default PrivateRoute
