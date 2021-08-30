import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Avatar from 'components/Avatar'
import {
  Wrapper,
  UserDescriptionWrapper,
  TextDescriptionStyled,
  LabelInfoStyled,
} from './styles'
import { getCompleteName, formatDate } from 'commons/utils'

const UserPanel = ({ user }) => {
  const { picture = '', name, dateOfBirth = '', email, phone } = user
  return (
    <Wrapper>
      <Avatar src={picture} size="md" />
      <UserDescriptionWrapper>
        <LabelInfoStyled>Name:</LabelInfoStyled>
        <TextDescriptionStyled>{getCompleteName(name)}</TextDescriptionStyled>
        <LabelInfoStyled>Birthday:</LabelInfoStyled>
        <TextDescriptionStyled>{formatDate(dateOfBirth)}</TextDescriptionStyled>
        <LabelInfoStyled>Phone:</LabelInfoStyled>
        <TextDescriptionStyled>{phone}</TextDescriptionStyled>
        <LabelInfoStyled>E-mail:</LabelInfoStyled>
        <TextDescriptionStyled>{email}</TextDescriptionStyled>
      </UserDescriptionWrapper>
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
