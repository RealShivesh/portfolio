import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  color: yellow;
  font-size: 2.25rem;
  padding: 2em;
  margin: 0;
  text-align: center;
`

const Paragraph = styled.div`
  font-size: 1.5rem;
  text-align: justify;
  align-self: center;
  width: 80vw;
  margin: 1em 0;

  & img {
    width: 100%;
    max-width: 36em;
    text-align: center;
  }
`

const Page = styled.section`
  width: 100%;
  background: #ef233c;
  overflow-x: hidden;
  min-height: 100vh;
  height: 100%;
`

const Text = styled.section`
  font-size: 1.2rem;
  background: #ef233c;
  margin: 0;
`

const FooterRow = styled.footer`
  display: flex;
  flex: 1;
  padding: 0.6rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  background: #8d99ae;
  text-align: center;
`

const Project = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1em;
  & div {
    display: flex;
    flex-direction: row;
  }
`

const DemoLink = styled.a`
  padding: 0.75em;
  width: 4em;
  background: yellow;
  text-decoration: none;
  font-size: 1.2rem;
`

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
  & a {
    margin: 1.5em;
    text-decoration: none;
    background: #fff;
  }
`

export {
  Section,
  Heading,
  Paragraph,
  Page,
  Text,
  FooterRow,
  Social,
  Project,
  DemoLink,
}
