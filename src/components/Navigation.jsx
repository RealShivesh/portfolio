import styled from 'styled-components'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const NavBar = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    0deg,
    rgba(239, 35, 60, 1) 0%,
    rgba(43, 45, 66, 1) 100%
  );
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Brand = styled.div`
  display: flex;
  font-size: 2rem;
  color: white;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

const MenuBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    display: ${({ toggleMenu }) => (toggleMenu ? 'flex' : 'none')};
  }
`

const MenuButton = styled.div`
  display: flex;
  width: 2.5em;
  height: 2.5em;
  margin: 0.625em 1.25em;
  color: #aaaa33;
  text-decoration: none;
  justify-content: flex-end;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const NavLink = styled.a`
  padding: 1em;
  width: 6em;
  color: yellow;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;

  &:hover {
    background: #33333333;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
    text-align: center;
  }
`

const BrandLink = styled.a`
  padding: 20px;
  color: yellow;
  text-decoration: none;

  &:hover {
    background: #33333333;
  }
  @media only screen and (max-width: 768px) {
    align-items: flex-start;
  }
`

const LanguageSelector = styled.select`
  width: 8em;
  background: #333;
  color: #ccc;
  padding: 1em;
  text-align: center;
`

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
