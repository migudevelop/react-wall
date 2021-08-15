import { memo } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		background: ${({ theme }) => theme.backgroundColor};
		overflow: hidden;
	}
`

export default memo(GlobalStyle)
