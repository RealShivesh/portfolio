import styled from 'styled-components'

const Section = styled.section`
  height: 60vh;
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
  text-align: left;
  width: 40vw;
`

export const About = () => {
  return (
    <>
      <Section>
        <div>
          <Heading>Hey there!</Heading>
        </div>
        <div>
          <Paragraph>
            My name is Shivesh Sinha,I am a front-end React Developer who loves
            to make apps.
          </Paragraph>
        </div>
      </Section>
    </>
  )
}
