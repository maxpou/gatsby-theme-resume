import React from 'react';
import styled from "styled-components"
import QrImage from "./qr-code.png"
import { media, colors } from "../../tokens"
import cleanupUrl from "../../lib/cleanupUrl"

const Img = styled.img`
  width: 100px;
`

const QrCodeContainer = styled.a`
  top: 20px;
  float: right;
  position: relative;
  text-decoration: none;
  @media ${media.medium} {
    display: none;
  }
`

const Description = styled.span`
  display: block;
  font-size: 0.8em;
  margin-top: -10px;
  padding-left: 5px;
  color: ${colors.textLight};
`


const QrCode = ({ url }) => {
  return (
    <QrCodeContainer href={url}>
      <Img src={QrImage} alt="QR Code" />
      <Description>{cleanupUrl(url)}</Description>
    </QrCodeContainer>
  )
}

export default QrCode