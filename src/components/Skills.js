import React from "react"
import styled from "styled-components"
import { SectionCategory, SectionTitle } from "./Common"

const Category = styled.p`
  font-weight: bold;
  &:not(:first-child) {
    padding-top: 7px;
  }
`

const Content = styled.p`
  padding-left: 10px;
`

const Skill = skill => {
  return (
    <>
      <Category>{skill.category}</Category>
      {skill.content.map((content, i) => (
        <Content key={i}>{content}</Content>
      ))}
    </>
  )
}

const Skills = props => {
  return (
    <SectionCategory>
      <SectionTitle>Skills</SectionTitle>
      <div>
        {props.skills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </div>
    </SectionCategory>
  )
}

export default Skills
