import React from "react"
import styled from "styled-components"
import { SectionCategory, SectionTitle, Link } from "./Common"
import cleanupUrl from "../lib/cleanupUrl"
import { colors } from "../tokens"

const Category = styled.p`
  font-weight: bold;
  &:not(:first-child) {
    padding-top: 7px;
  }
`

const Description = styled.span`
  font-weight: normal;
  color: ${colors.textLight};
  font-size: 0.8em;
`

const Highlights = styled.ul`
  padding-left: 18px;
`

const Highlight = styled.li`
  margin-top: 2px;
  margin-bottom: 3px;
`

const ProjectUrl = styled(Link)`
  float: right;
  color: ${colors.textLight};
  font-weight: normal;
`

const Project = project => {
  return (
    <>
      <Category>
        {project.name}
        {project.description && (
          <Description> | {project.description}</Description>
        )}
        <ProjectUrl>{cleanupUrl(project.url)}</ProjectUrl>
      </Category>
      <Highlights>
        {project.highlights.map((highlight, i) => (
          <Highlight key={i}>{highlight}</Highlight>
        ))}
      </Highlights>
    </>
  )
}

const Projects = props => {
  return (
    <SectionCategory>
      <SectionTitle>Selected Projects</SectionTitle>
      <div>
        {props.projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </SectionCategory>
  )
}

export default Projects
