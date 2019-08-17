import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { colors } from "../tokens"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  color: ${colors.text};
  background-color: ${colors.background};
}
`

export const SectionTitle = styled.h2`
  display: inline-block;
  color: ${colors.text};
  margin-bottom: 5px;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    margin-top: -1px;
    background-color: ${colors.primary};
  }
`

export const SectionCategory = styled.div`
  margin-bottom: 20px;
  page-break-inside: avoid;
`

export const Link = styled.a`
  color: ${colors.text};
  /* border-bottom: 1px solid ${colors.primary}; */
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${colors.primary};
    color: ${colors.textLight};
  }
`
