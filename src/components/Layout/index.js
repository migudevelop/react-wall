import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from 'components/NavBar'
import SideBar from 'components/SideBar'
import FullPageLoader from 'components/FullPageLoader'
import { SectionStyled } from './styles'

const Layout = ({ children, isLoading }) => (
  <SectionStyled>
    {isLoading && <FullPageLoader />}
    <SideBar />
    <NavBar />
    {children}
  </SectionStyled>
)

Layout.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading,
})

const LayoutConnected = connect(mapStateToProps)(Layout)
export default LayoutConnected
