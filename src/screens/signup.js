import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Form, notification } from 'antd'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthService, FirebaseService, SignUpSchema } from 'utility'
import {
  FlexRow,
  InputCheckbox,
  InputTextField,
  SecondaryButton,
} from 'components'
import { useNavigate } from 'react-router-dom'
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
export const SignUpScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  })
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  // Handle Firebase (Google) Login
  const onSubmit = async data => {
    try {
      setLoading(true)
      await AuthService.register(data)
      setLoading(false)
      notification.success({
        message: 'Success!',
        description: 'Sign In SuccessFully',
      })
      navigate('/login')
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
          <InputTextField
            name="name"
            label="Name"
            control={control}
            errors={errors}
            required
            placeholder="Enter Name"
          />
          <InputTextField
            name="email"
            label="Email Address"
            control={control}
            errors={errors}
            required
            placeholder="Enter Email Address"
          />
          <InputTextField
            name="password"
            control={control}
            errors={errors}
            label="Password"
            required
            placeholder="Enter your password"
            type="password" // Ensure this is set to "password"
          />
          <InputTextField
            name="confirmPassword"
            control={control}
            errors={errors}
            label="Confirm Password"
            required
            placeholder="Enter confirm password"
            type="password" // Ensure this is set to "password"
          />
          <InputCheckbox
            name="terms"
            control={control}
            errors={errors}
            label="I agree to the terms and conditions"
          />
          <SecondaryButton
            htmlType="submit"
            fullWidth
            loading={loading}
            onClick={handleSubmit(onSubmit)}
          >
            Create Account
          </SecondaryButton>
          <FlexRow className="mt-1 justify-content-center">
            <h6>
              Allready have an account?{' '}
              <span className="ms-1 sign-up" onClick={() => navigate('/login')}>
                Login
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
              loading={loading}
              className="mt-2"
              onClick={() => {
                FirebaseService.continueWithGoogle()
              }}
            >
              Google
            </SecondaryButton>
            <SecondaryButton
              htmlType="submit"
              fullWidth
              loading={loading}
              className="mt-2"
              onClick={handleSubmit(onSubmit)}
            >
              Facebook
            </SecondaryButton>
            <SecondaryButton
              htmlType="submit"
              fullWidth
              className="mt-2"
              loading={loading}
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
