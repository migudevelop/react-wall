import Layout from 'components/Layout'
import LoginForm from 'components/LoginForm'
import { SectionStyled } from './styles'

const Login = () => {
  return (
    <Layout>
      <SectionStyled>
        <LoginForm />
      </SectionStyled>
    </Layout>
  )
}

export default Login
