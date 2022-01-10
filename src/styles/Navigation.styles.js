import styled from 'styled-components'

const NavBar = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  border: 0;
  z-index: 12;
  justify-content: space-between;
  overflow-x: hidden;
  background: ${(props) =>
    props.theme === 'dark'
      ? `linear-gradient(0deg, #161f6d 0%, #00abe1 100%)`
      : `linear-gradient(0deg, #00abe1 0%, #161f6d 100%)`};
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`

const Brand = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  color: white;
  justify-content: space-between;
  @media only screen and (max-width: 992px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

const MenuBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    max-height: ${({ toggleMenu }) => (toggleMenu ? '50vh' : '0')};
    opacity: ${({ toggleMenu }) => (toggleMenu ? '1' : '0')};
    transition: max-height 0.25s ease-in;
    z-index: -1;
  }
`

const MenuButton = styled.div`
  display: flex;
  margin: 0.5em 0.5em;
  color: yellow;
  text-decoration: none;
  justify-content: flex-end;
  cursor: pointer;

  @media only screen and (min-width: 992px) {
    display: none;
  }
`

const NavLink = styled.a`
  padding: 0.25em;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 5em;
  font-size: 1.2rem;
  color: yellow;
  text-decoration: none;
  &:hover {
    background: #33333333;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
    text-align: center;
    padding: 0.5em;
  }
`

const BrandLink = styled.a`
  padding: 0.625em;
  color: yellow;
  text-decoration: none;

  &:hover {
    background: #33333333;
  }
  @media only screen and (max-width: 992px) {
    align-items: flex-start;
  }
`

const LanguageSelector = styled.select`
  font-size: 1.2rem;
  width: 6em;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.color};
  padding: 0.2em;
  text-align: center;
  & option {
    background: ${(props) => props.theme.body};
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
