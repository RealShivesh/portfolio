import { DemoLink, Heading, Page, Project } from '../styles/Main.styles'
import { Description, Projects as List } from '../styles/Projects.styles'
import { ProjectList } from '../data/ProjectList'

export const Projects = () => {
  return (
    <>
      <Page>
        <Heading>Projects</Heading>
        <List>
          {ProjectList.map((project) => (
            <Project key={project.id}>
              <h2>{project.name}</h2>
              <div>
                <DemoLink href={project.link} target="_blank" rel="noreferrer">
                  Live Demo
                </DemoLink>
                <Description>{project.description}</Description>
              </div>
            </Project>
          ))}
        </List>
      </Page>
    </>
  )
}
