import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
  NavBar,
  Brand,
  MenuButton,
  BrandLink,
  MenuBar,
  NavLink,
  LanguageSelector,
} from '../styles/Navigation.styles'
import { ToggleSwitch } from './ToggleSwitch'

export const Navigation = ({ theme, setTheme, themeToggler }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <NavBar theme={theme}>
        <Brand>
          <BrandLink href="#home">RealShivesh</BrandLink>
          <ToggleSwitch
            theme={theme}
            setTheme={setTheme}
            themeToggler={themeToggler}
            toggleMenu={toggleMenu}
          />
          <MenuButton
            onClick={() => {
              setToggleMenu(!toggleMenu)
            }}
          >
            <FaBars size={40} />
          </MenuButton>
        </Brand>

        <MenuBar toggleMenu={toggleMenu}>
          <NavLink
            href="#about"
            onClick={() => {
              setToggleMenu(!toggleMenu)
            }}
          >
            {' '}
            About
          </NavLink>
          <NavLink
            href="#projects"
            onClick={() => {
              setToggleMenu(!toggleMenu)
            }}
          >
            {' '}
            Projects
          </NavLink>
          <NavLink
            href="#skills"
            onClick={() => {
              setToggleMenu(!toggleMenu)
            }}
          >
            {' '}
            Skills
          </NavLink>
          <NavLink
            href="#blogs"
            onClick={() => {
              setToggleMenu(!toggleMenu)
            }}
          >
            {' '}
            Blogs
          </NavLink>
          <NavLink
            href="#projects"
            onClick={() => {
              setToggleMenu(!toggleMenu)
            }}
          >
            Projects
          </NavLink>
          <NavLink
            href="#contactme"
            onClick={() => {
              setToggleMenu(!toggleMenu)
            }}
          >
            {' '}
            Contact
          </NavLink>
          {/* <LanguageSelector name="Select Language" id="language">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="es">Español</option>
          </LanguageSelector> */}
        </MenuBar>
      </NavBar>
    </>
  )
}
