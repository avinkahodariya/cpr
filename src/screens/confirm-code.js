import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Form, notification } from 'antd'
import { yupResolver } from '@hookform/resolvers/yup'
import { ForgotSchema } from 'utility'
import { FlexRow, SecondaryButton } from 'components'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock } from 'phosphor-react'
import { OTPInput } from 'elements'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  .link {
    text-decoration: underline;
  }
  .desc {
    font-size: 12px;
  }
  h6 {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    .sign-up {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  .divider {
    border: solid 1px ${({ theme }) => theme.colors.white};
    height: 1px;
  }
`
const LoginForm = styled.div`
  width: 500px;
  background: #ffffff;
  border: 2px solid rgba(60, 200, 187, 0.5);
  border-radius: 24px;
  backdrop-filter: blur(14px);
  background: linear-gradient(135deg, #0a5652 0%, #05302e 100%);
`

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`
export const ConfirmCodeScreen = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ForgotSchema),
  })
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  // Handle Firebase (Google) Login
  const onSubmit = async data => {
    console.log('🚀 ~ forgot-password.js:61 ~ ForgotScreen ~ data:', data)
    try {
      setLoading(true)
      setLoading(false)
      navigate('/confirm-code')
    } catch (error) {
      notification.error({
        description: error.toString(),
        message: 'Invalid Credentials',
      })
    } finally {
      setLoading(false)
    }
  }
  const location = useLocation()
  console.log(
    '🚀 ~ confirm-code.js:74 ~ ConfirmCodeScreen ~ location:',
    location,
  )
  return (
    <Container>
      <LoginForm>
        <Form
          className="p-4"
          // onFinish={handleSubmit(onSubmit)} // Handle form submission
        >
          <Title className="mt-0 d-flex justify-content-center">
            <Lock size={30} />
          </Title>
          <Title className="mt-0 d-flex justify-content-center">
            Enter confirmation code
          </Title>
          <Title className="desc mt-0 d-flex justify-content-center">
            We have sent a code to {location.state.email}
          </Title>
          <OTPInput errors={errors} />
          <SecondaryButton
            htmlType="submit"
            fullWidth
            loading={loading}
            onClick={handleSubmit(onSubmit)}
          >
            Verify
          </SecondaryButton>
          <FlexRow className="mt-4 justify-content-center">
            <h6>
              Didn't get it? <span className="link">Resend Code</span>
            </h6>
          </FlexRow>
          <FlexRow className="mt-4 justify-content-center">
            <h6>
              <ArrowLeft size={20} className="mx-2" /> Go Back
            </h6>
          </FlexRow>
        </Form>
      </LoginForm>
    </Container>
  )
}
