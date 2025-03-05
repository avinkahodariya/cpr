import { DeleteOutlined, EditOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'

const CommonButton = styled(Button)`
  border-radius: 8px;
  font-weight: bold;
  padding: 8px 16px;
  height: 43px;
`

export const GreenOutLinedButton = styled(Button)`
  background: #0a2724;
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-width: 0.78px, 0.78px, 1.96px, 0.78px;
  border-style: solid;
  border-color: #23a455;
  height: 33.75;
  border-top-width: 0.78px;
  border-right-width: 0.78px;
  border-bottom-width: 1.96px;
  border-left-width: 0.78px;
  border-radius: 6.28px;
  color: white;
  &:hover {
    color: white !important;
    border-color: #23a455 !important;
    background: #1f1f1f !important;
  }
  cursor: pointer;
  border-radius: 5px;
`

const StyledButton = styled(CommonButton)`
  background: #393848;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    background-color: white;
    color: #393848;
    border: 1px solid #393848;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); /* Focus outline */
  }
`

const NewButton = styled(CommonButton)`
  background: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.primary};
  transition: filter 0.3s, border 0.3s;
  &:hover {
    filter: brightness(90%);
    border: 1px solid ${({ color }) => color};
    background: ${({ color }) => color} !important;
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`

export const PrimaryButton = ({
  type,
  className,
  children,
  onClick,
  fullWidth,
  loading,
  icon,
  ...props
}) => {
  return (
    <StyledButton
      variant={type}
      className={className}
      style={{ width: fullWidth ? '100%' : '' }}
      onClick={onClick}
      {...props}
    >
      {Boolean(loading) && <Spin />}
      {icon && icon} {children}
    </StyledButton>
  )
}

export const SecondaryButton = ({
  type,
  className,
  children,
  onClick,
  fullWidth,
  loading,
  ...props
}) => {
  return (
    <NewButton
      variant={type}
      className={className}
      color="#3CC8BB"
      style={{ width: fullWidth ? '100%' : '' }}
      onClick={onClick}
      {...props}
    >
      {loading ? <Spin /> : ''} {children}
    </NewButton>
  )
}

export const GreenButton = ({
  type = 'solid',
  className,
  children,
  onClick,
  fullWidth,
  loading,
  ...props
}) => {
  return (
    <NewButton
      variant={type}
      className={className}
      color="#23A455"
      style={{ width: fullWidth ? '100%' : '' }}
      onClick={onClick}
      {...props}
    >
      {loading ? <Spin /> : ''} {children}
    </NewButton>
  )
}

export const BorderButton = ({
  type = 'outlined',
  className,
  children,
  onClick,
  fullWidth,
  loading,
  color,
  ...props
}) => {
  return (
    <CommonButton
      variant={type}
      className={className}
      style={{
        width: fullWidth ? '100%' : '',
        background: 'transparent',
        borderColor: color,
        color,
      }}
      onClick={onClick}
      {...props}
    >
      {loading ? <Spin /> : ''} {children}
    </CommonButton>
  )
}

const CustomButton = styled(CommonButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #85c78f;
  background-color: #e8f6e8;
  color: #2e8540;
  font-size: 16px;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  height: 50px;
  border-radius: 20px;
  margin-right: 10px;
  &:hover {
    background-color: #e8f6e8 !important;
    border-color: #78ba85 !important;
    color: #267033 !important;
  }
`

export const CustomUploadButton = ({ title }) => (
  <div className="d-flex justify-content-center">
    <CustomButton>
      <UploadOutlined />
      <p className="mb-0">{title}</p>
    </CustomButton>
  </div>
)

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  color: #555;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: red;
  }
`

export const CustomDeleteButton = ({ onClick }) => (
  <DeleteButton onClick={onClick}>
    <DeleteOutlined />
  </DeleteButton>
)

const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  color: #555;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: blue;
  }
`

export const CustomEditButton = ({ onClick }) => (
  <EditButton className="mr-2" onClick={onClick}>
    <EditOutlined />
  </EditButton>
)
