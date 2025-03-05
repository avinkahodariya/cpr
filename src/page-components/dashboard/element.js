import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FlexColumn } from 'components'

const TitleContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 20px 0;
`

const BackgroundText = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.05); /* Faded text effect */
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`

const TitleText = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  position: relative;
  z-index: 1;
`

const Line = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

const LineSegment = styled.div`
  width: 40%;
  height: 2px;
  background-color: white;
`

const CenterHighlight = styled.div`
  width: 80px;
  height: 4px;
  background-color: #4caf50; /* Green highlight */
  margin: 0 10px;
`

export const SectionShadowTitle = ({ title }) => {
  return (
    <FlexColumn className="justify-content-center align-items-center">
      <TitleContainer className="container-fluid">
        <BackgroundText className="">{title}</BackgroundText>
        <TitleText className="mb-0">{title}</TitleText>
      </TitleContainer>
      <Line className="">
        <LineSegment />
        <CenterHighlight />
        <LineSegment />
      </Line>
    </FlexColumn>
  )
}
