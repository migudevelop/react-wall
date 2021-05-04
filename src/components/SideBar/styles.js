import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { MEDIAQUERIES } from 'styles'

export const SideBarContainerStyled = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.navBarBgColor};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  ${MEDIAQUERIES.tablet} {
    display: none;
  }
`

export const CloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.navBarTextColor};
  font-size: 1.5rem;
`

export const IconStyled = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`

export const SideBarWrapper = styled.div`
  color: ${({ theme }) => theme.navBarTextColor};
`

export const SideBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  color: ${({ theme }) => theme.navBarTextColor};
`

export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${({ theme }) => theme.navBarTextColor};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.navBarActiveTextColor};
    transition: 0.2s ease-in-out;
  }
`
