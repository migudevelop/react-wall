import { memo } from 'react'
import Layout from 'components/Layout'
import { SectionStyled } from './styles'
import UserDetails from 'components/UserDetails'

const Users = () => {
  return (
    <Layout>
      <SectionStyled>
        <UserDetails />
      </SectionStyled>
    </Layout>
  )
}

export default memo(Users)
