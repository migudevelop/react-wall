import { memo, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UserDataForm from 'components/UserDataForm'
import { Wrapper, AvatarStyled } from './styles'
import ActionButtons from 'components/ActionButtons'

const UserDetails = ({ user }) => {
  const [editing, setEditing] = useState(false)
  const { picture = '' } = user
  return (
    <Wrapper>
      <AvatarStyled hideShadow src={picture} size="lg" />
      <ActionButtons editing={editing} onEdit={() => setEditing(!editing)} />
      <UserDataForm editing={editing} />
    </Wrapper>
  )
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.session.user,
})

const UserDetailsConnected = connect(mapStateToProps)(UserDetails)
export default memo(UserDetailsConnected)
