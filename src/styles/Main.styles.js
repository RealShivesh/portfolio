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
`

const Page = styled.section`
  height: 100vh;
  background: #ef233c;
  @media (max-width: 768px) {
    min-height: 100vh;
    height: 100%;
  }
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

export { Section, Heading, Paragraph, Page, Text, FooterRow, Social }
