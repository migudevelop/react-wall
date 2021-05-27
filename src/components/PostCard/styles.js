import styled, { keyframes } from 'styled-components'
import { MEDIAQUERIES } from 'styles'
import Avatar from 'components/Avatar'
import { FaHeart, FaCommentAlt } from 'react-icons/fa'

export const TextContainer = styled.div`
  /* margin: 0 auto;
  padding: 30px;
  color: ${({ theme }) => theme.secundaryTextColor};
  background: ${({ theme }) => theme.backgorundContainers};
  width: 70vw;
  min-height: 350px;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 13px -7px black; */
`

export const TextStyled = styled.div`
  text-align: justify;
  font-size: 1em;
  font-weight: 400;
  transform: translateY(-50px);
  color: ${({ theme }) => theme.textColor};
`

export const LikeStyled = styled(FaHeart)`
  margin: 0 0.5em;
`

export const CommentStyled = styled(FaCommentAlt)`
  margin: 0 0.5em;
`

export const AvatarStyled = styled(Avatar)`
  transform: translateY(-70px);
`

export const ActionIconsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  opacity: 0;
`

export const HeaderCardWrapper = styled.div`
  display: flex;
  flex-flow: row;
`

const OpacityIconActions = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  margin: 1.5em auto;
  padding: 30px;
  color: ${({ theme }) => theme.secundaryTextColor};
  background: ${({ theme }) => theme.backgorundContainers};
  width: 70vw;
  min-height: 250px;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 13px -7px black;

  ${MEDIAQUERIES.tablet} {
    width: 40vw;
  }

  ${MEDIAQUERIES.desktop} {
    width: 20vw;
  }

  :hover {
    ${ActionIconsWrapper} {
      opacity: 1;
      animation: ${OpacityIconActions} 1s linear;
    }
  }
`
