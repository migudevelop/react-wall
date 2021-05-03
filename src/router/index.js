import { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import { ROUTES_LINKS } from './constants'

const LoginPage = lazy(() => import('pages/Login'))
const RegisterPage = lazy(() => import('pages/Register'))
const UsersPage = lazy(() => import('pages/Users'))
const HomePage = lazy(() => import('pages/Home'))

const Routes = ({ isAuth }) => (
  <Suspense fallback={<span>Loading...</span>}>
    <Switch>
      <Route exact path={ROUTES_LINKS.LOGIN} component={LoginPage} />
      <Route exact path={ROUTES_LINKS.REGISTER} component={RegisterPage} />
      <PrivateRoute
        exact
        isAuth={isAuth}
        path={ROUTES_LINKS.USER}
        component={UsersPage}
      />
      <PrivateRoute
        exact
        isAuth={isAuth}
        path={ROUTES_LINKS.HOME}
        component={HomePage}
      />
    </Switch>
  </Suspense>
)

Routes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isAuth: state.session.isAuth,
})

const RoutesConnected = connect(mapStateToProps, null)(Routes)
export default RoutesConnected
