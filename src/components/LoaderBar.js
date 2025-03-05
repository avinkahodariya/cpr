import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

export const LoaderBar = ({
  content = 'Loading',
  height = '80vh',
  ...rest
}) => {
  return (
    <StyledLoaderContainer height={height}>
      <Spin tip={content} size="large" {...rest} />
    </StyledLoaderContainer>
  )
}

const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height};
  // background-color: rgba(249, 249, 249, 0.42);
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  p {
    background: linear-gradient(90deg, #007bff, #6610f2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    font-weight: 700;
    animation: fadeIn 1.5s infinite alternate;
  }
`

export const PageUnderDevelopment = ({
  // content = 'Loading',
  height = '80vh',
  // ...rest
}) => {
  return (
    <StyledLoaderContainer height={height}>
      <p> Page is Under Development </p>
    </StyledLoaderContainer>
  )
}
