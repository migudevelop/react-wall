import { memo } from 'react'

import Layout from 'components/Layout'
import { SectionStyled } from './styles'
import PostsContainer from 'components/PostsContainer'

const Home = () => {
  return (
    <Layout>
      <SectionStyled>
        <PostsContainer />
      </SectionStyled>
    </Layout>
  )
}

export default memo(Home)
