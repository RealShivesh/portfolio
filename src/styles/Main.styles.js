import styled from 'styled-components'

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ef233c;
`

const Heading = styled.h1`
  color: yellow;
  font-size: 2.25rem;
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
    margin: 20px;
  }
`

export { Section, Heading, Paragraph, Page, Text, FooterRow, Social }
