import styled, { keyframes } from 'styled-components'
import { FaSpinner } from 'react-icons/fa'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled(FaSpinner)`
  font-size: 7rem;
  color: ${({ theme }) => theme.primaryTextColor};
  animation: ${spin} 2s linear infinite;
`
