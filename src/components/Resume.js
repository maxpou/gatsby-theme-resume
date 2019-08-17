import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Profile from "../components/Profile"
import Skills from "../components/Skills"
import Languages from "../components/Languages"
import Interests from "../components/Interests"

const Layout = styled.div`
  display: flex;
`

const LeftColumn = styled.aside`
  order: 1;
  width: 30%;

  & > div {
    padding-right: 10px;
  }
`

const Main = styled.main`
  order: 2;
  width: 70%;
`

const Resume = resume => (
  <>
    <Header basics={resume.basics} />
    <Layout>
      <LeftColumn>
        <Profile {...resume.basics} />
        <Skills skills={resume.skills} />
        <Languages languages={resume.languages} />
        <Interests hobbies={resume.hobbies} />
      </LeftColumn>
      <Main>
        <Projects projects={resume.projects} />
        <Experience experiences={resume.experiences} />
        <Education education={resume.education} />
      </Main>
    </Layout>
  </>
)

export default Resume
