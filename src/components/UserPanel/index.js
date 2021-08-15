import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const UserPanel = ({ user }) => {
  return (
    <Wrapper>
      <div>UserPanel</div>
    </Wrapper>
  )
}

UserPanel.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.session.user,
})

const UserPanelConnected = connect(mapStateToProps)(UserPanel)
export default memo(UserPanelConnected)
