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
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const NavLink = styled.div`
  padding: 20px;
  & a {
    color: yellow;
    text-decoration: none;
  }
  &:hover {
    background: #33333333;
  }
  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
    text-align: center;
  }
`

const BrandLink = styled.div`
  padding: 20px;
  & a {
    color: yellow;
    text-decoration: none;
  }
  &:hover {
    background: #33333333;
  }
  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
`

const LanguageSelector = styled.select`
  width: 100%;
  background: #333;
  color: #ccc;
`

export const Navigation = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  return (
    <>
      <NavBar>
        <Brand>
          <BrandLink>
            {' '}
            <a href="#home">RealShivesh</a>
          </BrandLink>
          <MenuButton>
            <FaBars size={40} />{' '}
          </MenuButton>
        </Brand>
        <MenuBar>
          <NavLink>
            {' '}
            <a href="#about"> About Me </a>
          </NavLink>
          <NavLink>
            {' '}
            <a href="#projects"> Projects </a>
          </NavLink>
          <NavLink>
            {' '}
            <a href="#skills"> Skills </a>
          </NavLink>
          <NavLink>
            {' '}
            <a href="#blogs"> Blogs </a>
          </NavLink>
          <NavLink>
            {' '}
            <a href="#projects"> Projects</a>{' '}
          </NavLink>
          <NavLink>
            {' '}
            <a href="#contactme"> Contact Me </a>
          </NavLink>
          <LanguageSelector name="Select Language" id="language">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="es">Español</option>
          </LanguageSelector>
        </MenuBar>{' '}
      </NavBar>
    </>
  )
}
