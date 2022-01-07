import { Text } from '../styles/Main.styles'
import { SkillSection, SkillHeader, Skill } from '../styles/Skills.styles'
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCanva,
  SiCplusplus,
  SiFigma,
  SiMaterialUi,
  SiNextDotJs,
  SiStyledComponents,
} from 'react-icons/si'

export const Skills = () => {
  return (
    <>
      <Text>
        <h1>My Skills</h1>
        <SkillHeader>Programming Languages</SkillHeader>
        <SkillSection>
          <Skill>
            HTML5 <FaHtml5 size={80} />{' '}
          </Skill>
          <Skill>
            CSS3
            <FaCss3 size={80} />
          </Skill>
          <Skill>
            JavaScript
            <FaJs size={80} />
          </Skill>
          <Skill>
            C++
            <SiCplusplus size={80} />
          </Skill>
          <Skill>
            Python
            <FaPython size={80} />
          </Skill>
          <Skill>
            SASS
            <FaSass size={80} />
          </Skill>
        </SkillSection>
        <SkillHeader>Frameworks and Libraries</SkillHeader>
        <SkillSection>
          <Skill>
            Nodejs
            <FaNodeJs size={80} />
          </Skill>
          <Skill>
            Next.js
            <SiNextDotJs size={80} />
          </Skill>
          <Skill>
            Styled Components
            <SiStyledComponents size={80} />
          </Skill>
          <Skill>
            React.js
            <FaReact size={80} />
          </Skill>
          <Skill>
            Bootstrap
            <FaBootstrap size={80} />
          </Skill>
          <Skill>
            Material UI
            <SiMaterialUi size={80} />
          </Skill>
        </SkillSection>
        <SkillHeader>Miscallenous Skills</SkillHeader>
        <SkillSection>
          <Skill>
            GitHub
            <FaGithub size={80} />
          </Skill>
          <Skill>
            Figma
            <SiFigma size={80} />
          </Skill>
          <Skill>
            Canva
            <SiCanva size={80} />
          </Skill>
          <Skill>
            Adobe Illustrator
            <SiAdobeillustrator size={80} />
          </Skill>
          <Skill>
            Adobe Photoshop
            <SiAdobephotoshop size={80} />
          </Skill>
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
