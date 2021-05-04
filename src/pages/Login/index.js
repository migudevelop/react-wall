import Layout from 'components/Layout'
import NavBar from 'components/NavBar'
import SideBar from 'components/SideBar'
import { SectionStyled } from './styles'

const Login = () => {
  return (
    <Layout>
      <SideBar />
      <NavBar />
      <SectionStyled>
        <div>LoginPage</div>
      </SectionStyled>
    </Layout>
  )
}

export default Login
