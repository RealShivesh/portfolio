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

export const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <NavBar>
        <Brand>
          <BrandLink href="#home">RealShivesh</BrandLink>
          <MenuButton
            onClick={() => {
              setToggleMenu(!toggleMenu)
            }}
          >
            <FaBars size={40} />
          </MenuButton>
        </Brand>
        <MenuBar toggleMenu={toggleMenu}>
          <NavLink href="#about"> About Me</NavLink>
          <NavLink href="#projects"> Projects</NavLink>
          <NavLink href="#skills"> Skills</NavLink>
          <NavLink href="#blogs"> Blogs</NavLink>
          <NavLink href="#projects"> Project </NavLink>
          <NavLink href="#contactme"> Contact Me</NavLink>
          <LanguageSelector name="Select Language" id="language">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="es">Español</option>
          </LanguageSelector>
        </MenuBar>
      </NavBar>
    </>
  )
}
