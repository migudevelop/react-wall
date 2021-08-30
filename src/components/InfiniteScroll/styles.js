import styled from 'styled-components'

export const InfiniteScrollStyled = styled.div`
  overflow-y: auto;
  height: 90vh;
  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.themeScrollbarBg};
    border-radius: 10px;
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.themeScrollbarBg};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.themeScrollbarThumb};
    border-radius: 10px;
  }
`
