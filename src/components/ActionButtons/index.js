import PropTypes from 'prop-types'
import {
  ActionsRigthWrapper,
  ActionsLeftWrapper,
  ActionButtonStyled,
  EditStyled,
  CancelStyled,
  SaveStyled,
} from './styles'

const ActionButtons = ({ editing, onEdit }) => (
  <>
    <ActionsLeftWrapper>
      {onEdit && editing && (
        <ActionButtonStyled onClick={onEdit}>
          {<SaveStyled />}
        </ActionButtonStyled>
      )}
    </ActionsLeftWrapper>
    <ActionsRigthWrapper>
      {onEdit && (
        <ActionButtonStyled onClick={onEdit}>
          {editing ? <CancelStyled /> : <EditStyled />}
        </ActionButtonStyled>
      )}
    </ActionsRigthWrapper>
  </>
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
