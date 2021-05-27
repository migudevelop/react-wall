import { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getPosts } from 'redux/actions/appActions'
import {
  Wrapper,
  TextStyled,
  TextContainer,
  AvatarStyled,
  HeaderCardWrapper,
  ActionIconsWrapper,
  LikeStyled,
  CommentStyled,
} from './styles'

const PostCard = ({ getPosts, posts }) => {
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      {posts.map(({ owner, text }, i) => (
        <Wrapper key={i}>
          <HeaderCardWrapper>
            <ActionIconsWrapper>
              <LikeStyled />
              <CommentStyled />
            </ActionIconsWrapper>
          </HeaderCardWrapper>
          <TextContainer>
            <AvatarStyled src={owner?.picture} size="md" />
            <TextStyled>{text}</TextStyled>
          </TextContainer>
        </Wrapper>
      ))}
    </>
  )
}

PostCard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  posts: state.app.postsData.posts,
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: (page) => dispatch(getPosts(page)),
})

const PostCardConnected = connect(mapStateToProps, mapDispatchToProps)(PostCard)
export default memo(PostCardConnected)
