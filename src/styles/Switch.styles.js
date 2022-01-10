import styled from 'styled-components'

const Switch = styled.label`
  width: 2em;
  min-width: 2em;
  height: 1em;
  border-radius: 0.4em;
  border: 0.08em solid black;
  margin: 0.6em 0;
  background: ${(props) => props.theme.body};
  & img {
    width: 0.8em;
    height: 0.8em;
    margin: 0 0.09em;
  }
  @media (max-width: 992px) {
    opacity: ${({ toggleMenu }) => (toggleMenu ? '1' : '0')};
  }
`

const Darkmoon = styled.img`
  visibility: ${(props) => (props.theme === 'light' ? '' : 'hidden')};
`
const Lightmoon = styled.img`
  visibility: ${(props) => (props.theme === 'dark' ? '' : 'hidden')};
`

export { Switch, Darkmoon, Lightmoon }
