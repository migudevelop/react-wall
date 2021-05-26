import { memo } from 'react'

import Layout from 'components/Layout'
import { SectionStyled } from './styles'
import PostsPanel from 'components/PostsPanel'

const Home = () => {
  return (
    <Layout>
      <SectionStyled>
        <PostsPanel />
      </SectionStyled>
    </Layout>
  )
}

export default memo(Home)
