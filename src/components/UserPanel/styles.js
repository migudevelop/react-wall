import styled from 'styled-components'
import { MEDIAQUERIES } from 'styles'
import Avatar from 'components/Avatar'

export const AvatarStyled = styled(Avatar)``

export const Wrapper = styled.div`
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
    width: 10vw;
  }
`
