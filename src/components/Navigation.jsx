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
    //display: none;
    position: relative;
    flex-direction: column;
    display: flex;
  }
`

const MenuButton = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin: 10px 20px;
  color: #aaaa33;
  text-decoration: none;
  justify-content: flex-end;
  cursor: pointer;
  &:hover {
    animation: mymove 1s;
    @keyframes mymove {
      50% {
        transform: rotate(90deg);
      }
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const NavLink = styled.a`
  padding: 20px;

  color: yellow;
  text-decoration: none;

  &:hover {
    background: #33333333;
  }
  @media only screen and (max-width: 768px) {
    align-items: flex-start;
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
  width: 100%;
  background: #333;
  color: #ccc;
  padding: 20px;
  text-align: center;
`

export const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const windowLength = window.innerWidth
  console.log(windowLength)
  return (
    <>
      <NavBar>
        <Brand>
          <BrandLink href="#home">RealShivesh</BrandLink>
          <MenuButton
            onClick={() => {
              setToggleMenu(!toggleMenu)
              console.log(toggleMenu)
            }}
          >
            <FaBars size={40} />{' '}
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
