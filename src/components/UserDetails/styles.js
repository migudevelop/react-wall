import styled from 'styled-components'
import { MEDIAQUERIES } from 'styles'
import Avatar from 'components/Avatar'

export const AvatarStyled = styled(Avatar)`
  transform: translateY(-80px);
  > img {
    background: ${({ theme }) => theme.backgorundContainers};
    border: 10px solid ${({ theme }) => theme.backgorundContainers};
  }
`

export const Wrapper = styled.div`
  word-wrap: break-word;
  padding: 30px;
  color: ${({ theme }) => theme.secundaryTextColor};
  background: ${({ theme }) => theme.backgorundContainers};
  border-radius: 0.5rem;
  box-shadow: 0px 10px 13px -7px black;
  height: calc(90vh - 10rem);
  width: calc(90vw - 5rem);
  transform: translateY(50px);

  ${MEDIAQUERIES.tablet} {
    width: calc(90vw - 20rem);
    height: auto;
  }

  ${MEDIAQUERIES.desktop} {
    width: calc(90vw - 50rem);
    height: calc(90vh - 10rem);
  }
`
