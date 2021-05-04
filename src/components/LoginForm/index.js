import FormInput from 'components/FormInput'
import { memo } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import { Wrapper, Title, ButtonStyled } from './styles'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = ({ email, password }) => {
    // userLogin({ email, password }).then(() => history.push('/users'))
    console.log('aaa')
  }

  const { email: emailError, password: passwordError } = errors

  return (
    <Wrapper>
      <Title>Login with your email</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          autoFocus
          name="email"
          type="email"
          label="E-Mail"
          placeholder="Enter your email..."
          register={register}
          validation={{
            required: true,
            pattern: {
              value: /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}/,
            },
          }}
          error={emailError}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password..."
          register={register}
          validation={{ required: true, minLength: 8 }}
          error={passwordError}
        />
        <ButtonStyled stretch>Login</ButtonStyled>
      </form>
    </Wrapper>
  )
}

LoginForm.propTypes = {
  // userLogin: PropTypes.func.isRequired,
  // isSubmitting: PropTypes.bool.isRequired,
  // loginError: PropTypes.string,
  // clearError: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  isSubmitting: state.session.loading,
  loginError: state.session.error,
})

const mapDispatchToProps = (dispatch) => ({
  // userLogin: (user) => dispatch(userLogin(user)),
  // clearError: (user) => dispatch(clearError(user)),
})

const LoginFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
export default memo(LoginFormConnected)
