import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import { PrimaryButton } from './Button'

// Styled components
const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 100%;
    max-width: 800px;
    .radio-button{
        display: none !important;
    }
`
const StyledInput = styled(Input)`
    border: none;
    outline: none;
    font-size: 14px;
    color: black;
    flex: 1;

    &:focus {
        box-shadow: none;
    }
`
const options = [
    {
        label: 'Sale',
        value: 'sale',
    },
    {
        label: 'Rent',
        value: 'rent',
    },
];
const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
`;

// Hide the default radio input
const StyledRadio = styled.input`
  display: none;

  &:checked + span {
    border-color: #1890ff; /* Blue border for selected radio */
    background-color: #1890ff;
  }

  &:checked + span::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

// Custom styled span for the radio button
const StyledSpan = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid #d9d9d9;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
  margin-right: 8px;
  
  &:hover {
    border-color: #40a9ff;
  }
`;

// Label for the radio button
const StyledLabel = styled.label`
  font-size: 14px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const RadioGroup = ({ value, onChange, options }) => {
    return (
        <div className="d-flex">
            {options.map((option) => (
                <RadioWrapper key={option.value}>
                    <StyledLabel htmlFor={option.value}>
                        <StyledRadio
                            className="radio-button"
                            type="radio"
                            id={option.value}
                            name="type"
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                        />
                        <StyledSpan />
                        {option.label}
                    </StyledLabel>
                </RadioWrapper>
            ))}
        </div>
    );
};
// Main Component
export const ListingSearchBar = ({ type, setType, handleSearch }) => {
    const [search, setSearch] = useState('')
    const onSubmit = () => {
        if (search !== "") {
            handleSearch(search)
        }
    }
    return (
        <SearchBarWrapper>
            <RadioGroup value={type} onChange={(e) => setType(e.target.value)} options={options} />
            <div className="mr-2" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <StyledInput
                    placeholder="Search for a location"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    prefix={<EnvironmentOutlined />}
                />
            </div>
            <PrimaryButton onClick={onSubmit}>Search</PrimaryButton>
        </SearchBarWrapper>
    )
}
