import React from "react"
import styled from "styled-components"
import { colors } from "../tokens"

const HeaderContainer = styled.header`
  vertical-align: middle;
  text-align: center;
  width: 100%;
  margin-bottom: 15px;
  padding: 8px;
  background-color: ${colors.primary};
`

const Name = styled.h1`
  padding-bottom: 5px;
`

const Description = styled.h2`
  font-size: 1.1em;
`

const Header = props => (
  <HeaderContainer>
    <Name>{props.basics.name}</Name>
    <Description>{props.basics.about}</Description>
  </HeaderContainer>
)

export default Header
