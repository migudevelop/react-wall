import styled from 'styled-components'
import { MEDIAQUERIES } from 'styles'
import Avatar from 'components/Avatar'

export const AvatarStyled = styled(Avatar)``

export const Wrapper = styled.div`
  word-wrap: break-word;

  ${MEDIAQUERIES.tablet} {
    display: none;
    padding: 30px;
    color: ${({ theme }) => theme.secundaryTextColor};
    background: ${({ theme }) => theme.backgorundContainers};
    width: 20vw;
    min-height: 250px;
    border-radius: 0.5rem;
    box-shadow: 0px 10px 13px -7px black;
    display: block;
    width: 20vw;
  }

  ${MEDIAQUERIES.desktop} {
    width: 15vw;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`
export const UserDescriptionWrapper = styled.div`
  margin-top: 1rem;
  ${MEDIAQUERIES.desktop} {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }
`

export const TextDescriptionStyled = styled.h4`
  margin: 0.25rem 0;
  ${MEDIAQUERIES.desktop} {
  }
`
export const LabelInfoStyled = styled.h5`
  margin: 0.25rem 0;
  ${MEDIAQUERIES.desktop} {
  }
`
