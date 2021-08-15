import styled from 'styled-components'
import { MEDIAQUERIES } from 'styles'

export const SectionStyled = styled.section`
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  ${MEDIAQUERIES.tablet} {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  ${MEDIAQUERIES.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  color: ${({ theme }) => theme.textColor};
`

export const UserPanelWrapper = styled.div`
  display: none;
  ${MEDIAQUERIES.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`

export const GridWrapper = styled.div`
  color: ${({ theme }) => theme.textColor};
`
