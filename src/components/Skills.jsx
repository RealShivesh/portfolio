import { Text } from '../styles/Main.styles'
import { SkillSection, SkillHeader, Skill } from '../styles/Skills.styles'

export const Skills = () => {
  return (
    <>
      <Text>
        <h1>My Skills</h1>
        <SkillHeader>Programming Languages</SkillHeader>
        <SkillSection>
          <Skill>HTML5</Skill>
          <Skill>CSS3</Skill>
          <Skill>JavaScript</Skill>
          <Skill>C++</Skill>
          <Skill>Python</Skill>
          <Skill>SASS</Skill>
        </SkillSection>
        <SkillHeader>Frameworks and Libraries</SkillHeader>
        <SkillSection>
          <Skill>Nodejs</Skill>
          <Skill>Next.js</Skill>
          <Skill>Styled Components</Skill>
          <Skill>React.js</Skill>
          <Skill>Bootstrap</Skill>
          <Skill>Material UI</Skill>
        </SkillSection>
        <SkillHeader>Miscallenous Skills</SkillHeader>
        <SkillSection>
          <Skill>GitHub</Skill>
          <Skill>Figma</Skill>
          <Skill>Canva</Skill>
          <Skill>Adobe Illustrator</Skill>
          <Skill>Adobe Photoshop</Skill>
        </SkillSection>
        <SkillHeader>Foreign language skills</SkillHeader>
        <SkillSection>
          <Skill>English</Skill>
          <Skill>Hindi</Skill>
          <Skill>Spanish</Skill>
          <Skill>German</Skill>
          <Skill>Russian</Skill>
          <Skill>Turkish</Skill>
          <Skill>Portuguese</Skill>
        </SkillSection>
      </Text>
    </>
  )
}
