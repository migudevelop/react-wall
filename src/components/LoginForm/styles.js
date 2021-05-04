import styled from 'styled-components'
import Button from 'components/Button'
import { MEDIAQUERIES } from 'styles'

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 30px;
  color: ${({ theme }) => theme.secundaryTextColor};
  background: ${({ theme }) => theme.backgorundContainers};
  width: 70vw;
  min-height: 350px;

  ${MEDIAQUERIES.tablet} {
    width: 40vw;
  }

  ${MEDIAQUERIES.desktop} {
    width: 20vw;
  }
`

export const Title = styled.div`
  text-align: center;
  font-size: 1.4em;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textColor};
`

export const ButtonStyled = styled(Button)`
  margin-top: 25px;
`
