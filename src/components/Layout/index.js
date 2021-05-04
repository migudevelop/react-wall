import PropTypes from 'prop-types'
import NavBar from 'components/NavBar'
import SideBar from 'components/SideBar'
import { SectionStyled } from './styles'

const Layout = ({ children }) => (
  <SectionStyled>
    <SideBar />
    <NavBar />
    {children}
  </SectionStyled>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
