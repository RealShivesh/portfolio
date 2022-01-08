import { DemoLink, Heading, Page, Project } from '../styles/Main.styles'
import { Description, Projects as List } from '../styles/Projects.styles'

export const Projects = () => {
  return (
    <>
      <Page>
        <Heading>Projects</Heading>
        <List>
          <Project>
            <h2>Country database using JavaScript</h2>
            <div>
              <DemoLink
                href="http://realshivesh.github.io/countries"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </DemoLink>
              <Description>
                This is a country section which contains various information
                about different countries, their capital, language, etc. I will
                be upgrading this project to react as well, but for now, let's
                stick to vanilla.
              </Description>
            </div>
          </Project>
          <Project>
            <h2>Weather App using React and Styled Components</h2>
            <div>
              <DemoLink
                href="http://realshivesh.github.io/weather-pwa"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </DemoLink>
              <Description>
                This is a weather app which has been created using React and
                Styled components.
              </Description>
            </div>
          </Project>
        </List>
      </Page>
    </>
  )
}
