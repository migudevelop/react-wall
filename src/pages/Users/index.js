import { memo } from 'react'
import Layout from 'components/Layout'
import { SectionStyled } from './styles'
const Users = () => {
  return (
    <Layout>
      <SectionStyled>User page</SectionStyled>
    </Layout>
  )
}

export default memo(Users)
