import styled, { keyframes } from 'styled-components'
import { FaSpinner } from 'react-icons/fa'

const SMALL_BUTTON = 'small',
  MEDIUM_BUTTON = 'medium',
  LARGE_BUTTON = 'large'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled(FaSpinner)`
  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case LARGE_BUTTON:
        return '7rem;'
      case MEDIUM_BUTTON:
        return '3.5rem;'
      case SMALL_BUTTON:
        return '1.5rem;'
      default:
        return '7rem;'
    }
  }};
  color: ${({ theme, $secondary }) =>
    $secondary ? theme.secondaryTextColor : theme.primaryTextColor};
  animation: ${spin} 2s linear infinite;
`
