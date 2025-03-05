import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Form, notification } from 'antd'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthService, FirebaseService, SignInSchema } from 'utility'
import { FlexRow, InputTextField, SecondaryButton } from 'components'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'context'
import { X } from 'phosphor-react'

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
export const SignInScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  })
  const { login } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onGoogle = async () => {
    try {
      const result = await AuthService.signInWithGoogle()
      console.log('🚀 ~ signin.js:62 ~ onGoogle ~ result:', result)
    } catch (error) {
      console.log('🚀 ~ signin.js:63 ~ onGoogle ~ error:', error)
    }
  }

  // Handle Firebase (Google) Login
  const onSubmit = async data => {
    try {
      setLoading(true)
      const result = await FirebaseService.signInEmailAndPassword(
        data.email,
        data.password,
      )
      login(result)
      setLoading(false)
      notification.success({
        message: 'Success!',
        description: 'Sign In SuccessFully',
      })
      navigate('/app/courses')
    } catch (error) {
      notification.error({
        message: 'Invalid Credentials',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <LoginForm>
        <FlexRow className="justify-content-end p-3">
          <X size={25} />
        </FlexRow>
        <Form
          className="px-4 pb-4 pt-0"
          // onFinish={handleSubmit(onSubmit)} // Handle form submission
        >
          <Title className="mt-0 d-flex justify-content-center">
            Welcome to CPR
          </Title>
          <Form.Item>
            <InputTextField
              name="email"
              label="Email Address"
              control={control}
              errors={errors}
              required
              placeholder="Enter Email Address"
            />
          </Form.Item>
          <Form.Item>
            <InputTextField
              name="password"
              control={control}
              errors={errors}
              label="Password"
              required
              placeholder="Enter your password"
              type="password" // Ensure this is set to "password"
            />
            <FlexRow className="justify-content-end pt-2">
              <h6 className="jus" onClick={() => navigate('/forgot-password')}>
                Forgot your password?
              </h6>
            </FlexRow>
          </Form.Item>
          <SecondaryButton
            htmlType="submit"
            fullWidth
            loading={loading}
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </SecondaryButton>
          <FlexRow className="mt-1 justify-content-center">
            <h6>
              Don't have an account?{' '}
              <span
                className="ms-1 sign-up"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </span>
            </h6>
          </FlexRow>
          <FlexRow className="justify-content-center col align-items-center my-4">
            <div className="col divider" />
            <h6 className="mx-2 m-0">Or connect with</h6>
            <div className="col divider" />
          </FlexRow>
          <FlexRow className="gap-2 col">
            <SecondaryButton
              htmlType="submit"
              fullWidth
              className="mt-2"
              onClick={() => {
                onGoogle()
              }}
            >
              Google
            </SecondaryButton>
            <SecondaryButton
              htmlType="submit"
              fullWidth
              className="mt-2"
              onClick={handleSubmit(onSubmit)}
            >
              Facebook
            </SecondaryButton>
            <SecondaryButton
              htmlType="submit"
              fullWidth
              className="mt-2"
              onClick={handleSubmit(onSubmit)}
            >
              LinkedIn
            </SecondaryButton>
          </FlexRow>
        </Form>
      </LoginForm>
    </Container>
  )
}
