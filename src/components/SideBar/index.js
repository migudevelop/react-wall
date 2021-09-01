import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ROUTES_LINKS } from 'router/constants'

import { toogleOpenNavbar } from 'redux/actions/appActions'
import { toogleTheme } from 'redux/actions/stylesActions'
import {
  SideBarContainerStyled,
  CloseIcon,
  IconStyled,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from './styles'
import {
  FaHome,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa'

const SideBar = ({
  isAuth,
  isOpen,
  canGoBack,
  toogleOpenNavbar,
  toogleTheme,
}) => {
  return (
    <SideBarContainerStyled isOpen={isOpen}>
      <IconStyled onClick={toogleOpenNavbar}>
        <CloseIcon />
      </IconStyled>
      <SideBarWrapper>
        <SideBarMenu>
          {isAuth && (
            <>
              <SideBarLink to={ROUTES_LINKS.HOME} onClick={toogleOpenNavbar}>
                <FaHome />
                Home
              </SideBarLink>
              <SideBarLink to={ROUTES_LINKS.USER} onClick={toogleOpenNavbar}>
                <FaUser />
                User
              </SideBarLink>
              <SideBarLink to={ROUTES_LINKS.USER}>
                <FaSignOutAlt />
                Logout
              </SideBarLink>
            </>
          )}
          {!isAuth && (
            <>
              <SideBarLink to={ROUTES_LINKS.LOGIN}>
                <FaSignInAlt />
                Login
              </SideBarLink>
              <SideBarLink to={ROUTES_LINKS.REGISTER}>
                <FaUserPlus />
                Register
              </SideBarLink>
            </>
          )}
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainerStyled>
  )
}

SideBar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  // logout: PropTypes.func.isRequired,
  canGoBack: PropTypes.bool,
  toogleTheme: PropTypes.func.isRequired,
  toogleOpenNavbar: PropTypes.func.isRequired,
}

SideBar.defaultProps = {
  canGoBack: false,
}

const mapStateToProps = (state) => ({
  isAuth: state.session.isAuth,
  isOpen: state.app.navBar.isOpen,
})

const mapDispatchToProps = (dispatch) => ({
  toogleOpenNavbar: () => dispatch(toogleOpenNavbar()),
  toogleTheme: () => dispatch(toogleTheme()),
})

const SideBarConnected = connect(mapStateToProps, mapDispatchToProps)(SideBar)
export default memo(SideBarConnected)
