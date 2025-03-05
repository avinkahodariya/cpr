import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { AuthService } from 'utility'
import { Spin } from 'antd'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0a5652 0%, #05302e 100%);
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`

const LoginCard = styled.div`
  width: 350px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  border: 2px solid rgba(60, 200, 187, 0.5);
  backdrop-filter: blur(20px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.5s ease-in-out;
`

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 15px;
`

const Message = styled.p`
  font-size: 14px;
  color: #d1f5f0;
  margin-bottom: 20px;
`

export const ProcessingScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (token) {
      AuthService.storeToken(token)
      setTimeout(() => {
        navigate('/app/courses')
      }, 2000) // Adding delay for better UX
    } else {
      navigate('/login') // Redirect to login if authentication fails
    }
  }, [])

  return (
    <Container>
      <LoginCard>
        <Title>Processing Login...</Title>
        <Message>Verifying your credentials, please wait.</Message>
        <Spin size="large" />
      </LoginCard>
    </Container>
  )
}
