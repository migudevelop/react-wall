import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { MEDIAQUERIES } from 'styles'

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.navBarBgColor};
  padding: 10px 0;
  z-index: 1;
  backdrop-filter: blur(3px);
`

export const NavGroup = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
`

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.navBarTextColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: ${({ theme }) => theme.navBarActiveTextColor};
  }
  svg {
    padding: 0 0.5rem;
  }
`

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.navBarTextColor};
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  ${MEDIAQUERIES.tablet} {
    display: none;
  }
`

export const NavMenu = styled.div`
  display: none;
  ${MEDIAQUERIES.tablet} {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.navBarTextColor};
    justify-content: center;
  }
`

export const NavRightMenu = styled(NavMenu)`
  ${MEDIAQUERIES.tablet} {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.navBarTextColor};
    justify-content: flex-end;
  }
`
