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
`

const MenuButton = styled.button`
  width: 10vw;
  min-width: 100px;
  justify-content: flex-end;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const NavMenuButton = styled.a`
  color: yellow;
  text-decoration: none;
  margin: 20px;
`

export const Navigation = () => {
  return (
    <>
      <NavBar>
        <Brand>
          <NavMenuButton href="/">RealShivesh</NavMenuButton>
        </Brand>
        <MenuBar>
          <NavMenuButton href="#about"> About Me </NavMenuButton>
          <NavMenuButton href="#projects"> Projects </NavMenuButton>
          <NavMenuButton href="#skills"> Skills </NavMenuButton>
          <NavMenuButton href="#"> Blogs </NavMenuButton>
          <NavMenuButton href="#projects"> Projects </NavMenuButton>
          <NavMenuButton href="#contactme"> Contact Me </NavMenuButton>
          <select name="Select Language" id="language">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="es">Español</option>
          </select>
        </MenuBar>
        {/* <MenuButton>Menu</MenuButton> */}
      </NavBar>
    </>
  )
}
