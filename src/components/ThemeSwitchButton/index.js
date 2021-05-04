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

const ThemeSwitchButton = ({ toogleTheme }) => {
  const [isChecked, setIsChecked] = useState(false)
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
  toogleTheme: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    toogleTheme: () => dispatch(toogleTheme()),
  }
}

export default connect(null, mapDispatchToProps)(ThemeSwitchButton)
