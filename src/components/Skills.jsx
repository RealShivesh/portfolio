import styled from 'styled-components'

const Text = styled.section`
    font-size: 1.2rem;
    background: #ef233c;
    margin: 0;
`

const SkillSection = styled.article`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const SkillHeader = styled.h2`
    font-size: 1.55rem;
    margin-left: 5vw;
    margin-top: 0;
`

const Skill = styled.div`
    padding: 20px;
    user-select: none;
    cursor: pointer;
    &:hover {
        background: #8d99ae;
        color: #d90429;
    }
`

export const Skills = () => {
    return (
        <>
            <Text>
                <SkillHeader>Frontend Skills</SkillHeader>
                <SkillSection>
                    <Skill>React.js</Skill>
                    <Skill>HTML5</Skill>
                    <Skill>CSS3</Skill>
                    <Skill>Next.js</Skill>
                    <Skill>JavaScript</Skill>
                    <Skill>SASS</Skill>
                    <Skill>Styled Components</Skill>
                </SkillSection>
                <SkillHeader>Backend skills</SkillHeader>
                <SkillSection>
                    <Skill>Nodejs</Skill>
                </SkillSection>
                <SkillHeader>Designing skills</SkillHeader>
                <SkillSection>
                    <Skill>Figma</Skill>
                    <Skill>Canva</Skill>
                    <Skill>Adobe Illustrator</Skill>
                    <Skill>Adobe Photoshop or GIMP</Skill>
                </SkillSection>
                <SkillHeader>Foreign language skills</SkillHeader>
                <SkillSection>
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
