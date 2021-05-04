import styled from 'styled-components'

export const ThemeSwitchButtonStyled = styled.div`
  position: relative;
  display: inline-block;
  width: 4em;
`

export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const ToggleItemStyled = styled.label`
  width: 4em;
  background: ${({ theme }) => theme.themeSwitchBg};
  height: 2em;
  display: inline-block;
  border-radius: 50px;
  margin: 40px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
  &:before {
    display: block;
    transition: all 0.2s ease;
    top: 0.25em;
    left: 0.25em;
    border-radius: 2em;
    border: 2px solid #88cf8f;
    transition: 0.3s ease;
  }
`

export const ThemeItemStyled = styled(ToggleItemStyled)`
  content: none;
`

export const CircleItemStyled = styled.span`
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  transition: 0.4s ease;
  top: 4.5px;
  text-align: center;
  background: ${({ theme }) => theme.themeSwitchCircleBg};
  ${({ isChecked, theme }) => CircleChecked(isChecked, theme)}
`

const CircleChecked = (isChecked) =>
  isChecked
    ? `left: 2.25em;
    transform: rotate(360deg);
    `
    : `left: 4.5px;`
