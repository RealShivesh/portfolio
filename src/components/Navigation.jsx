import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
`

const Brand = styled.div`
  margin: 10px 0px;
  font-size: 2rem;
  color: white;
  justify-content: center;
`

const MenuBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  & a {
    margin: 20px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const MenuButton = styled.button`
  width: 10vw;
  min-width: 100px;
  justify-content: flex-end;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export const Navigation = () => {
  return (
    <>
      <NavBar>
        <Brand>
          <Link href="/">RealShivesh</Link>
        </Brand>
        <MenuBar>
          <Link href="About"> About Me </Link>
          <Link href="Projects"> Projects </Link>
          <Link href="Skills"> Skills </Link>
          <Link href="#"> Blogs </Link>
          <Link href="ContactMe"> Contact Me </Link>
          <select name="Select Language" id="language">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="es">Español</option>
          </select>
        </MenuBar>
        <MenuButton>Menu</MenuButton>
      </NavBar>
    </>
  )
}
