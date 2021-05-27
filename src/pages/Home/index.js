import { memo } from 'react'

import Layout from 'components/Layout'
import { SectionStyled } from './styles'
import PostCard from 'components/PostCard'

const Home = () => {
  return (
    <Layout>
      <SectionStyled>
        <PostCard />
      </SectionStyled>
    </Layout>
  )
}

export default memo(Home)
