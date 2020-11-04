import React from "react"
import Timeline from "./Timeline"
import { SectionTitle } from "./Common"

const formatProps = (props) => {
  return props.map((prop) => ({
    leftPartTitle: prop.period,
    leftPartContent: [prop.company, prop.location],
    rightPartTitle: prop.position,
    rightPartContent: prop.activities,
  }))
}

const Experience = (props) => {
  const formatedData = formatProps(props.experiences)
  return (
    <section>
      <SectionTitle>Experience</SectionTitle>
      <Timeline data={formatedData} />
    </section>
  )
}

export default Experience
