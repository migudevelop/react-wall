import { memo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InfiniteScroll from 'components/InfiniteScroll'
import PostCard from 'components/PostCard'

import { getPosts, toogleLoading } from 'redux/actions/appActions'

const PostsContainer = ({
  getPosts,
  posts,
  hasMore,
  nextPage,
  isLoading,
  toogleLoading,
}) => {
  const handleGetPosts = () => {
    toogleLoading()
    getPosts({ page: nextPage }).finally(() => toogleLoading())
  }

  return (
    <>
      <InfiniteScroll
        isLoading={isLoading}
        loadOnMount={true}
        hasMoreData={hasMore}
        fetchMoreData={handleGetPosts}
      >
        {posts.map((data, i) => {
          return <PostCard key={i} postData={data} />
        })}
      </InfiniteScroll>
    </>
  )
}

PostsContainer.propTypes = {
  getPosts: PropTypes.func.isRequired,
  toogleLoading: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  hasMore: PropTypes.bool.isRequired,
  nextPage: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  posts: state.app.postsData.posts,
  hasMore: state.app.postsData.hasMore,
  nextPage: state.app.postsData.nextPage,
  isLoading: state.app.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: (page) => dispatch(getPosts(page)),
  toogleLoading: () => dispatch(toogleLoading()),
})

const PostsContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer)
export default memo(PostsContainerConnected)
