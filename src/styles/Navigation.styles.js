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
    max-height: ${({ toggleMenu }) => (toggleMenu ? '50vh' : '0')};
    opacity: ${({ toggleMenu }) => (toggleMenu ? '1' : '0')};
    transition: max-height 0.25s ease-in;
    z-index: -1;
  }
`

const MenuButton = styled.div`
  display: flex;
  margin: 0.5em 1em;
  color: yellow;
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
  padding: 0.625em;
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
  font-size: 1rem;
  width: 6em;
  background: #cccccc00;
  color: yellow;
  padding: 0.2em;
  text-align: center;
  & option {
    background: #cccccc;
    width: 6em;
    padding: 0.2em;
  }
`

export {
  NavBar,
  Brand,
  MenuBar,
  MenuButton,
  NavLink,
  BrandLink,
  LanguageSelector,
}
