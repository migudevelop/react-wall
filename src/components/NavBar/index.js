import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { useHistory } from 'react-router-dom'

import { toogleOpenNavbar } from 'redux/actions/appActions'
import { toogleTheme } from 'redux/actions/stylesActions'
import {
  NavStyled,
  Logo,
  NavGroup,
  NavLink,
  MobileIcon,
  NavMenu,
} from './styles'
import { FaBars } from 'react-icons/fa'

const NavBar = ({ isAuth, canGoBack, toogleOpenNavbar, toogleTheme }) => {
  // const history = useHistory()

  // const handleBackClick = () => history.goBack()

  return (
    <NavStyled>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <MobileIcon onClick={toogleOpenNavbar}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        <NavGroup>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/detail" activeStyle={true}>
            Detail
          </NavLink>
        </NavGroup>
      </NavMenu>
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
