import { memo, useState } from 'react'
import PropTypes from 'prop-types'

import FormValidationError from 'components/FormValidationError'
import {
  FormGroup,
  LabelStyled,
  InputStyled,
  InputContainerStyled,
} from './styles'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const PASSWORD_TYPE = 'password'

const PasswordInput = ({
  label,
  name,
  placeholder,
  autoFocus,
  register,
  validation,
  error,
}) => {
  const [type, setType] = useState(PASSWORD_TYPE)
  const toggleShowPassword = () =>
    setType(type === PASSWORD_TYPE ? 'text' : PASSWORD_TYPE)
  return (
    <FormGroup>
      {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
      <InputContainerStyled>
        <InputStyled
          type={type}
          {...register(name, validation)}
          placeholder={placeholder}
          autoFocus={autoFocus}
        />
        {type === PASSWORD_TYPE ? (
          <FaEye onClick={toggleShowPassword} />
        ) : (
          <FaEyeSlash onClick={toggleShowPassword} />
        )}
      </InputContainerStyled>
      <FormValidationError name={name} error={error} />
    </FormGroup>
  )
}

PasswordInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  register: PropTypes.func.isRequired,
  validation: PropTypes.object,
  error: PropTypes.object,
}

PasswordInput.defaultProps = {
  label: '',
  placeholder: '',
  autoFocus: false,
  validation: {},
  error: {},
}

export default memo(PasswordInput)
