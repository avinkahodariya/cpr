import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import styled from 'styled-components'

const OTPContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  input {
    border-radius: 8px;
    border: 1px solid #00a99d;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    background: transparent;
    color: #fff;
    outline: none;
    transition: all 0.3s ease-in-out;
    width: 50px !important;
    height: 50px;
    &:focus {
      border-color: #00ffd1;
      box-shadow: 0 0 10px rgba(0, 255, 209, 0.8);
    }
  }
`

export const OTPInput = () => {
  const [otp, setOtp] = useState('')

  return (
    <OTPContainer>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        containerStyle={{
          justifyContent: 'space-between',
          display: 'flex',
          width: '100%',
        }}
        isInputNum
        separator={<span>&nbsp;</span>}
        renderSeparator={<span>&nbsp;</span>}
        renderInput={props => <input {...props} />}
      />
    </OTPContainer>
  )
}
