import { memo } from 'react'
import PropTypes from 'prop-types'

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

const PostCard = ({ postData }) => {
  const { owner, text } = postData
  return (
    <Wrapper>
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
  )
}

PostCard.propTypes = {
  postData: PropTypes.object.isRequired,
}

export default memo(PostCard)
