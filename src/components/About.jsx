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

export const About = () => {
  return (
    <>
      <Section>
        <Heading>About Me</Heading>
        <Paragraph>
          Shivesh is currently a final year undergraduate student studying in
          BITS Pilani Goa Campus. I am a front end web developer with a keen
          awareness about the web development as well as UI/UX desgning. I
          possess different passions and interests, including watching football,
          learning languages, writing poetry, pushing my body to the limits by
          working out and learning more about psychology.
        </Paragraph>
        <Paragraph>
          Quote of the day: "No matter how things go, never ever trust someone
          who won't trust you."
        </Paragraph>
      </Section>
    </>
  )
}
