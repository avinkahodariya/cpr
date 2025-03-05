import { ArrowLeft } from 'phosphor-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HeaderBox = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.h3};
  cursor: pointer;
`

export const ScreenHeader = ({ text }) => {
  const navigate = useNavigate()
  return (
    <HeaderBox className="d-flex flex-row">
      <span className="mx-2" onClick={() => navigate(-1)}>
        <ArrowLeft className="me-2" size={20} />
      </span>
      <p>{text}</p>
    </HeaderBox>
  )
}
