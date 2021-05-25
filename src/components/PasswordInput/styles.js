import styled from 'styled-components'

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelStyled = styled.label`
  margin: 20px 0 5px;
`

export const InputStyled = styled.input`
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  width: 100%;
  border: none;
  background: rgba(0, 0, 0, 0);
  outline: none;
`

export const InputContainerStyled = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.textColor};
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.secundaryTextColor};
  background: rgba(0, 0, 0, 0);
  outline: none;
  border-radius: 5px;
  svg {
    color: ${({ theme }) => theme.textColor};
    font-size: 16px;
    cursor: pointer;
  }
  :hover,
  :focus {
    border: 2px solid ${({ theme }) => theme.primaryColor};
  }
`
