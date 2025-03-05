import styled from 'styled-components'
import { Form, Select } from 'antd'

export const CustomField = styled(Form.Item)`
  margin-bottom: 0 !important;
  border: 0 !important;
  width: 100%;
  .ant-select-selection-placeholder {
    color: #6c757d !important;
    font-family: 'Exo', sans-serif;
    opacity: 0.8;
  }
  ${({ height }) => height && 'height: 100%;'}
  .ant-form-item {
    border: 0 !important;
  }
  .ant-input-affix-wrapper {
    border: 0 !important;
    ${'' /* background: ${({ bg }) => bg || '#edf1fb'} !important; */}
    box-shadow: ${({ shadow }) =>
      shadow && '0 0 6px 1px rgba(62, 28, 131, 0.1)'};
    height: 57px !important;
    border: 0 !important;
    border-radius: 5px;
  }
  .ant-select {
    box-shadow: ${({ shadow }) =>
      shadow && '0 0 6px 1px rgba(62, 28, 131, 0.1)'};
    height: 57px !important;
    border: 0 !important;
    background: ${({ bg }) => bg || '#edf1fb'} !important;
    border-radius: 5px;
  }
  .ant-select-selector {
    border: 0 !important;
    background: ${({ bg }) => bg || '#edf1fb'} !important;
    border-radius: 5px;
  }
  .radio-gap {
    gap: 10px;
  }
  .password-icon {
    position: absolute;
    top: 20%;
    right: 10px;
  }
  .relative {
    position: relative;
  }
  .error {
    ${'' /* color: ${({ theme }) => theme.colors.danger} !important; */}
  }
  .field {
    width: 100%;
  }
  .border {
    border: solid 1px #22242626;
    border-radius: 5px;
  }
  .react-datepicker__input-container {
    display: flex;
    align-items: center;
    input {
      padding-left: 30px !important;
    }
  }
  .uploadBox {
    height: 100%;
    display: flex;
    width: fit-content;
  }
  .rc-uploadBox {
    height: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border: 2px dashed #cfcfcf;
    border-radius: 5px;
    textalign: center;
    align-items: center;
  }
  .sigCanvas {
    width: 300px;
    border: solid 1px #22242626;
    border-radius: 5px;
  }
  .otp-input {
    width: ${({ otpLength }) => 100 / otpLength - 5}% !important;
    input {
      text-align: center;
    }
  }
  .otp {
    justify-content: space-between;
  }
  .app-round {
    border-radius: 50%;
    height: 70px;
    width: 70px;
    ${
      '' /* background: ${({ theme }) => theme.colors.body} !important;
        border: solid 1px ${({ theme }) => theme.colors.inputbackground}; */
    }
    .img-preview {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .close-icon {
      position: absolute;
      top: 0px;
      left: 65px;
    }
  }
  .ant-select-selector {
  }

  .react-tel-input {
    border: none !important;
    box-shadow: none !important;
  }
  .flag-dropdown {
    border: none !important;
    box-shadow: none !important;
  }

  .react-tel-input .form-control {
    border: none !important;
    box-shadow: none !important;
  }
`

export const CustomField1 = styled(Form.Item)`
  margin-bottom: 0 !important;
  border: 0 !important;
  width: 100%;
  ${({ height }) => height && 'height: 100%;'}
  .ant-form-item {
    border: 0 !important;
  }
  .ant-input-affix-wrapper {
    border: 0 !important;
    box-shadow: ${({ shadow }) =>
      shadow && '0 0 6px 1px rgba(62, 28, 131, 0.1)'};
    height: 57px !important;
    border: 0 !important;
    border-radius: 5px;
  }
  .relative {
    position: relative;
  }
  .error {
    ${'' /* color: ${({ theme }) => theme.colors.danger} !important; */}
  }
  .field {
    width: 100%;
  }
  .border {
    border: solid 1px #22242626;
    border-radius: 5px;
  }
  .react-datepicker__input-container {
    display: flex;
    align-items: center;
    input {
      padding-left: 30px !important;
    }
  }
  .uploadBox {
    height: 100%;
    display: flex;
    width: fit-content;
  }
  .rc-uploadBox {
    height: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border: 2px dashed #cfcfcf;
    border-radius: 5px;
    textalign: center;
    align-items: center;
  }
  .sigCanvas {
    width: 300px;
    border: solid 1px #22242626;
    border-radius: 5px;
  }
  .otp-input {
    width: ${({ otpLength }) => 100 / otpLength - 5}% !important;
    input {
      text-align: center;
    }
  }
  .otp {
    justify-content: space-between;
  }
  .app-round {
    border-radius: 50%;
    height: 70px;
    width: 70px;
    ${
      '' /* background: ${({ theme }) => theme.colors.body} !important;
        border: solid 1px ${({ theme }) => theme.colors.inputbackground}; */
    }
    .img-preview {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .close-icon {
      position: absolute;
      top: 0px;
      left: 65px;
    }
  }
  .ant-select-selector {
  }
`

export const CustomDropdown = styled(Select)`
            min-width: unset !important;
            overflow-wrap: anywhere !important;
            .item {
                word - wrap: break-word  !important;
        }
            `
export const FilterSelectBox = styled(CustomField)`
  .ant-select-selector {
    background-color: #ffffff !important;
    border: 1px solid #e6eaf3 !important;
  }
`
