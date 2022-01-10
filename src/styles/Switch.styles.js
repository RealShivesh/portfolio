import styled from 'styled-components'

const Switch = styled.label`
  width: 2em;
  min-width: 2em;
  height: 1em;
  border-radius: 0.4em;
  margin: 0.6em 0;
  background: ${(props) => props.theme.body};
  & img {
    width: 0.8em;
    height: 0.8em;
    margin: 0 0.09em;
  }
`

const Darkmoon = styled.img`
  visibility: ${(props) => (props.theme === 'light' ? '' : 'hidden')};
`
const Lightmoon = styled.img`
  visibility: ${(props) => (props.theme === 'dark' ? '' : 'hidden')};
`

export { Switch, Darkmoon, Lightmoon }
