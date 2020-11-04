import React from "react"
import styled from "styled-components"

import { colors } from "../tokens"

const TimelineContainer = styled.div``

const TimelineItem = styled.div`
  display: table;
  table-layout: fixed;
  position: relative;
  width: 100%;
  padding-bottom: 15px;
  page-break-inside: avoid;
`

const LeftPart = styled.div`
  width: 30%;
  display: table-cell;
  text-align: right;
  padding-right: 25px;
`

const RightPart = styled.div`
  width: 70%;
  display: table-cell;
  padding-left: 25px;
  padding-right: 15px;
`

const Separator = styled.div`
  position: absolute;
  background-color: darkgray;
  width: 1px;
  top: 0;
  left: 30%;
  bottom: 0;

  &::after {
    content: "";
    display: block;
    margin-top: 5px;
    width: 11px;
    height: 11px;
    margin-left: -7px;
    border-radius: 8px;
    border: 2px solid ${colors.primary};
    background-color: ${colors.background};
  }

  @media print {
    border-left: 0.5px solid darkgray;
    border-right: 0.5px solid darkgray;
  }
`

const LeftPartTitle = styled.p`
  margin-bottom: 3px;
`

const LeftPartContent = styled.p`
  margin-top: 5px;
  margin-bottom: 3px;
  color: ${colors.textLight};
  font-size: 0.8em;
`

const RightPartTitle = styled.h3`
  margin-bottom: 5px;
`

const RightPartContent = styled.p`
  margin-top: 5px;
  margin-bottom: 10px;
`

const TimeLineItemContainer = (props) => (
  <TimelineItem>
    <LeftPart>
      <LeftPartTitle>{props.leftPartTitle}</LeftPartTitle>
      {props.leftPartContent.map((content, i) => (
        <LeftPartContent key={i}>{content}</LeftPartContent>
      ))}
    </LeftPart>
    <Separator />
    <RightPart>
      <RightPartTitle as={props.noTitle && "p"}>
        {props.rightPartTitle}
      </RightPartTitle>
      {props.rightPartContent.map((content, i) => (
        <RightPartContent key={i}>{content}</RightPartContent>
      ))}
    </RightPart>
  </TimelineItem>
)

const Timeline = (props) => {
  return (
    <TimelineContainer>
      {props.data.map((timelineItemData, i) => (
        <TimeLineItemContainer
          key={i}
          {...timelineItemData}
          noTitle={props.noTitle}
        />
      ))}
    </TimelineContainer>
  )
}

export default Timeline
