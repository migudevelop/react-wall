import { memo } from 'react'

import Layout from 'components/Layout'
import { SectionStyled } from './styles'
import PostCard from 'components/PostCard'
import InfiniteScroll from 'components/InfiniteScroll'

const Home = () => {
  return (
    <Layout>
      <SectionStyled>
        <InfiniteScroll>
          <PostCard />
        </InfiniteScroll>
      </SectionStyled>
    </Layout>
  )
}

export default memo(Home)
