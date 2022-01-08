import styled from 'styled-components'

const SkillSection = styled.article`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const SkillHeader = styled.h2`
  font-size: 1.55rem;
  margin-left: 5vw;
  margin-top: 0;
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25em;
  user-select: none;
  cursor: pointer;
  border-radius: 1em;
  &:hover {
    background: #fff;
    color: ${(props) => props.logoColor || 'green'};
  }
`

export { Skill, SkillHeader, SkillSection }
