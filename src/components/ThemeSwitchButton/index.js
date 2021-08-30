import { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toogleTheme } from 'redux/actions/stylesActions'
import {
  InputStyled,
  ThemeSwitchButtonStyled,
  ThemeItemStyled,
  CircleItemStyled,
} from './styles'

const ThemeSwitchButton = ({ toogleTheme, themeState }) => {
  const [isChecked, setIsChecked] = useState(!(themeState === 'light'))
  const handleChange = (e) => {
    toogleTheme()
    setIsChecked(e.target.checked)
  }
  return (
    <ThemeSwitchButtonStyled isChecked={isChecked}>
      <InputStyled
        id="themeSwitch"
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
        readOnly={true}
      />
      <ThemeItemStyled htmlFor="themeSwitch">
        <CircleItemStyled isChecked={isChecked}>
          {isChecked ? '🌞' : '🌙'}
        </CircleItemStyled>
      </ThemeItemStyled>
    </ThemeSwitchButtonStyled>
  )
}

ThemeSwitchButton.propTypes = {
  themeState: PropTypes.string.isRequired,
  toogleTheme: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  themeState: state.styles.theme.name,
})

const mapDispatchToProps = (dispatch) => {
  return {
    toogleTheme: () => dispatch(toogleTheme()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitchButton)
