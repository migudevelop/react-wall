import PropTypes from 'prop-types'
import {
  ActionsWrapper,
  ActionButtonStyled,
  EditStyled,
  CancelStyled,
} from './styles'

const ActionButtons = ({ editing, onEdit }) => (
  <ActionsWrapper>
    {onEdit && (
      <ActionButtonStyled onClick={onEdit}>
        {editing ? <CancelStyled /> : <EditStyled />}
      </ActionButtonStyled>
    )}
  </ActionsWrapper>
)

ActionButtons.propTypes = {
  onEdit: PropTypes.func,
  editing: PropTypes.bool,
}

ActionButtons.defaultProps = {
  onEdit: null,
  editing: false,
}

export default ActionButtons
