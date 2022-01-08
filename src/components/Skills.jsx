import { Heading, Text } from '../styles/Main.styles'
import { SkillSection, SkillHeader, Skill } from '../styles/Skills.styles'
import {
  FaBootstrap,
  FaCss3,
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
  SiGithub,
  SiMaterialUi,
  SiNextDotJs,
  SiStyledComponents,
} from 'react-icons/si'

import NextJs from '../assets/images/Nextjs-logo.svg'

export const Skills = () => {
  return (
    <>
      <Text>
        <Heading>My Skills</Heading>
        <SkillHeader>Programming Languages</SkillHeader>
        <SkillSection>
          <Skill logoColor="#e34c26">
            <FaHtml5 size={80} />
            HTML5
          </Skill>
          <Skill logoColor="#2965f1">
            <FaCss3 size={80} />
            CSS3
          </Skill>
          <Skill logoColor="#F0DB4F">
            <FaJs size={80} />
            JavaScript
          </Skill>
          <Skill logoColor="#044F88">
            <SiCplusplus size={80} />
            C++
          </Skill>
          <Skill>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
              alt="python logo"
            />
            Python
          </Skill>
          <Skill logoColor="#cd6799">
            <FaSass size={80} />
            SASS
          </Skill>
        </SkillSection>
        <SkillHeader>Frameworks and Libraries</SkillHeader>
        <SkillSection>
          <Skill>
            <FaNodeJs size={80} />
            Nodejs
          </Skill>
          <Skill>
            <img src={NextJs} alt="" />
            Next.js
          </Skill>
          <Skill>
            <SiStyledComponents size={80} />
            Styled Components
          </Skill>
          <Skill logoColor="#61DBFB">
            <FaReact size={80} />
            React.js
          </Skill>
          <Skill>
            <FaBootstrap size={80} />
            Bootstrap
          </Skill>
          <Skill>
            <SiMaterialUi size={80} />
            Material UI
          </Skill>
        </SkillSection>
        <SkillHeader>Miscallenous Skills</SkillHeader>
        <SkillSection>
          <Skill>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              alt="figma logo"
            />
            Figma
          </Skill>
          <Skill>
            <SiGithub size={80} />
            GitHub
          </Skill>
          <Skill>
            <SiCanva size={80} />
            Canva
          </Skill>
          <Skill>
            <SiAdobeillustrator size={80} />
            Adobe Illustrator
          </Skill>
          <Skill>
            <SiAdobephotoshop size={80} />
            Adobe Photoshop
          </Skill>
        </SkillSection>
        <SkillHeader>Foreign language skills</SkillHeader>
        <SkillSection>
          <Skill>English - english</Skill>
          <Skill>Hindi - हिन्दी</Skill>
          <Skill>Spanish - español</Skill>
          <Skill>German - Deutsch</Skill>
          <Skill>Russian - русский</Skill>
          <Skill>Turkish - Türkçe</Skill>
          <Skill>Portuguese - Português</Skill>
        </SkillSection>
      </Text>
    </>
  )
}
