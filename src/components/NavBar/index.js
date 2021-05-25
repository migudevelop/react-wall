import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { useHistory } from 'react-router-dom'

import { ROUTES_LINKS } from 'router/constants'
import { toogleOpenNavbar } from 'redux/actions/appActions'
import { toogleTheme } from 'redux/actions/stylesActions'
import {
  NavStyled,
  Logo,
  NavLink,
  MobileIcon,
  NavMenu,
  NavRightMenu,
} from './styles'
import {
  FaBars,
  FaHome,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa'

const NavBar = ({ isAuth, canGoBack, toogleOpenNavbar, toogleTheme }) => {
  // const history = useHistory()

  // const handleBackClick = () => history.goBack()

  return (
    <NavStyled>
      <NavLink to={ROUTES_LINKS.HOME}>
        <Logo />
      </NavLink>
      <MobileIcon onClick={toogleOpenNavbar}>
        <FaBars />
      </MobileIcon>
      {isAuth && (
        <>
          <NavMenu>
            <NavLink to={ROUTES_LINKS.HOME} activeStyle={{}}>
              <FaHome />
              Home
            </NavLink>
            <NavLink to={ROUTES_LINKS.USER} activeStyle={{}}>
              <FaUser />
              User
            </NavLink>
          </NavMenu>
        </>
      )}
      <NavRightMenu>
        {isAuth && (
          <NavLink to={ROUTES_LINKS.HOME} activeStyle={{}}>
            <FaSignOutAlt />
            Logout
          </NavLink>
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
  // logout: PropTypes.func.isRequired,
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
})

const NavBarConnected = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default memo(NavBarConnected)
