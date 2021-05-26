import { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getPosts } from 'redux/actions/appActions'
import { Wrapper, Title } from './styles'

const PostsPanel = ({ getPosts, postsData }) => {
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Wrapper>
      <Title>Login with your email</Title>
    </Wrapper>
  )
}

PostsPanel.propTypes = {
  getPosts: PropTypes.func.isRequired,
  postsData: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  postsData: state.app.postsData,
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: (page) => dispatch(getPosts(page)),
})

const PostsPanelConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPanel)
export default memo(PostsPanelConnected)
