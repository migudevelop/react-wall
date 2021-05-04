import styled from 'styled-components'

export const SectionStyled = styled.section`
  font-family: Poppins;
  margin: 0;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
`
