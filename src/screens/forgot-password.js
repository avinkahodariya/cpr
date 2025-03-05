import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Form, notification } from 'antd'
import { yupResolver } from '@hookform/resolvers/yup'
import { ForgotSchema } from 'utility'
import { FlexRow, InputTextField, SecondaryButton } from 'components'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock } from 'phosphor-react'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
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
export const ForgotScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ForgotSchema),
  })
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  // Handle Firebase (Google) Login
  const onSubmit = async data => {
    try {
      setLoading(true)
      setLoading(false)
      navigate('/confirm-code', { state: { email: data.email } })
    } catch (error) {
      notification.error({
        description: error.toString(),
        message: 'Invalid Credentials',
      })
    } finally {
      setLoading(false)
    }
  }

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
            Forgot Password
          </Title>
          <InputTextField
            name="email"
            label="Email Address"
            control={control}
            errors={errors}
            required
            placeholder="Enter Email Address"
          />
          <SecondaryButton
            htmlType="submit"
            fullWidth
            loading={loading}
            onClick={handleSubmit(onSubmit)}
          >
            Send Code
          </SecondaryButton>
          <FlexRow className="mt-4 justify-content-center">
            <h6>
              <ArrowLeft size={20} className="mx-2" /> Back to login
            </h6>
          </FlexRow>
        </Form>
      </LoginForm>
    </Container>
  )
}
