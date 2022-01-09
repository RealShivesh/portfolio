import styled from 'styled-components'

const SkillSection = styled.article`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
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
  width: 6em;
  text-align: center;
  padding: 1.25em;
  margin: 0 1.25em;
  user-select: none;
  cursor: pointer;
  border-radius: 1em;

  & img {
    width: 5rem;
    aspect-ratio: 1/1;
    filter: contrast(100%) brightness(0%);
  }
  &:hover {
    background: #987678;
    color: ${(props) => props.logoColor || '#012345'};
    & img {
      filter: none;
    }
  }
`

export { Skill, SkillHeader, SkillSection }
