import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()

  // const handleBackClick = () => history.goBack()
  const handleGoTo = (route) => {
    toogleOpenNavbar()
    history.push(route)
  }

  return (
    <SideBarContainerStyled isOpen={isOpen}>
      <IconStyled onClick={toogleOpenNavbar}>
        <CloseIcon />
      </IconStyled>
      <SideBarWrapper>
        <SideBarMenu>
          {isAuth && (
            <>
              <SideBarLink onClick={() => handleGoTo(ROUTES_LINKS.HOME)}>
                <FaHome />
                Home
              </SideBarLink>
              <SideBarLink onClick={() => handleGoTo(ROUTES_LINKS.USER)}>
                <FaUser />
                User
              </SideBarLink>
              <SideBarLink onClick={() => handleGoTo(ROUTES_LINKS.USER)}>
                <FaSignOutAlt />
                Logout
              </SideBarLink>
            </>
          )}
          {!isAuth && (
            <>
              <SideBarLink onClick={() => handleGoTo(ROUTES_LINKS.USER)}>
                <FaSignInAlt />
                Login
              </SideBarLink>
              <SideBarLink onClick={() => handleGoTo(ROUTES_LINKS.USER)}>
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
