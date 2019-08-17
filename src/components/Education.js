import React from "react"
import styled from "styled-components"
import Timeline from "./Timeline"
import { SectionTitle } from "./Common"

const formatProps = props => {
  return props.map(prop => ({
    leftPartTitle: prop.period,
    leftPartContent: [prop.school, prop.location],
    rightPartTitle: prop.degree,
    rightPartContent: prop.detail ? prop.detail : [],
  }))
}

const EducationContainer = styled.div`
  & h3 {
    font-size: 1em;
  }

  & div div {
    padding-bottom: 10px;
  }
`

const Education = props => {
  const formatedData = formatProps(props.education)
  return (
    <EducationContainer>
      <SectionTitle>Education</SectionTitle>
      <Timeline data={formatedData} />
    </EducationContainer>
  )
}

export default Education
