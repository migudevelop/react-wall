import styled from 'styled-components'
import Button from 'components/Button'
import { FaRegEdit, FaTimes } from 'react-icons/fa'

export const ActionsWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
`

export const ActionButtonStyled = styled(Button)`
  min-width: 28px;
  margin: 0 3px;
  background: transparent;
`

export const EditStyled = styled(FaRegEdit)`
  min-width: 28px;
  min-height: 28px;
  color: #58b8ff;
  margin: 0 0.5em;
`

export const CancelStyled = styled(FaTimes)`
  min-width: 28px;
  min-height: 28px;
  color: #ff5656;
  margin: 0 0.5em;
`
