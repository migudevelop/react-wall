import { memo } from 'react'

import Layout from 'components/Layout'
import { SectionStyled, UserPanelWrapper } from './styles'
import PostsContainer from 'components/PostsContainer'
import UserPanel from 'components/UserPanel'

const Home = () => {
  return (
    <Layout>
      <SectionStyled>
        <UserPanelWrapper>
          <UserPanel />
        </UserPanelWrapper>
        <PostsContainer />
      </SectionStyled>
    </Layout>
  )
}

export default memo(Home)
