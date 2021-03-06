import BlackMoon from '../assets/images/new-moon-face.png'
import YellowMoon from '../assets/images/full-moon-face.png'
import { Darkmoon, Lightmoon, Switch } from '../styles/Switch.styles'

export const ToggleSwitch = ({ theme, themeToggler, toggleMenu }) => {
  return (
    <>
      <Switch onClick={themeToggler} toggleMenu={toggleMenu}>
        <Darkmoon theme={theme} src={BlackMoon} alt="" />
        <Lightmoon theme={theme} src={YellowMoon} alt="" />
      </Switch>
    </>
  )
}
