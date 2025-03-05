import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  List,
  Row,
  Select,
  TimePicker,
  Upload,
} from 'antd'
import { Controller } from 'react-hook-form'
import styled from 'styled-components'
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FileOutlined,
  FilterOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { CustomUploadButton, PrimaryButton } from './Button'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
const { Option } = Select

const InputWrapper = styled(Form.Item)`
  .ant-form-item-label > label {
    font-weight: 100 !important;
  }
  .ant-input-disabled {
    background-color: white;
  }
  margin-bottom: 15px !important;
  .ant-form-item {
    margin-bottom: 0 !important;
  }
  .label {
    color: ${({ theme }) => theme.colors.white} !important;
    margin-bottom: 5px;
  }
`

export const InputTextField = ({
  required,
  name,
  control,
  placeholder,
  errors,
  disabled,
  label,
  type = 'text',
  className,
  inputProps = {},
}) => {
  // Dynamically select Input component type
  const Component = type === 'number' ? InputNumber : Input

  // State for password visibility toggle
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleKeyPress = event => {
    if (type === 'number' && !/^[\d.-]$/.test(event.key)) {
      event.preventDefault()
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  const errorMessage =
    typeof errors === 'object' ? errors?.[name]?.message : errors

  return (
    <div className={`col ${className}`}>
      <InputWrapper
        // validateStatus={errors[name] ? 'error' : ''}
        // help={errors[name]?.message}
        required={required}
        style={{ display: 'block', marginBottom: '15px' }} // Ensures label appears above
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div style={{ width: '100%' }}>
              <div className="label">
                {label}
                <span style={{ color: 'red' }}>{required ? '*' : ''}</span>
              </div>
              <Component
                {...field}
                label={label}
                {...inputProps}
                disabled={disabled}
                type={
                  type === 'password' && !passwordVisible ? 'password' : 'text'
                }
                style={{ width: '100%', height: '40px' }}
                onKeyPress={type === 'number' ? handleKeyPress : undefined}
                placeholder={placeholder}
                suffix={
                  type === 'password' && (
                    <div
                      onClick={togglePasswordVisibility}
                      style={{ cursor: 'pointer' }}
                    >
                      {passwordVisible ? (
                        <EyeOutlined />
                      ) : (
                        <EyeInvisibleOutlined />
                      )}
                    </div>
                  )
                }
              />
            </div>
          )}
        />
        {errorMessage && (
          <span style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</span>
        )}
      </InputWrapper>
    </div>
  )
}
export const InputCheckbox = ({ name, control, label, required, errors }) => {
  const errorMessage =
    typeof errors === 'object' ? errors?.[name]?.message : errors

  return (
    <InputWrapper
      // validateStatus={errors[name] ? 'error' : ''}
      // help={errors[name]?.message}
      required={required}
      style={{ display: 'block', marginBottom: '15px' }} // Ensures label appears above
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox {...field} checked={field.value}>
              <div className="label mb-0">{label}</div>
              {required && <span style={{ color: 'red' }}> *</span>}
            </Checkbox>
          </div>
        )}
      />
      {errorMessage && (
        <span style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</span>
      )}
    </InputWrapper>
  )
}
export const TimeIntervalPicker = ({
  required,
  name,
  control,
  errors,
  label,
  timeFormat = 'hh:mm A', // Ant Design default AM/PM format
}) => {
  // Function to validate time intervals
  const validateTimeRange = timeRange => {
    if (!timeRange || timeRange.length < 2) {
      return 'Please select a valid time interval.'
    }
    const [start, end] = timeRange
    if (dayjs(end).isBefore(start)) {
      return 'End time must be after start time.'
    }
    return true
  }

  return (
    <div style={{ width: '100%' }}>
      {label} <span style={{ color: 'red' }}>{required ? '*' : ''}</span>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required && 'Time interval is required.',
          validate: validateTimeRange,
        }}
        render={({ field }) => (
          <TimePicker.RangePicker
            {...field}
            format={timeFormat}
            use12Hours
            style={{ width: '100%', height: '40px' }}
            placeholder={['Start Time', 'End Time']}
          />
        )}
      />
      {errors[name] && (
        <div style={{ color: 'red', marginTop: '5px' }}>
          {errors[name]?.message}
        </div>
      )}
    </div>
  )
}

export const InputDateField = ({
  name,
  control,
  placeholder,
  errors,
  label,
  required,
  disabled,
  disabledDate,
}) => {
  const errorMessage =
    typeof errors === 'object' ? errors?.[name]?.message : errors
  return (
    <div style={{ width: '100%' }}>
      <InputWrapper required={required}>
        {label} {required && <span style={{ color: 'red' }}> * </span>}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              disabledDate={disabledDate}
              disabled={disabled}
              placeholder={placeholder}
              style={{ width: '100%', height: '40px' }}
            />
          )}
        />
        {errorMessage && (
          <span style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</span>
        )}
      </InputWrapper>
    </div>
  )
}

export const InputDateRangeField = ({
  name,
  control,
  errors,
  label,
  required,
}) => {
  return (
    <div style={{ width: '100%' }}>
      <InputWrapper
        required
        validateStatus={errors[name] ? 'error' : ''}
        help={errors[name]?.message}
      >
        {label} {required && <span style={{ color: 'red' }}> * </span>}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Start Date */}
          <div style={{ width: '48%' }}>
            <Controller
              name={`${name}.startDate`} // Access startDate in the object
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  style={{ width: '100%', height: '40px' }}
                  onChange={date => field.onChange(date)} // Ensure the date value is updated
                />
              )}
            />
          </div>

          {/* End Date */}
          <div style={{ width: '48%' }}>
            <Controller
              name={`${name}.endDate`} // Access endDate in the object
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  style={{ width: '100%', height: '40px' }}
                  onChange={date => field.onChange(date)} // Ensure the date value is updated
                />
              )}
            />
          </div>
        </div>
      </InputWrapper>
    </div>
  )
}

export const InputSelectField = ({
  name,
  control,
  className,
  label,
  options = [],
  placeholder = 'Select an option',
  errors = {},
  required,
  inputProps = {},
}) => {
  return (
    <div className={className}>
      <InputWrapper
        required={required}
        validateStatus={errors[name] ? 'error' : ''}
        help={errors[name]?.message}
      >
        <div className="label">
          {label} {required && <span style={{ color: 'red' }}> * </span>}
        </div>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              style={{ width: '100%', height: '40px' }}
              {...inputProps}
              showSearch
              allowClear
              {...field}
              placeholder={placeholder}
              popupClassName="filter-box"
            >
              {options.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          )}
        />
      </InputWrapper>
    </div>
  )
}

export const InputTextAreaField = ({
  name,
  label,
  control,
  errors,
  placeholder = 'Enter text',
  rules,
  required,
}) => {
  const errorMessage =
    typeof errors === 'object' ? errors?.[name]?.message : errors
  return (
    <InputWrapper required={required}>
      {label} {required && <span style={{ color: 'red' }}> * </span>}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field }) => (
          <Input.TextArea placeholder={placeholder} {...field} />
        )}
      />
      {errorMessage && (
        <span style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</span>
      )}
    </InputWrapper>
  )
}

// Styled Components
// const SearchWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 20px;
// `

// const StyledInput = styled(Input.Search)`
//   width: 100%;
//   border-radius: 2px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;
//   &:hover {
//     box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
//   }

//   .ant-input {
//     height: 35px;
//     border-radius: 2px;
//   }

//   .ant-input-search-button {
//     border-radius: 2px;
//     background-color: rgb(42, 51, 80);
//    border: none;
//    height: 35px;
//    color: white !important;
//   }

//   .ant-input-search {
//     padding: 0 16px;
//   }
// `;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7f7fa;
  padding: 10px 20px;
  border-radius: 8px;
  width: 100%;
`

const EventInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #333;

  svg {
    margin-right: 8px;
    font-size: 18px;
  }
`

const StyledInput = styled(Input)`
  width: 250px;
  border-radius: 5px;
`

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
`

export const CustomSearchField = ({
  setSearch,
  search,
  titleIcon,
  total,
  title,
}) => {
  const handleSearch = value => {
    setSearch(value)
  }

  return (
    <Container>
      <EventInfo>
        {titleIcon} {total || 0} {title}
      </EventInfo>
      <Row>
        <Col>
          <StyledInput
            value={search}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col>
          <StyledButton className="ms-2" icon={<FilterOutlined />}>
            Filter
          </StyledButton>
        </Col>
      </Row>
    </Container>
  )
}

export const CommonInputArrayField = ({
  required,
  name,
  control,
  errors,
  label,
  type = 'text',
  setValues,
  values,
  setFormValues,
  inputProps = {},
}) => {
  const Component = type === 'number' ? InputNumber : Input
  const handleKeyPress = event => {
    if (type === 'number' && !/^[\d-]$/.test(event.key)) {
      event.preventDefault()
    }
  }

  const handleRemove = index => {
    setValues(prevValues => prevValues.filter((_, i) => i !== index))
  }

  return (
    <InputWrapper
      validateStatus={errors[name] ? 'error' : ''}
      help={errors[name]?.message}
      required={required}
    >
      {label} {required && <span style={{ color: 'red' }}> * </span>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Row>
            <Col span={20}>
              <Component
                style={{ width: '100%', height: '40px' }}
                {...field}
                {...inputProps}
                onKeyPress={type === 'number' ? handleKeyPress : undefined}
              />
            </Col>
            <Col span={3} className="ml-2">
              <PrimaryButton
                style={{ width: '100%', height: '40px' }}
                onClick={() => {
                  if (field?.value) {
                    setValues([...values, field?.value])
                    setFormValues(name, '')
                  }
                }}
                icon={<PlusOutlined />}
              />
            </Col>
          </Row>
        )}
      />
      {/* Render the list of values */}
      {values?.length > 0 && (
        <List
          style={{ marginTop: '10px' }}
          bordered
          dataSource={values}
          locale={{ emptyText: null }}
          renderItem={(item, index) => (
            <div className="d-flex justify-content-between align-items-center p-1">
              {/* Link on top */}
              <div>
                <p>
                  <strong>=</strong>
                  <a href={item} target="_blank" rel="noopener noreferrer">
                    {item}
                  </a>
                </p>
              </div>
              {/* Description on the next line */}
              <Button
                type="link"
                danger
                style={{ padding: '0' }} // Remove padding from the button
                onClick={() => handleRemove(index)}
              >
                <DeleteOutlined />
              </Button>
            </div>
          )}
        />
      )}
    </InputWrapper>
  )
}

const StylePhone1 = styled(PhoneInput)`
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
  height: 40px;
  background: white;
  .react-tel-input {
    background: white;
  }
  .form-control {
    width: calc(100% - 50px);
    box-sizing: border-box;
    border: none;
    padding: 8px;
    margin-left: 50px;
  }

  .flag-dropdown {
    position: absolute;
    left: 10px;
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
  }
  .selected-flag {
    padding: 0px;
    // width: unset;
  }
  &:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
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
    color: ${({ theme }) => theme.colors.danger} !important;
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
    background: ${({ theme }) => theme.colors.body} !important;
    border: solid 1px ${({ theme }) => theme.colors.inputbackground};
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
export const CommonPhoneBorderField = ({
  label,
  onChange,
  name,
  control,
  errors,
  placeholder,
  required,
  className,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <InputWrapper
          // validateStatus={errors[name] ? 'error' : ''}
          // help={errors[name]?.message}
          required={required}
          style={{ display: 'block', marginBottom: '15px' }} // Ensures label appears above
          className={className}
        >
          <CustomField1 error={errors?.message ? true : undefined}>
            <div className="label">
              {label}
              <span style={{ color: 'red' }}>{required ? '*' : ''}</span>
            </div>{' '}
            <StylePhone1
              country="us" // Default to US (or change to any default country)
              placeholder={placeholder || 'Enter phone number'} // Customizable placeholder
              value={field.value} // Bind the value to react-hook-form
              countryCodeEditable // Allow editing the country code
              className="phone-input"
              onChange={value => {
                field.onChange(value) // Update react-hook-form field
                if (onChange) onChange(value) // Trigger external change handler
              }}
              inputProps={{
                name,
                ...rest,
              }}
            />
            {errors?.message && <p className="error">{errors?.message}</p>}
          </CustomField1>
        </InputWrapper>
      )}
    />
  )
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
  margin: auto;
`

const SearchIcon = styled.span`
  margin-right: 8px;
  color: #c3c3c3;
  margin-left: 8px;
  display: flex;
  align-items: center;
`

export const SearchField = ({ placeholder = 'Search', onSearch }) => {
  return (
    <SearchContainer>
      <SearchIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
        >
          <path d="M10 2a8 8 0 105.293 13.707l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
        </svg>
      </SearchIcon>
      <Input
        placeholder={placeholder}
        onChange={e => onSearch && onSearch(e.target.value)}
        style={{
          height: '40px',
          border: 'none',
          boxShadow: 'none',
          width: '100%',
          backgroundColor: 'transparent',
        }}
      />
    </SearchContainer>
  )
}

const FileContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f4f4f4;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 300px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`

const FileName = styled.p`
  flex: 1;
  margin: 0;
  margin-left: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: darkred;
  }
`

export const CustomDocumentUploader = ({
  name,
  control,
  fileList,
  errors,
  setValue,
  setFileList,
}) => {
  // Handle the change of uploaded files
  const handleUploadChange = newFileList => {
    if (newFileList.length > 0) {
      setFileList(newFileList)
      setValue(name, newFileList)
    } else {
      setFileList([])
      setValue(name, null)
    }
  }

  // Handle file removal
  const handleRemove = file => {
    const updatedFileList = fileList.filter(item => item.uid !== file.uid)
    setFileList(updatedFileList)
    setValue(name, updatedFileList)
  }

  return (
    <div className="ps-2">
      {/* <p>Upload Documents *</p> */}
      {errors?.[name] && fileList?.length === 0 && (
        <p className="error">{errors?.[name]?.message}</p>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        render={() => (
          <>
            <Upload
              accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
              multiple
              fileList={fileList}
              onChange={info => handleUploadChange(info.fileList)}
              onRemove={handleRemove}
              beforeUpload={() => false}
            >
              <CustomUploadButton title="Upload Documents" />
            </Upload>

            {fileList?.map(file => (
              <li key={file.uid}>
                <FileContainer className="mt-2">
                  <FileOutlined
                    style={{
                      fontSize: '18px',
                      color: '#555',
                    }}
                  />
                  <FileName title={file.name}>
                    {file.name || file.substring(file.lastIndexOf('/') + 1)}
                  </FileName>
                  <DeleteButton onClick={() => handleRemove(file)}>
                    <DeleteOutlined />
                  </DeleteButton>
                </FileContainer>
              </li>
            ))}
          </>
        )}
      />
    </div>
  )
}
