import { Section, Heading, Paragraph, Page } from '../styles/Main.styles'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const About = () => {
  const [quote, setQuote] = useState('')

  const fetchQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random')
    setQuote(response.data.content)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <>
      <Page>
        <Section>
          <Heading>About Me</Heading>
          <Paragraph>
            I am currently a final year undergraduate student studying in BITS
            Pilani Goa Campus. <br />
            I am a front end web developer with a keen awareness about the web
            development as well as UI/UX desgning.
            <br />I possess different passions and interests, including watching
            football, learning languages, writing poetry, pushing my body to the
            limits by working out and learning more about psychology.
          </Paragraph>
          <Paragraph>{quote}</Paragraph>
          <Paragraph></Paragraph>
        </Section>
      </Page>
    </>
  )
}
