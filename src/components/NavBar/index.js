import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { useHistory } from 'react-router-dom'

import { ROUTES_LINKS } from 'router/constants'
import { toogleOpenNavbar } from 'redux/actions/appActions'
import { toogleTheme } from 'redux/actions/stylesActions'
import { logout } from 'redux/actions/sessionActions'
import { NavStyled, NavLink, MobileIcon, NavRightMenu } from './styles'
import {
  FaBars,
  FaHome,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa'
import ThemeSwitchButton from 'components/ThemeSwitchButton'

const NavBar = ({
  isAuth,
  canGoBack,
  toogleOpenNavbar,
  toogleTheme,
  logout,
}) => {
  // const history = useHistory()

  // const handleBackClick = () => history.goBack()

  return (
    <NavStyled>
      <ThemeSwitchButton />
      <MobileIcon onClick={toogleOpenNavbar}>
        <FaBars />
      </MobileIcon>
      <NavRightMenu>
        {isAuth && (
          <>
            <NavLink to={ROUTES_LINKS.HOME} activeStyle={{}}>
              <FaHome />
              Home
            </NavLink>
            <NavLink to={ROUTES_LINKS.USER} activeStyle={{}}>
              <FaUser />
              User
            </NavLink>
            <NavLink to={ROUTES_LINKS.LOGOUT} activeStyle={{}} onClick={logout}>
              <FaSignOutAlt />
              Logout
            </NavLink>
          </>
        )}
        {!isAuth && (
          <>
            <NavLink to={ROUTES_LINKS.LOGIN} activeStyle={{}}>
              <FaSignInAlt />
              Login
            </NavLink>
            <NavLink to={ROUTES_LINKS.REGISTER} activeStyle={{}}>
              <FaUserPlus />
              Register
            </NavLink>
          </>
        )}
      </NavRightMenu>
    </NavStyled>
  )
}

NavBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func,
  canGoBack: PropTypes.bool,
  toogleTheme: PropTypes.func.isRequired,
  toogleOpenNavbar: PropTypes.func.isRequired,
}

NavBar.defaultProps = {
  canGoBack: false,
}

const mapStateToProps = (state) => ({
  isAuth: state.session.isAuth,
})

const mapDispatchToProps = (dispatch) => ({
  toogleOpenNavbar: () => dispatch(toogleOpenNavbar()),
  toogleTheme: () => dispatch(toogleTheme()),
  logout: () => dispatch(logout()),
})

const NavBarConnected = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default memo(NavBarConnected)
