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
  overflow-y: auto;
  word-wrap: break-word;
  height: calc(75vh - 10rem);
  width: calc(90vw - 5rem);
  transform: translateY(-80px);

  ${MEDIAQUERIES.tablet} {
    width: calc(90vw - 20rem);
    height: auto;
  }

  ${MEDIAQUERIES.desktop} {
    width: calc(90vw - 50rem);
    height: calc(90vh - 10rem);
  }
`

export const CustomColumns = styled.div`
  ${MEDIAQUERIES.tablet} {
    display: grid;
    grid-template-columns: repeat(
      ${({ tabletNumCol = 1 }) => tabletNumCol},
      1fr
    );
    grid-column-gap: ${({ tabletColMargin = 1 }) => tabletColMargin}rem;
  }
  ${MEDIAQUERIES.desktop} {
    display: grid;
    grid-template-columns: repeat(
      ${({ desktopNumCol = 1 }) => desktopNumCol},
      1fr
    );
    grid-column-gap: ${({ desktopColMargin = 1 }) => desktopColMargin}rem;
  }
`

export const LongTwoColumn = styled.div`
  ${MEDIAQUERIES.tablet} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: ${({ tabletColMargin = 1 }) => tabletColMargin}rem;
  }
`
